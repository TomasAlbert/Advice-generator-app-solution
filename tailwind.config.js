/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				HeroPatternDesktop: "url('../images/bg-desktop.svg')",
				HeroPatternMobile: "url('../images/bg-mobile.svg')",
			},
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1300px",
			xl: "1400px",
		},
		colors: {
			Violet: "hsl(257, 40%, 49%)",
			SoftMagenta: "hsl(300, 69%, 71%)",
		},
		fontFamily: {
			Poppins: ["Poppins", "sans-serif"],
			OpenSans: ["Open Sans", "serif"],
		},
	},
	plugins: [],
};
