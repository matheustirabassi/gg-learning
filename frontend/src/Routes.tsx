import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./presentation/view/HomePage/HomePage";
export const ROUTES = {
  HOME: "/",
}


const HomeRoutes = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default HomeRoutes;