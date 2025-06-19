<script lang="ts">
import { onMount, onDestroy } from "svelte";

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

// Function to set the ondark attribute on the first child only
function updateChildrenAttributes() {
	if (!containerRef) return;

	const isDark = background === "dark" || false;

	// Function to set ondark attribute only on the first child
	function processFirstChild(node: Element, forceDark: boolean = false) {
		// Skip non-element nodes
		if (node.nodeType !== Node.ELEMENT_NODE) return;

		// Update the ondark attribute based on the container's background
		if (isDark || forceDark) {
			node.setAttribute("ondark", "");
		} else {
			node.removeAttribute("ondark");
		}
	}

	// Process only the first child of the main container
	const firstChild = containerRef.firstElementChild;
	if (firstChild) {
		processFirstChild(firstChild as Element);
	}

	// If showing both and dark container reference exists, set ondark on first child in dark container
	if (showBoth && darkContainerRef) {
		const darkFirstChild = darkContainerRef.firstElementChild;
		if (darkFirstChild) {
			processFirstChild(darkFirstChild as Element, true);
		}
	}
}

onMount(() => {
	// Initial update
	updateChildrenAttributes();

	// Set up MutationObserver to watch for changes in the DOM
	observer = new MutationObserver((mutations) => {
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

