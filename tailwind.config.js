/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			boxShadow: {
				neon: "0px 0px 40px 0px hsl(150, 100%, 66%)",
			},
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1300px",
			xl: "1400px",
		},
		colors: {
			// PRIMARY
			LightCyan: "hsl(193, 38%, 86%)",
			NeonGreen: "hsl(150, 100%, 66%)",
			// NEUTRAL
			GrayishBlue: "hsl(217, 19%, 38%)",
			DrakGrayishBlue: "hsl(217, 19%, 24%)",
			DarkBlue: "hsl(218, 23%, 16%)",
		},
		fontFamily: {
			Manrope: ["Manrope", "sans-serif"],
		},
	},
	plugins: [],
};
