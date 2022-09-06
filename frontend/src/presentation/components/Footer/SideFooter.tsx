import { Instagram, Twitter } from "@mui/icons-material"
import { IconButton, Box, } from "@mui/material"

/*
* Rodapé lateral
*/
function SideFooter() {
    return (
        <Box display="flex" flexDirection="column" position="fixed" right="1" bottom="0">
            <IconButton>
                <Twitter
                    
                    sx={{
                        color: "secondary.dark",
                        fontSize: "40px",
                        '&:hover': {
                            color: 'primary.main',
                            fontWeight: "700",
                            transition: 'all 0.7s ease-in-out',
                        }
                    }}

                />
            </IconButton>
            <IconButton>
                <Instagram
                    
                    sx={{
                        color: "secondary.dark",
                        fontSize: "40px",
                        '&:hover': {
                            color: 'primary.main',
                            fontWeight: "700",
                            transition: 'all 0.7s ease-in-out',
                        }
                    }}
                />
            </IconButton>
        </Box>
    )
}

export default SideFooter