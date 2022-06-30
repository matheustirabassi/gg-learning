import { createTheme } from "@mui/material"
import "@fontsource/open-sans/300.css"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/500.css"
import "@fontsource/open-sans/700.css"

const ggLearningTheme = createTheme({
	palette: {
		primary: {
			main: "#FFB703",
		},
		secondary: {
			main: "#FFFFFF",
		},
		success: {
			main: "#4caf50",
		},
		error: {
			main: "#C73E1D",
		},
		background: {
      default: "#023047"
    }
	},
	typography: {
		fontSize: 14,
		fontFamily: ["Open Sans"].join(","),
		h4: {
			fontWeight: 700,
			fontSize: "32px",
			lineHeight: "44px",
		},
		h5: {
			fontWeight: 700,
			fontSize: "1.75rem",
		},
		h6: {
			fontWeight: 500,
		},
	},
})

export default ggLearningTheme
