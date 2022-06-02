import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

type Props = {
	text: string;
};

const useStyles = makeStyles({
	root: {
		background: "#197278",
		borderRadius: 5,
		border: 0,
		height: 50,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '16px',
    color: "#EDDDD4"
	},
	label: {
		textTransform: "capitalize",
	},
});

function GGButton({ text }: Props) {
	const classes = useStyles();

	return <Button className={ classes.root }> { text } </Button>;
}

export default GGButton;
