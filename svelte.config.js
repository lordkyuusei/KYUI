import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";

/** @type { import("@sveltejs/kit").Config } */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			trailingSlash: 'always',
		}),
		trailingSlash: 'always',
		prerender: { default: true, entries: [] },
		paths: {
			base: process.env.NODE_ENV === 'development' ? '' : '/KYUI'
		}
	},
	preprocess: sveltePreprocess(),
};

export default config;