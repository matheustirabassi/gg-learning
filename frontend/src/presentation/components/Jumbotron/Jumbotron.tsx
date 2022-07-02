import MuiTypography from "@mui/material/Typography"

export interface JumbotronProps {
	title?: string
	subtitle?: string
	type: any

	color: "primary" | "secondary"
}

export const Jumbotron = ({ title, subtitle, type, color }: JumbotronProps) => {
	return (
		<div>
			<MuiTypography variant={type} gutterBottom color={color}>
				{title}
			</MuiTypography>
			<MuiTypography variant="subtitle1" gutterBottom color={color}>
				{subtitle}
			</MuiTypography>
		</div>
	)
}
