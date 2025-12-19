import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import Compress from '@playform/compress';
import Inline from '@playform/inline';

export default defineConfig({
	output: 'static',
	site: 'https://samseabourn.github.io',
	base: '/wbs/',
	integrations: [
		// @ts-expect-error No types here yet, upstream PR maybe?
		tailwindcss(),
		Inline(),
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
