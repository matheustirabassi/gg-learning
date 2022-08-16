import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { Login } from "presentation/components/Login/Login"
import { AuthProvider } from "presentation/contexts/AuthContext"
import ggLearningTheme from "theme"
import HomeRoutes from "./Routes"

function App() {
	return (
		<AuthProvider>

			<ThemeProvider theme={ggLearningTheme}>
				<Login>
					<CssBaseline />
					<HomeRoutes />
				</Login>
			</ThemeProvider>

		</AuthProvider>

	)
}

export default App
