import { Box } from '@mui/material'
import Footer from '../Footer/Footer'
import SideFooter from '../Footer/SideFooter'

interface IPageBaseLayoutProps {
    children: React.ReactNode
    showFooter?: boolean
    showSideFooter?: boolean
}

export const PageBaseLayout: React.FC<IPageBaseLayoutProps> = ({ children, showFooter, showSideFooter }) => {

    return (
        <Box display='flex' flexDirection='column' gap={2} flex={1} overflow='auto'>
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