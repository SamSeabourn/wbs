/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	corePlugins: {
		preflight: false,
	},
	daisyui: {
		themes: ['light', 'dark', 'cupcake'], // or false if you use only one
		logs: false,
	},
	blocklist: [],
};
