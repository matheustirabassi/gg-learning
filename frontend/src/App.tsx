import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { Header } from "presentation/components/Header/Header"
import { Login } from "presentation/components/Login/Login"
import { AuthProvider } from "contexts/AuthContext"
import ggLearningTheme from "theme"
import HomeRoutes from "./Routes"

function App() {
	return (
		<AuthProvider>
			<ThemeProvider theme={ggLearningTheme}>
				<Login>
					<CssBaseline />
					<Header>
						<HomeRoutes />
					</Header>
				</Login>
			</ThemeProvider>
		</AuthProvider>
	)
}

export default App
