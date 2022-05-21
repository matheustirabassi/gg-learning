import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';

const useStyles = makeStyles({
    root: {
      width: '100%',
      margin: '50px 0',
      
    },
  });

const JumbotronView = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
            GGLearning o melhor portal para..
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
            Mais texto
        </Typography>
    </div>
  )
}

export default JumbotronView