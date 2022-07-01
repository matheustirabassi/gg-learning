import { Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import { Card } from "presentation/components/Card/Card"

// function useViewModel() {
// 	return HomeViewModel()
// }

export const HomeContentView = () => {
	// const { textButton, onChange } = useViewModel()

	return (
		<Grid container direction={"column"} alignContent="center" mb="32px" padding="32px">
			<Typography
				id="title"
				variant={"h1"}
				color="secondary"
				my="16px"
				padding="10px"
				border={"8px solid"}
				borderColor="primary.main"
			>
				GGLearning a melhor ferramenta para começar a programar
			</Typography>

			<Typography variant={"h2"} my="32px" color="secondary" sx={{ alignmentBaseline: "title" }}>
				Artigos mais recentes
			</Typography>

			<Grid item>
				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					<Grid item xs={4} sm={4} md={4}>
						<Card
							bgColor="primary"
							linkImage="imgs/python.svg"
							title="Primeiros passos em Python"
							description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
						/>
					</Grid>

					<Grid item xs={4} sm={4} md={4}>
						<Card
							bgColor="primary"
							linkImage="imgs/python.svg"
							title="Primeiros passos em Python"
							description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
						/>
					</Grid>

					<Grid item xs={4} sm={4} md={4}>
						<Card
							bgColor="primary"
							linkImage="imgs/python.svg"
							title="Primeiros passos em Python"
							description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
