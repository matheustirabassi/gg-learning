import { makeStyles, Theme, createStyles } from '@material-ui/core';
import './app.scss';
import HomeRoutes from "./Routes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      
    },
    title: {
      flexGrow: 1,
    },
    toolBar: {
        backgroundColor: '#474973ff',
    },
  }),
);

function App() {
  const classes = useStyles();
  return (
    <>
      <HomeRoutes />
    </>
  );
}

export default App;
