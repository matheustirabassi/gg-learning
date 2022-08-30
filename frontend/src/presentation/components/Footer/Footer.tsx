import { Instagram, Twitter } from "@mui/icons-material"
import { Box, Grid, Stack, Typography } from "@mui/material"

/** O rodapé de inferior*/
function HomeFooterView() {
	return (
		<Box padding={"10px"} sx={{ backgroundColor: "primary.main" }} width="100%">
			<Grid container direction="row" justifyContent="space-evenly" alignItems="center">
				<Stack direction="row" alignItems="center">
					<Twitter color="secondary" sx={{ fontSize: "35px" }} />

					<Typography
						variant={"h5"}
						color="secondary.contrastText"
						sx={{ alignmentBaseline: "title" }}
						ml="4px"
					>
						@GGLearning
					</Typography>
				</Stack>

				<Stack direction="row" alignItems="center">
					<Instagram color="secondary" sx={{ fontSize: "35px" }} />

					<Typography
						variant={"h5"}
						color="secondary.contrastText"
						sx={{ alignmentBaseline: "title" }}
					>
						@GGLearning
					</Typography>
				</Stack>
			</Grid>
		</Box>
	)
}

export default HomeFooterView
