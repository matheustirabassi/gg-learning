import { Grid, TextField } from "@mui/material";
import Container from "@mui/material/Container/Container";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Jumbotron } from "../../components/Jumbotron/Jumbotron";
import HomeViewModel from "./HomeContentViewModel";

function useViewModel() {
	return HomeViewModel();
}

export const HomeContentView = () => {
	const { textButton, onChange } = useViewModel();

	return (
		<Container>
			<Jumbotron
				type={"h4"}
				title={"GGLearning é a melhor ferramenta para aprender a programar!"}
				subtitle={"Adquira conhecimento através dos diversos artigos e tutoriais existentes."}
			/>
			<div>
				<Grid container spacing={1} justifyContent="center">
					<Grid item xs={3}>
						<Card
							title={"Aprenda python"}
							linkImage={"#"}
							description={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis ligula pharetra, pharetra ipsum eget, finibus elit. Integer maximus posuere pharetra. Phasellus eleifend, libero a facilisis malesuada, sapien risus vestibulum nunc, ac vestibulum lorem ipsum vel quam. Proin malesuada, sem at lacinia rutrum, mi nisi commodo nisi, sit amet finibus odio sem nec sem."
							}
						/>
					</Grid>
					<Grid item xs={3}>
						<Card
							title={"Conheça a estrutura de dados lista"}
							linkImage={"#"}
							description={
								"Aenean porttitor in diam eu iaculis. Etiam leo lacus, consectetur sed dui ut, porttitor venenatis sem"
							}
						/>
					</Grid>
					<Grid item xs={3}>
						<Card
							title={"Os paradigmas da orientação a objetos"}
							linkImage={"#"}
							description={
								"Duis vel est urna. Fusce mattis metus quis sapien rhoncus tincidunt. Integer vel sagittis diam. Proin vel facilisis libero."
							}
						/>
					</Grid>
					<Grid item xs={3}>
						<Card
							title={"Conheça a estrutura de dados pilha"}
							linkImage={"#"}
							description={
								"Etiam fringilla libero ac lorem gravida sollicitudin. Nulla egestas interdum arcu non dignissim. Phasellus vel dolor et orci congue tincidunt."
							}
						/>
					</Grid>
				</Grid>
			</div>
			<form noValidate autoComplete="off">
				<TextField
					id="standard-basic"
					label="Standard"
					value={textButton}
					onChange={(e) => onChange(e.target.value)}
				/>
			</form>
			<Button label={"sim"} />
		</Container>
	);
};
