import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomeView from "./presentation/view/HomePage/HomeView"
import AllArticles from "presentation/view/AllArticlesPage/AllArticlesView"
import { ArticleView } from "presentation/view/ArticlePage/ArticleView"
import { QuizzView } from "presentation/view/QuizzPage/QuizzView"

export const ROUTES = {
	HOME: "/",
	ALLARTICLES: "/all_articles",
	ARTICLE:"/article",
	QUIZZ:"/quizz",
	COMPILADOR:"/compilador"
}

const HomeRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomeView />} />
				<Route path={ROUTES.ALLARTICLES} element={<AllArticles/>}/>
				<Route path={ROUTES.ARTICLE} element={<ArticleView/>}/>
				<Route path={ROUTES.QUIZZ} element={<QuizzView/>}/>
				<Route path={ROUTES.COMPILADOR} element={<HomeView/>}/>
				
				<Route path='*' element={<Navigate to="/"/>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default HomeRoutes
