import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	extensions: [".svelte", ".svx"],
	kit: {
		adapter: adapter({
			fallback: "404.html",
			pages: "build",
		}),
		paths: {
			base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
		},
	},
};

export default config;
