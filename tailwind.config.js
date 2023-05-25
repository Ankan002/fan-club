/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"secondary-dark": "#141923",
				"dark-yellow": "#FFA02B",
				"primary-yellow": "#F6BA3D",
				"vermilion": "#FF5968",
				"cobalt-blue": "#2E86C1",
				"rose-pink": "#C71BDB",
				"primary-orange": "#FC5830",
			},
		},
	},
	plugins: [],
};
