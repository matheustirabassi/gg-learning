import { HomeContentView } from "./HomeContentView"
import HomeFooterView from "./HomeFooterView"
import HomeHeaderView from "./HomeHeaderView"

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
