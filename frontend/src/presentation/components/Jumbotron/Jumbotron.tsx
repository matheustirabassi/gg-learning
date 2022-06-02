import { css } from "@emotion/react";
import MuiTypography from "@mui/material/Typography";
import React from "react";

export interface JumbotronProps {
	title?: string;
	subtitle?: string;
	type: any;
}

export const Jumbotron = ({ title, subtitle, type }: JumbotronProps) => {
	const basicClass = css(useStyles.basicClass);

	return (
		<div basicClassName={basicClass}>
			<MuiTypography variant={type} gutterBottom>
				{title}
			</MuiTypography>
			<MuiTypography variant="subtitle1" gutterBottom>
				{subtitle}
			</MuiTypography>
		</div>
	);
};

const useStyles = {
	basicClass: {
		margin: "20px 0",
		backgroundColor: "#eb5e28",
		padding: "15px 10px",
		color: "white",
		borderRadius: 5,
	}
};
