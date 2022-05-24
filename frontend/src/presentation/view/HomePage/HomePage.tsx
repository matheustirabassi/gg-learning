import { Button, colors, Container, TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { findByLabelText } from '@testing-library/react';
import GGButton from '../../components/Button/Button';
import CardView from '../../components/Card/CardView';
import HeaderView from '../../components/Header/HeaderView';
import JumbotronView from '../../components/Jumbotron/JumbotronView';
import HomePageViewModel from './HomePageViewModel';

function useViewModel() {
  return HomePageViewModel()
}

const useStyles = makeStyles({
  root:{
    width:"100%",
    marginBottom:"10px",
  }
})

const HomePage = () => {
  const {textButton, onChange} = useViewModel()
  const classes = useStyles();

  return (
    <div>
      <HeaderView />
      
      <Container>
        <JumbotronView  tipo = {"h4"} title={"GGLearning é a melhor ferramenta para aprender a programar!"} subtitle={"Adquira conhecimento através dos diversos artigos e tutoriais existentes."}/>
        <div className={classes.root}>
          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={3}>
              <CardView title={"Aprenda python"} img={"#"} descricao={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis ligula pharetra, pharetra ipsum eget, finibus elit. Integer maximus posuere pharetra. Phasellus eleifend, libero a facilisis malesuada, sapien risus vestibulum nunc, ac vestibulum lorem ipsum vel quam. Proin malesuada, sem at lacinia rutrum, mi nisi commodo nisi, sit amet finibus odio sem nec sem."}/>
            </Grid>
            <Grid item xs={3}>
              <CardView title={"Conheça a estrutura de dados lista"} img={"#"} descricao={"Aenean porttitor in diam eu iaculis. Etiam leo lacus, consectetur sed dui ut, porttitor venenatis sem"}/>
            </Grid>
            <Grid item xs={3}>
              <CardView title={"Os paradigmas da orientação a objetos"} img={"#"} descricao={"Duis vel est urna. Fusce mattis metus quis sapien rhoncus tincidunt. Integer vel sagittis diam. Proin vel facilisis libero."}/>
            </Grid>
            <Grid item xs={3}>
              <CardView title={"Conheça a estrutura de dados pilha"} img={"#"} descricao={"Etiam fringilla libero ac lorem gravida sollicitudin. Nulla egestas interdum arcu non dignissim. Phasellus vel dolor et orci congue tincidunt."}/>
            </Grid>
          </Grid>
        </div> 
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" value={ textButton } onChange = { (e) => onChange(e.target.value) }/>
        </form>
      </Container>
      <GGButton text={"sim"} />
    </div>
  )
}

export default HomePage


