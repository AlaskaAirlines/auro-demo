// Types and utilities for demos

export interface Demo {
	name: string; // The route name (derived from filename)
	title: string; // Display title (formatted from name)
	sentenceCase: string; // Display title (formatted from name)
	description?: string; // Optional description
	importPath: string; // Path for dynamic import
}

// Import all .svelte files from the demos directory
// This will be handled via import.meta.glob at runtime
const demoImports = import.meta.glob("/src/demos/*.svelte");

// Automatically generate the demo registry from available files
export const demoRegistry: Demo[] = Object.keys(demoImports).map((path) => {
	// Extract filename without extension
	const fileName = path.split("/").pop()?.replace(".svelte", "") || "";

	// Format title from filename (convert kebab-case to Title Case)
	const title = fileName
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	const sentenceCase = fileName
		.split("-")
		.map((word) => word.charAt(0).toLowerCase() + word.slice(1))
		.join(" ");

	return {
		name: fileName,
		title: title,
		sentenceCase: sentenceCase,
		importPath: path,
	};
});

// Get all demo IDs for validation
export function getValidDemoIds(): string[] {
	return demoRegistry.map((demo) => demo.name);
}

// Get a demo by its ID
export function getDemoById(id: string): Demo | undefined {
	return demoRegistry.find((demo) => demo.name === id);
}

// Get all demos
export function getAllDemos(): Demo[] {
	return demoRegistry;
}
