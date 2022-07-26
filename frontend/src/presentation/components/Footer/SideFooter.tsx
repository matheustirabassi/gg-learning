import { Instagram, Twitter } from "@mui/icons-material"
import { Grid, IconButton } from "@mui/material"

function SideFooter() {
    return (
        <Grid container direction="column" alignItems="center" position="fixed" right="0" bottom="0" maxWidth="100px">
            <Grid item >
                <IconButton>
                    <Twitter color="secondary" sx={{ fontSize: "50px" }} />
                </IconButton>
            </Grid>
            <Grid item >
                <IconButton>
                    <Instagram color="secondary" sx={{ fontSize: "50px" }} />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default SideFooter