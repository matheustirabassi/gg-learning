import MuiTypography from "@mui/material/Typography";

export interface JumbotronProps {
	title?: string;
	subtitle?: string;
	type: any;
}

export const Jumbotron = ({ title, subtitle, type }: JumbotronProps) => {
	return (
		<div>
			<MuiTypography variant={type} gutterBottom>
				{title}
			</MuiTypography>
			<MuiTypography variant="subtitle1" gutterBottom>
				{subtitle}
			</MuiTypography>
		</div>
	);
};
