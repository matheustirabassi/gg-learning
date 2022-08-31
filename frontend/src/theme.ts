import { createTheme } from "@mui/material"
import "@fontsource/open-sans"
import { yellow } from "@mui/material/colors"

const ggLearningTheme = createTheme({
	palette: {
		primary: {
			main: yellow[700],
		},
		secondary: {
			main: "#FFFFFF",
			contrastText: "#FFFFFF"
		},
		success: {
			main: "#4caf50",
		},
		error: {
			main: "#C73E1D",
		},
		background: {
			default: "#202124",
		},
	},
	typography: {
		fontSize: 14,
		fontFamily: ["Open Sans"].join(","),
		h1: {
			fontWeight: 700,
			fontSize: "40px",
			lineHeight: "54px",
			textAlign: "center",
		},
		h2: {
			fontWeight: 600,
			fontSize: "32px",
			lineHeight: "44px",
		},
		h3: {
			fontWeight: 500,
			fontSize: "26px",
		},
		h4: {
			fontWeight: 400,
			fontSize: "24px",
		},
		h5: {
			fontWeight: 400,
			fontSize: "16px",
		},
		h6: {
			fontWeight: 400,
			fontSize: "13px",
		},

		fontWeightRegular: 400,
	},
})

export default ggLearningTheme
