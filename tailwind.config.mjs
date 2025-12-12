/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
	theme: {},
	plugins: [daisyui],
	corePlugins: {
		preflight: false,
	},
	daisyui: {
		themes: false, // or false if you use only one
		logs: false,
	},
	blocklist: [],
};
