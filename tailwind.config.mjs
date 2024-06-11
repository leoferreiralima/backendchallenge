import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	important: true,
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			serif: defaultTheme.fontFamily.serif
		},
		extend: {},
	},
	plugins: [],
}
