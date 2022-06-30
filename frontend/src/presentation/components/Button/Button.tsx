import MuiButton from "@mui/material/Button"
import MuiTypography from "@mui/material/Typography"

export interface ButtonProps {
	/** a cor do texto do botão */
	textColor?: "primary" | "secondary" | "error"

	textSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

	disabled?: boolean

	/** a cor de fundo do botão */
	backgroundColor?: "primary" | "secondary" | "error"

	/** O texto do botão */
	text?: string

	onClick?: () => void
}

export const Button = ({ text, textSize, textColor, backgroundColor }: ButtonProps) => {
	return (
		<MuiButton color={textColor} background-color={backgroundColor}>
			<MuiTypography variant={textSize}>{text}</MuiTypography>
		</MuiButton>
	)
}
