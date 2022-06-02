import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";


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
        backgroundColor: '#eb5e28',
    },
  }),
);

function HomeHeaderView (){
  const classes = useStyles()
  return (
    <div className= 'Header'>
        <AppBar position="static" className={classes.toolBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            GGLearning
          </Typography>
          <Button color="inherit">
            <AccountCircle />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default HomeHeaderView;