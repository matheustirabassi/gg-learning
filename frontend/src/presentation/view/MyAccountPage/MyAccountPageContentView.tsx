import { Article, Person } from "@mui/icons-material"
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material"
import { DetalhesUsuario } from "presentation/components/DetalhesUsuario/DetalhesUsuario"

import { useState, useCallback } from "react"

export const MyAccountPageContentView = () => {
    const theme = useTheme()
    const [myInfo, setMyInfo] = useState(true)
    const [myArticles, setMyArticles] = useState(false)

    const toggleMenu = useCallback(() => {
        setMyInfo(oldmMyInfo => !oldmMyInfo)
        setMyArticles(oldMyArticles => !oldMyArticles)
    }, [])
    return (
        <Box display = 'flex' flexDirection='row' height='100vh'>
            <Box width={theme.spacing(28)} display='flex' flexDirection='column' bgcolor={theme.palette.primary.main}>
                <Box flex={1}>
                    <List component='nav'>
                        <ListItemButton onClick={toggleMenu}>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary={"Minha informações"} sx={{color: "secondary.contrastText"}} />
                        </ListItemButton>
                        <ListItemButton onClick={toggleMenu}>
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary={"Meus artigos"} sx={{color: "secondary.contrastText"}} />
                        </ListItemButton>
                    </List>
                </Box>
            </Box>
            <Box width='100%' >
                {
                    myInfo && (
                        <DetalhesUsuario/>
                    )
                }

                {
                    myArticles && (
                        <Typography color="secondary.main">Meus artigos</Typography>
                    )
                }
            </Box>
        </Box>
    )
}