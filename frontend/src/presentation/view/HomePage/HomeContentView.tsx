import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useAuthContext } from "contexts/AuthContext"
import { ArticleAPI } from "data/api/ArticleAPI"
import { ArticleDTO } from "data/dto/ArticleDTO"
import { useDebounce } from "hooks/UseDebounce"
import { ArticleCard } from "presentation/components/Card/ArticleCard"
import { PageBaseLayout } from "presentation/components/PageBaseLayout/PageBaseLayout"
import { useState, useEffect } from "react"
import Imagem from "../../../assets/imgs/img.jpg"

export const HomeContentView = () => {
	const theme = useTheme()
	const lgDown = useMediaQuery(theme.breakpoints.down("lg"))
	const [articles, setArticle] = useState<ArticleDTO[]>([])
	const { debounce } = useDebounce(5000)
	const { token } = useAuthContext() 

	useEffect(() => {
		debounce(() => {
			ArticleAPI.getAll(token)
				.then((result) => {
					if (result instanceof Error) {
						alert(result.message)
					} else {
						console.log(result)
						setArticle(result)
					}
				})
		})
	})

	return (
		<PageBaseLayout showSideFooter>
			<Box display="flex" flexDirection="column" marginX={25}>
				<Box display="flex" flexDirection="row" alignItems="center" marginTop={2}>
					<Box display="flex" flexDirection="column" alignItems="center" >
						<Typography
							id="title"
							variant="h1"
							color="secondary.contrastText"
							padding={2}
						>GGLearning a melhor ferramenta para começar a programar</Typography>
					</Box>
					<Box
						hidden={lgDown}
						component="img"
						src={Imagem}
						sx={{
							borderRadius: "10px",
							maxHeight: { xl: 600, lg: 400 },
							maxWidth: { xl: 700, lg: 500 },
						}}
					>
					</Box>
				</Box>
				<Box>
					<Typography variant={"h2"} my="32px" color="secondary.contrastText" sx={{ alignmentBaseline: "title" }}>
						Conheça alguns artigos
					</Typography>
				</Box>
				<Box display='flex' justifyItems="center" alignItems="center" >
					<Grid container spacing={2} justifyContent="space-evenly" >
						{
							articles.slice(0, 4).map((article, index) => {
								return (
									<Grid key={index} item xs={12} sm={6} lg={4} xl={3} marginBottom={2}>
										<ArticleCard
											bgColor='primary'
											linkImage={"imgs/article.svg"}
											title={article.title}
											description={article.subtitle}
											id={article.id}
										/>
									</Grid>
								)
							})
						}
					</Grid>
				</Box>
			</Box>
		</PageBaseLayout>
	)
}