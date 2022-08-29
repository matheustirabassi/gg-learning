import { createTheme } from "@mui/material"
import "@fontsource/open-sans"

const ggLearningTheme = createTheme({
	palette: {
		primary: {
			main: "#f0c743",
		},
		secondary: {
			main: "#3f53d9",
			contrastText: "#FFFFFF"
		},
		success: {
			main: "#4caf50",
		},
		error: {
			main: "#C73E1D",
		},
		background: {
			default: "#023047",
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
