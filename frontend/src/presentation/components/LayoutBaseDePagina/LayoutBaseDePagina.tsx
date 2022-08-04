import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideFooter from '../Footer/SideFooter'

interface ILayoutBaseDePaginaProps {
    children: React.ReactNode
    mostrarMenu?: boolean
    mostrarRodape?: boolean
    mostrarSideRodape?: boolean
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, mostrarMenu, mostrarRodape, mostrarSideRodape }) => {
    const theme = useTheme()
    //const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    //const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box height='100vh' display='flex' flexDirection='column' gap={2} width="100vw" flex={1} overflow='auto'>
                {
                    mostrarMenu && (
                        <Box>
                            <Header />
                        </Box>
                    )
                }

                {
                    children
                }

                {
                    mostrarSideRodape && (
                        <Box>
                            <SideFooter />
                        </Box>
                    )
                }

                {
                    mostrarRodape && (
                        <Box display="flex" width="100%" position="fixed" bottom={0}>
                            <Footer />
                        </Box>
                    )
                }
        </Box>
    )
}