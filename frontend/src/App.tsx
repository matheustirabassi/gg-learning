import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { AuthProvider } from "presentation/contexts/AuthContext"
import ggLearningTheme from "theme"
import HomeRoutes from "./Routes"


function App() {
	return (
		<AuthProvider>
			<ThemeProvider theme={ggLearningTheme}>
				<CssBaseline />
				<HomeRoutes />
			</ThemeProvider>
		</AuthProvider>

	)
}

export default App
