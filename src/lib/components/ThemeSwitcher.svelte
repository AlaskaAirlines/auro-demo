<script lang="ts">
import { onMount } from "svelte";
// import "@aurodesignsystem/auro-formkit/auro-select";

const themes = [
	{
		value: "aag-theme-as",
		label: "Alaska",
	},
	{
		value: "aag-theme-asc",
		label: "Alaska Classic",
	},
	{
		value: "aag-theme-a1",
		label: "Auro 1",
	},
	{
		value: "aag-theme-a2",
		label: "Auro 2",
	},
	{
		value: "aag-theme-ha",
		label: "Hawaiian",
	},
];

let currentTheme = themes[0].value;

function setTheme(theme: string) {
	currentTheme = theme;
	document.body.setAttribute("data-aag-theme", theme);
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
