<script lang="ts">
import { onDestroy, onMount } from "svelte";

// Props for the component
const {
	background = "light",
	showBoth = false,
	class: className = "",
	...restProps
} = $props();

// Get references to the container elements
let containerRef = $state<HTMLElement | null>(null);
let darkContainerRef = $state<HTMLElement | null>(null);

// MutationObserver to watch for changes in the DOM
let observer: MutationObserver;

// Function to manage the ondark attribute on all top-level auro-* web components
function updateChildrenAttributes() {
	if (!containerRef) return;

	const isLight = background === "light" || false;

	// Function to process all top-level auro-* web components in a container
	function processAuroElements(container: Element, isDark: boolean) {
		// Get all direct children of the container
		Array.from(container.children).forEach((child) => {
			// Skip non-element nodes
			if (child.nodeType !== Node.ELEMENT_NODE) return;

			// Check if the element is an auro-* web component
			const nodeName = child.nodeName.toLowerCase();
			if (nodeName.startsWith("auro-")) {
				if (isDark) {
					// Add ondark attribute for dark backgrounds
					child.setAttribute("ondark", "");
				} else {
					// Remove ondark attribute for light backgrounds
					child.removeAttribute("ondark");
				}
			}
		});
	}

	if (showBoth) {
		// For the showBoth case, we need to explicitly process each container differently
		if (containerRef) {
			// Light container should not have ondark
			processAuroElements(containerRef, false);
		}

		if (darkContainerRef) {
			// Dark container should have ondark
			processAuroElements(darkContainerRef, true);
		}
	} else {
		// For single container, process based on the background prop
		processAuroElements(containerRef, background === "dark");
	}
}

onMount(() => {
	// Initial update
	updateChildrenAttributes();

	// Set up MutationObserver to watch for changes in the DOM
	observer = new MutationObserver(() => {
		updateChildrenAttributes();
	});

	// Start observing the container for child list changes (no need to monitor subtree)
	if (containerRef) {
		observer.observe(containerRef, {
			childList: true,
			subtree: false,
			attributes: false,
			characterData: false,
		});
	}

	// If showing both, also observe the dark container
	// Note: Since we're only removing ondark from light backgrounds,
	// we don't need special handling for the dark container
	if (showBoth && darkContainerRef) {
		observer.observe(darkContainerRef, {
			childList: true,
			subtree: false,
			attributes: false,
			characterData: false,
		});
	}
});

onDestroy(() => {
	// Clean up the observer when the component is destroyed
	if (observer) {
		observer.disconnect();
	}
});

// Watch for changes to the background or showBoth props
$effect(() => {
	if (background !== undefined || showBoth !== undefined) {
		updateChildrenAttributes();
	}
});
</script>

{#if showBoth}
  <!-- Container with both light and dark mode -->
  <div class="flex flex-col gap-6">
    <div class="grid grid-rows-2 gap-4">
      <!-- Light mode container -->
      <div 
        bind:this={containerRef}
        class="border border-gray-300 p-4 rounded-2xl bg-white overflow-y-auto max-w-full {className}"
        {...restProps}
      >
        {@render restProps.children?.()}
      </div>
      
      <!-- Dark mode container -->
      <div 
        bind:this={darkContainerRef}
        class="border border-gray-300 p-4 rounded-2xl bg-gray-900 overflow-y-auto max-w-full {className}"
        {...restProps}
      >
        {@render restProps.children?.()}
      </div>
    </div>
  </div>
{:else}
  <!-- Single container with light or dark mode -->
  <div 
    bind:this={containerRef}
    class="border border-gray-300 p-4 rounded-2xl overflow-y-auto max-w-full {background === 'dark' ? 'bg-gray-900' : 'bg-white'} {className}"
    {...restProps}
  >
    {@render restProps.children?.()}
  </div>
{/if}

<style>
</style>

