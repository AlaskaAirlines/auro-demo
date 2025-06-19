<script lang="ts">
import "../app.css";
import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";

const { children } = $props();
</script>

<div class="min-h-screen bg-gray-100 flex flex-col">
  <header class="bg-white shadow-sm py-4">
    <div class="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <auro-header level="1" display="300" margin="both" size="none" color="var(--ds-basic-color-brand-primary)">Auro Design System Demo</auro-header>
      <div class="w-48">
        <ThemeSwitcher />
      </div>
    </div>
  </header>
  <main class="flex-grow flex items-center justify-center">
    <div class="max-w-5/6 w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {@render children()}
    </div>
  </main>
</div>
