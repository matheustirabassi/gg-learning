import { Box, Grid, Typography } from "@mui/material"
import { ArticleCard } from "presentation/components/Card/ArticleCard"
import { LayoutBaseDePagina } from "presentation/components/LayoutBaseDePagina/LayoutBaseDePagina"

// function useViewModel() {
// 	return HomeViewModel()
// }

export const HomeContentView = () => {
	// const { textButton, onChange } = useViewModel()

	return (
		<LayoutBaseDePagina mostrarMenu mostrarRodape>
			<Box display="flex" flexDirection="column" marginX={25}>
				<Box>
					<Typography
						id="title"
						variant="h1"
						color="secondary"
						padding={2}
						border="5px solid"
						borderColor="primary.main"
						borderRadius="10px"
					>GGLearning a melhor ferramenta para começar a programar</Typography>
				</Box>

				<Box>
					<Typography variant={"h2"} my="32px" color="secondary" sx={{ alignmentBaseline: "title" }}>
						Artigos mais recentes
					</Typography>
				</Box>

				<Box display='flex' justifyItems="center">
					<Grid container spacing={3} columns={15}>
						<Grid item xs={15} md={5} xl={3} >
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
							/>
						</Grid>
						<Grid item xs={15} md={5} xl={3} >
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
							/>
						</Grid>
						<Grid item xs={15} md={5} xl={3} >
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
							/>
						</Grid>
						<Grid item xs={15} md={5} xl={3} >
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
							/>
						</Grid>
						<Grid item xs={15} md={5} xl={3} >
							<ArticleCard
								bgColor="primary"
								linkImage="imgs/python.svg"
								title="Primeiros passos em Python"
								description="Curabitur a consequat augue. Nunc ac urna semper, varius risus eu, cursus mauris. "
							/>
						</Grid>
						
						
					</Grid>
				</Box>
			</Box>


		</LayoutBaseDePagina>

	)
}