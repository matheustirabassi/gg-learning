import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"


export interface CardProps {
	/** a cor de fundo do cartão */
	bgColor?: "secondary" | "primary"

	/** O link da imagem */
	linkImage?: string

	title?: string

	description?: string

	/** A ação do card ao ser clicado */
	onClick?: () => void
}

export const ArticleCard = ({ linkImage, title, description, bgColor }: CardProps) => {
	return (
		<Box>
			<Card sx={{ bgcolor: `${bgColor}.main` }}>
				<Box display="flex" justifyContent="center" margin={1}>
					<CardMedia
						image={linkImage}
						title={title}
						component="img"
						sx={{ width: "150px" }}
					/>
				</Box>

				<CardContent>
					<Typography
						gutterBottom
						variant="h4"
						color="secondary.contrastText"
						fontWeight="700"
						height="70px"
					>
						{title}
					</Typography>

					<Typography
						variant="h5"
						color="secondary.contrastText"
						whiteSpace='nowrap'
						overflow='hidden'
						textOverflow='ellipsis'
						>
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">
						<Typography color="secondary.contrastText" variant="h4" fontWeight="700"
							sx={{
								'&:hover': {
									color: 'background.default',
									fontWeight: "700",
									transition: 'all 0.5s ease-in-out',
								}
							}}

						>
							Leia mais
						</Typography>

					</Button>
				</CardActions>
			</Card>
		</Box>

	)
}
