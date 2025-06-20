<script>
import { onMount } from "svelte";
import "@aurodesignsystem/auro-header";
import "@aurodesignsystem/auro-hyperlink";

// Get the demo details from the page data
export let data;
const { demoName, demoDetails } = data;

import { base } from "$app/paths";

// Dynamic component placeholder
let DemoComponent;
let loading = true;
let error = null;

onMount(async () => {
	try {
		// Import the demo component dynamically
		const module = await import(/* @vite-ignore */ demoDetails.importPath);
		DemoComponent = module.default;
		loading = false;
	} catch (err) {
		console.error("Error loading demo component:", err);
		error = `Failed to load demo: ${err.message}`;
		loading = false;
	}
});
</script>

<div class="p-8">

    <div class="flex items-center justify-between mb-8">
        <auro-header level="1" display="700" color="var(--ds-basic-color-brand-primary)">
            {demoDetails.title}
        </auro-header>
        <auro-hyperlink href="{base}/demos" relative>
           Demo Showcase
        </auro-hyperlink>
    </div>
  
  {#if loading}
    <div class="my-8 text-center">
      <p>Loading demo...</p>
    </div>
  {:else if error}
    <div class="my-8 text-center text-red-600">
      <p>{error}</p>
    </div>
  {:else if DemoComponent}
    <div class="my-8">
      <svelte:component this={DemoComponent} />
    </div>
  {:else}
    <div class="my-8 text-center text-red-600">
      <p>Demo not found</p>
    </div>
  {/if}
</div>

<style>
  /* Add any global styles for demos here */
</style>
