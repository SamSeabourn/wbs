// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://weston-botanical-services.com',
	integrations: [svelte()],
	build: {
		inlineStylesheets: 'always',
	},
});
