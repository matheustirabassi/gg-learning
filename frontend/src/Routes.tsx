import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomeView from "./presentation/view/HomePage/HomeView"
import AllArticles from "presentation/view/AllArticlesPage/AllArticlesView"
import { ArticleView } from "presentation/view/ArticlePage/ArticleView"
import { QuizzView } from "presentation/view/QuizzPage/QuizzView"
import CreateAccountView from "presentation/view/CreateAccountPage/CreateAccountView"
import { MyAccountPageView } from "presentation/view/MyAccountPage/MyAccountPageView"

export const ROUTES = {
	HOME: "/",
	ALLARTICLES: "/all_articles",
	ARTICLE:"/article",
	QUIZZ:"/quizz",
	COMPILADOR:"/compiler",
	CREATE_ACCOUNT:"/register",
	MY_ACCOUNT:"/myaccount"
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
				<Route path={ROUTES.CREATE_ACCOUNT} element={<CreateAccountView />}/>
				<Route path={ROUTES.MY_ACCOUNT} element={<MyAccountPageView />}/>
				
				<Route path='*' element={<Navigate to="/"/>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default HomeRoutes