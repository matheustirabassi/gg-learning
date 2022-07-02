import { Instagram, Twitter } from "@mui/icons-material"
import { Box, Grid, Stack, Typography } from "@mui/material"

/** A tela do rodapé do GGLearning */
function HomeFooterView() {
	return (
		<Box padding={"16px"} sx={{ backgroundColor: "primary.main" }}>
			<Grid container direction="row" justifyContent="space-evenly" alignItems="center">
				<Stack direction="row" alignItems="center">
					<Twitter color="secondary" sx={{ fontSize: "50px" }} />

					<Typography
						variant={"h3"}
						fontWeight="700"
						color="secondary"
						sx={{ alignmentBaseline: "title" }}
						ml="4px"
					>
						@GGLearning
					</Typography>
				</Stack>

				<Stack direction="row" alignItems="center">
					<Instagram color="secondary" sx={{ fontSize: "50px" }} />

					<Typography
						variant={"h3"}
						fontWeight="700"
						color="secondary"
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
