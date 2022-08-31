import { Box, Button, Grid, Typography } from "@mui/material"
import { ArticleCard } from "presentation/components/Card/ArticleCard"
import { PageBaseLayout } from "presentation/components/PageBaseLayout/PageBaseLayout"
import Imagem from "../../../assets/imgs/img.jpg"

export const HomeContentView = () => {
	return (
		<PageBaseLayout showFooter>
			<Box display="flex" flexDirection="column" marginX={25}>
				<Box display="flex" flexDirection="row" alignItems="center" marginTop={2}>
					<Box display="flex" flexDirection="column" alignItems="center" >
						<Typography
							id="title"
							variant="h1"
							color="secondary.contrastText"
							padding={2}
						>GGLearning a melhor ferramenta para começar a programar</Typography>

						<Box>
							<Button variant="contained" href="/register">
								<Typography
									variant="h3"
									color="secondary.contrastText"
								>Crie uma conta</Typography>
							</Button>
						</Box>

					</Box>
					<Box>
						<img alt= "" style={{ width: "700px", height: "600px", borderRadius: "10px" }} src={Imagem} />
					</Box>
				</Box>

				<Box>
					<Typography variant={"h2"} my="32px" color="secondary.contrastText" sx={{ alignmentBaseline: "title" }}>
						Conheça alguns artigos
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
		</PageBaseLayout>

	)
}