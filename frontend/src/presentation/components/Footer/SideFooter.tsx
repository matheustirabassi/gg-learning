import { Instagram, Twitter } from "@mui/icons-material"
import { IconButton, Box } from "@mui/material"

/*
* Rodapé lateral
*/
function SideFooter() {
    return (

        <Box display="flex" flexDirection="column" position="fixed" right="1" bottom="0">
            <IconButton>
                <Twitter color="primary" sx={{ fontSize: "50px" }} />
            </IconButton>
            <IconButton>
                <Instagram color="primary" sx={{ fontSize: "50px" }} />
            </IconButton>
        </Box>
    )
}

export default SideFooter