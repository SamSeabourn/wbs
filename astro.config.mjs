import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import Compress from '@playform/compress';

export default defineConfig({
	output: 'static',
	site: 'https://samseabourn.github.io',
	base: '/wbs/',
	integrations: [
		// @ts-expect-error No types here yet, upstream PR maybe?
		tailwindcss(),
		Compress({
			CSS: true,
			HTML: true,
			JavaScript: true,
			SVG: true,
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
