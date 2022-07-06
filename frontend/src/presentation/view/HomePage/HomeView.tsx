import { HomeContentView } from "./HomeContentView"
import HomeFooterView from "../../components/Footer/Footer"
import HomeHeaderView from "../../components/Header/Header"

/** A tela principal do site */
const HomeView = () => {
	return (
		<>
			<HomeHeaderView />
			<HomeContentView />
			<HomeFooterView />
		</>
	)
}

export default HomeView
