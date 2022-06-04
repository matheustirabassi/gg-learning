import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./presentation/view/HomePage/Home";
export const ROUTES = {
	HOME: "/",
};

const HomeRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default HomeRoutes;
