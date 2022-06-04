import MuiButton from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import MuiCardActionArea from "@mui/material/CardActionArea";
import MuiCardActions from "@mui/material/CardActions";
import MuiCardContent from "@mui/material/CardContent";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiTypography from "@mui/material/Typography";

export interface CardProps {
	/** O link da imagem */
	linkImage?: string;

	title?: string;

	description?: string;

	/** A ação do card ao ser clicado */
	onClick?: () => void;
}

export const Card = ({ linkImage, title, description }: CardProps) => {
	return (
		<MuiCard>
			<MuiCardActionArea>
				<MuiCardMedia image={linkImage} title={title} />
				<MuiCardContent>
					<MuiTypography gutterBottom variant="h5" component="h2">
						{title}
					</MuiTypography>
					<MuiTypography variant="body2" component="p">
						{description}
					</MuiTypography>
				</MuiCardContent>
			</MuiCardActionArea>
			<MuiCardActions>
				<MuiButton size="small">Leia Mais</MuiButton>
			</MuiCardActions>
		</MuiCard>
	);
};
