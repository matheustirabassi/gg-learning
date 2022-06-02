import { BrowserRouter, Route, Routes } from "react-router-dom";;

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