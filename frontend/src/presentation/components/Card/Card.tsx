import MuiButton from "@mui/material/Button"
import MuiCard from "@mui/material/Card"
import MuiCardActions from "@mui/material/CardActions"
import MuiCardContent from "@mui/material/CardContent"
import MuiCardMedia from "@mui/material/CardMedia"
import MuiTypography from "@mui/material/Typography"

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

export const Card = ({ linkImage, title, description, bgColor }: CardProps) => {
	return (
		<MuiCard sx={{ bgcolor: `${bgColor}.main`, maxWidth: "350px" }}>

			<MuiCardMedia image={linkImage} title={title} component="img" sx={{ p: "15px" }}
			/>
			<MuiCardContent>
				<MuiTypography
					gutterBottom
					variant="h4"
					color="secondary"
					fontWeight={"700"}
				>
					{title}
				</MuiTypography>
				<MuiTypography variant="h5" color="secondary" >
					{description}
				</MuiTypography>
			</MuiCardContent>

			<MuiCardActions>
				<MuiButton size="small">
					<MuiTypography color="secondary" variant="h4" fontWeight="700"
						sx={{
							'&:hover': {
								color: 'background.default',
								fontWeight:"700",
								transition: 'all 0.5s ease-in-out'
							}
						}}

					>
						LEIA MAIS
					</MuiTypography>
				</MuiButton>
			</MuiCardActions>
		</MuiCard>
	)
}
