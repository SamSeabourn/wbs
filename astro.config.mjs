// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://weston-botanical-services.com.au',

	// @ts-expect-error No type here yet, upstream PR maybe?
	integrations: [tailwindcss()],

	build: {
		inlineStylesheets: 'always',
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
