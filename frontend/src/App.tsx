import { ThemeProvider } from "@emotion/react";
import HomeRoutes from "./Routes";
import theme from "./theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<HomeRoutes />
		</ThemeProvider>
	);
}

export default App;
