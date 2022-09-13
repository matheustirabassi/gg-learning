import { Box, useMediaQuery, useTheme } from '@mui/material'
import Footer from '../Footer/Footer'
import SideFooter from '../Footer/SideFooter'

interface IPageBaseLayoutProps {
    children: React.ReactNode
    showFooter?: boolean
    showSideFooter?: boolean
}

export const PageBaseLayout: React.FC<IPageBaseLayoutProps> = ({ children, showFooter, showSideFooter }) => {
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box display='flex' flexDirection='column' gap={2} flex={1} overflow='auto'>
                {
                    children
                }
                
                {
                    (showSideFooter && !mdDown) && (
                        <Box>
                            <SideFooter />
                        </Box>
                    )
                }

                {
                    showFooter && (
                        <Box display="flex" width="100%" position="fixed" bottom={0}>
                            <Footer />
                        </Box>
                    )
                }
        </Box>
    )
}