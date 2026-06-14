/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				blue: {
					600: '#007aff', // iOS System Blue (Light)
					500: '#007aff',
					400: '#0a84ff', // iOS System Blue (Dark)
					300: '#0a84ff',
					750: '#0056b3',
					950: '#00264d',
				},
				cyan: {
					500: '#32ade6', // iOS System Cyan (Light)
					400: '#64d2ff', // iOS System Cyan (Dark)
					300: '#64d2ff',
					600: '#258bb8',
				},
				slate: {
					950: '#000000', // Pure black
				}
			},
			backdropBlur: {
				sm: '4px',
			},
		},
	},
	plugins: [],
}