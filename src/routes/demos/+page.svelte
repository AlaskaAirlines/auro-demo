<script>
import "@aurodesignsystem/auro-header";
import "@aurodesignsystem/auro-button";
import "@aurodesignsystem/auro-card";
import { base } from "$app/paths";
import { getAllDemos } from "$lib/demo-registry";

// Get all available demos from the registry
const demos = getAllDemos();
</script>

<div class="space-y-8 p-8">
  <auro-header level="1" display="800" color="var(--ds-basic-color-brand-primary)">Demo Showcase</auro-header>

  <p class="text-lg mb-8">
    Select a demo below to explore different components and configurations.
  </p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each demos as demo}
      <a href="{base}/demos/{demo.name}" class=" hover:shadow-lg transition-shadow duration-200 pb-4 px-4 bg-(--ds-advanced-color-button-secondary-background) border border-(--ds-basic-color-border-subtle) rounded-lg">

        <auro-header level="3" display="500" color="var(--ds-basic-color-texticon-accent1)">{demo.title}</auro-header>
        <p class="text-sm text-(--ds-advanced-color-button-flat-text)">
            {demo.description || `Explore ${demo.sentenceCase} examples and configurations`}
        </p>
    </a>
    {/each}
  </div>
  
{#if typeof window !== 'undefined' && window.location.hostname === 'localhost'}
    <div class="mt-12">
        <auro-header level="3" display="500" color="var(--ds-basic-color-brand-primary)">Add Your Own Demo</auro-header>
        <p class="mt-2">
            To add a new demo, simply create a Svelte component in the <code>src/demos/</code> folder. 
            Use kebab-case for the filename (like <code>button-variants.svelte</code>) and keep component 
            names singular. Your demo will automatically appear in this list once created.
        </p>
    </div>
{/if}
</div>

<style>

</style>
