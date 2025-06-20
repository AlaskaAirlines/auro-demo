<script lang="ts">
import { base } from "$app/paths";
import { onMount } from "svelte";

// import "@aurodesignsystem/auro-formkit/auro-select";

/**
 * Themes configuration:
 * - value: The value of the theme to be stored in localStorage and used as a data attribute
 * - label: The display label in the dropdown
 * - cssFile: The path to the CSS file that should be loaded when this theme is selected
 */

const themes = [
	{
		value: "aag-theme-as",
		label: "Alaska",
		cssFile: `${base}/alaska.global.min.css`,
	},
	{
		value: "aag-theme-asc",
		label: "Alaska Classic",
		cssFile: `${base}/alaska-classic.global.min.css`,
	},
	{
		value: "aag-theme-a1",
		label: "Auro 1",
		cssFile: `${base}/auro-1.global.min.css`,
	},
	{
		value: "aag-theme-a2",
		label: "Auro 2",
		cssFile: `${base}/auro-2.global.min.css`,
	},
	{
		value: "aag-theme-ha",
		label: "Hawaiian",
		cssFile: `${base}/hawaiian.global.min.css`,
	},
];

let currentTheme = themes[0].value;
let themeLinkElement: HTMLLinkElement | null = null;

function setTheme(theme: string) {
	currentTheme = theme;
	document.body.setAttribute("data-aag-theme", theme);

	// Get the theme object based on the selected value
	const selectedTheme = themes.find((t) => t.value === theme);

	// Handle CSS file swapping
	if (selectedTheme) {
		// Remove the previous theme's CSS if it exists
		if (themeLinkElement) {
			document.head.removeChild(themeLinkElement);
			themeLinkElement = null;
		}

		// Add the new theme's CSS if it has one
		if (selectedTheme.cssFile) {
			themeLinkElement = document.createElement("link");
			themeLinkElement.rel = "stylesheet";
			themeLinkElement.href = selectedTheme.cssFile;
			document.head.appendChild(themeLinkElement);
		}
	}

	// Save the theme preference in localStorage for persistence
	localStorage.setItem("auro-theme", theme);
}

onMount(() => {
	// Try to get the saved theme from localStorage
	const savedTheme = localStorage.getItem("auro-theme");
	if (savedTheme && themes.some((theme) => theme.value === savedTheme)) {
		setTheme(savedTheme);
	} else {
		// Set default theme if no saved theme
		setTheme(currentTheme);
	}
});
</script>

<div class="theme-switcher">
  <div class="relative">
    <select
      id="theme-select"
      value={currentTheme}
      on:change={(e) => setTheme(e.currentTarget.value)}
      class="block w-full pl-3 pr-10 py-1 bg-white border text-sm border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
    >
      {#each themes as theme}
        <option value={theme.value}>{theme.label}</option>
      {/each}
    </select>
  </div>
</div>
