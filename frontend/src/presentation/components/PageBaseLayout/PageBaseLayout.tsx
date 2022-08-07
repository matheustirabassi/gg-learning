import { Box } from '@mui/material'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideFooter from '../Footer/SideFooter'

interface IPageBaseLayoutProps {
    children: React.ReactNode
    showMenu?: boolean
    showFooter?: boolean
    showSideFooter?: boolean
}

export const PageBaseLayout: React.FC<IPageBaseLayoutProps> = ({ children, showMenu, showFooter, showSideFooter }) => {

    return (
        <Box height='100vh' display='flex' flexDirection='column' gap={2} width="100vw" flex={1} overflow='auto'>
                {
                    showMenu && (
                        <Box>
                            <Header />
                        </Box>
                    )
                }

                {
                    children
                }

                {
                    showFooter && (
                        <Box>
                            <SideFooter />
                        </Box>
                    )
                }

                {
                    showSideFooter && (
                        <Box display="flex" width="100%" position="fixed" bottom={0}>
                            <Footer />
                        </Box>
                    )
                }
        </Box>
    )
}