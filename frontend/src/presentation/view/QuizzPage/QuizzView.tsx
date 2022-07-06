import SideFooter from "presentation/components/Footer/SideFooter"
import HeaderView from "presentation/components/Header/Header"
import { QuizzContentView } from "./QuizzContentView"

export const QuizzView = () => {
    return(
        <>
        <HeaderView/>
        <QuizzContentView/>
        <SideFooter/>
        </>
    )
}