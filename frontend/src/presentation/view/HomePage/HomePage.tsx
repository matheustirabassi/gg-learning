import { Container, TextField } from '@material-ui/core';
import HeaderView from '../../components/Header/HeaderView';
import JumbotronView from '../../components/Jumbotron/JumbotronView';
import HomePageViewModel from './HomePageViewModel';

function useViewModel() {
  return HomePageViewModel()
}

const HomePage = () => {
  const {textButton, onChange} = useViewModel()

  return (
    <div>
      <HeaderView />
      
      <Container>
      <JumbotronView/>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" value={ textButton } onChange = { (e) => onChange(e.target.value) }/>
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </Container>
    </div>
  )
}

export default HomePage


