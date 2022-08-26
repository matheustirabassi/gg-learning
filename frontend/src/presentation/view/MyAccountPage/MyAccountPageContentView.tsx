import { Article, Person } from "@mui/icons-material"
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from "@mui/material"

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
        <Box display = 'flex' flexDirection='row'>
            <Box width={theme.spacing(28)} display='flex' flexDirection='column' height='100vh' bgcolor={theme.palette.secondary.main}>
                <Box flex={1}>
                    <List component='nav'>
                        <ListItemButton onClick={toggleMenu}>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary={"Minha informações"} />
                        </ListItemButton>
                        <ListItemButton onClick={toggleMenu}>
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary={"Meus artigos"} />
                        </ListItemButton>
                    </List>
                </Box>
            </Box>
            <Box width='100%' >
                {
                    myInfo && (
                        <Typography>Minha info</Typography>
                    )
                }

                {
                    myArticles && (
                        <Typography>Meus artigos</Typography>
                    )
                }
            </Box>
        </Box>
    )
}