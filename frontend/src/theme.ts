import { createTheme } from "@mui/material"
import "@fontsource/open-sans"

const ggLearningTheme = createTheme({
	palette: {
		primary: {
			main: "#FFB703",
		},
		secondary: {
			main: "#FFFFFF",
			contrastText:"rgb(0,0,0)"
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
	components: {
		MuiMenu: {
			styleOverrides: {
				list: {
					backgroundColor: "#FFB703",
				},
			},
		},

		MuiMenuItem: {
			styleOverrides: {
				root: {
					backgroundColor: "#023047",
				},
			},
		},
	},
})

export default ggLearningTheme
