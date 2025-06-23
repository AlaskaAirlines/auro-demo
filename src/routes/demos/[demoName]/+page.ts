import { getDemoById, getValidDemoIds } from "$lib/demo-registry";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

// Export entries for prerendering all demo paths
export const entries = () => {
	// Get all valid demo IDs from the registry
	const validDemos = getValidDemoIds();

	// Return an array of objects with the demoName parameter for each valid demo
	return validDemos.map((demoName) => ({ demoName }));
};

export const load = (({ params }) => {
	// Get the demo name from the URL parameter
	const demoName = params.demoName;

	// Get valid demo IDs from the registry
	const validDemos = getValidDemoIds();

	// Check if the requested demo exists
	if (!validDemos.includes(demoName)) {
		throw error(404, {
			message: `Demo "${demoName}" not found`,
		});
	}

	// Get the demo details
	const demoDetails = getDemoById(demoName);

	// Return data needed for the page
	return {
		demoName,
		demoDetails,
	};
}) satisfies PageLoad;
