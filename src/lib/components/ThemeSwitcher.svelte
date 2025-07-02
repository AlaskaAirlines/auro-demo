<script lang="ts">
import { base } from "$app/paths";
import { onMount } from "svelte";

import "@aurodesignsystem/auro-formkit/auro-select";
import "@aurodesignsystem/auro-formkit/auro-menu";

// Define interface for auro-select custom element
interface AuroSelectElement extends HTMLElement {
	value: string;
}

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

function handleThemeChange(event: CustomEvent) {
	if (event?.detail?.value) {
		setTheme(event.detail.value);
	}
}

onMount(() => {
	// Try to get the saved theme from localStorage
	const savedTheme = localStorage.getItem("auro-theme");
	let themeToUse = currentTheme;

	if (savedTheme && themes.some((theme) => theme.value === savedTheme)) {
		themeToUse = savedTheme;
	}

	// Set the theme in the DOM
	setTheme(themeToUse);

	// Wait for the component to be defined in the DOM
	setTimeout(() => {
		const themeSelect = document.getElementById(
			"theme-select",
		) as AuroSelectElement;
		themeSelect.value = themeToUse;
		if (themeSelect) {
			// Set the value and trigger the component to update its UI
			themeSelect.value = themeToUse;

			// Add event listener for the auroSelect event
			themeSelect.addEventListener("input", (e: Event) => {
				const customEvent = e as CustomEvent;
				handleThemeChange(customEvent);
			});
		}
	}, 100); // Give the component a bit more time to fully initialize
});
</script>

<div class="theme-switcher">
  <div class="relative">
    <auro-select id="theme-select" required>
      <auro-menu>
        {#each themes as theme}
          <auro-menuoption value={theme.value}>{theme.label}</auro-menuoption>
        {/each}
      </auro-menu>
    </auro-select>
  </div>
</div>

<style>
</style>
