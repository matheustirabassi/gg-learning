import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeView from "./presentation/view/HomePage/HomeView"
export const ROUTES = {
	HOME: "/",
}

const HomeRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomeView />} />
			</Routes>
		</BrowserRouter>
	)
}

export default HomeRoutes
