import { Article, Person } from "@mui/icons-material"
import { Box, Button, List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material"
import { UserDetails } from "presentation/view/MyAccountPage/UserDetails/UserDetails"

import { Fragment, useCallback, useState } from "react"
import { ROUTES } from "Routes"

export const MyAccountPageContentView = () => {
    const theme = useTheme()
    const [myInfo, setMyInfo] = useState(true)
    const [myArticles, setMyArticles] = useState(false)

    const toggleMenu = useCallback(() => {
        setMyInfo(oldmMyInfo => !oldmMyInfo)
        setMyArticles(oldMyArticles => !oldMyArticles)
    }, [])
    return (
        <Box display='flex' flexDirection='row' height='100vh'>
            <Box width={theme.spacing(28)} display='flex' flexDirection='column' bgcolor={theme.palette.primary.main}>
                <Box flex={1}>
                    <List component='nav'>
                        <ListItemButton onClick={toggleMenu}>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary={"Minha informações"} sx={{ color: "secondary.contrastText" }} />
                        </ListItemButton>
                        <ListItemButton onClick={toggleMenu}>
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary={"Meus artigos"} sx={{ color: "secondary.contrastText" }} />
                        </ListItemButton>
                    </List>
                </Box>
            </Box>
            <Box width='100%' >
                {
                    myInfo && (
                        <UserDetails />
                    )
                }

                {
                    myArticles && (
                        <Fragment>
                            <Box display="flex" flexDirection="column" alignItems="center" marginTop={2}>
                                <Button
                                    variant="contained"
                                    href={ROUTES.CREATE_ARTICLE}>
                                    <Typography
                                        variant="h3"
                                        color="secondary.contrastText"
                                    >Crie um artigo</Typography>
                                </Button>

                                <Typography color="secondary.main">Meus artigos</Typography>
                            </Box>

                        </Fragment>
                    )
                }
            </Box>
        </Box>
    )
}
