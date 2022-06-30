import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import ggLearningTheme from "theme"
import "./app.scss"
import HomeRoutes from "./Routes"

function App() {
	return (
		<ThemeProvider theme={ggLearningTheme}>
			<CssBaseline />
			<HomeRoutes />
		</ThemeProvider>
	)
}

export default App
