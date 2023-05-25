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
				"light-yellow": "#FDFA84",
				"primary-yellow": "#F6BA3D",
				vermilion: "#FF5968",
				"cobalt-blue": "#2E86C1",
				purple: "#C71BDB",
				"primary-orange": "#FC5830",
				"light-blue": "#AEE9FA",
				"light-pink": "#F4BEC7",
				"light-green": "#78D07B",
				"primary-green": "#08CD92",
				"primary-red": "#D61C4E",
			},
			fontFamily: {
				manrope: "'Manrope', sans-serif",
				"fira-code": "'Fira Code', monospace",
				quicksand: "'Quicksand', sans-serif",
			},
		},
	},
	plugins: [],
};
