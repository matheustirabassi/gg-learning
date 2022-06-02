import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';

const useStyles = makeStyles({
    root: {
      
      margin: '20px 0',
      backgroundColor: '#eb5e28',
      padding: '15px 10px',
      color: 'white',
      borderRadius: 5,
    },
  });

type Props = {
  title: string,
  subtitle: string,
  tipo:any,
}

const JumbotronView = ({title, subtitle, tipo}:Props) => {
    const classes = useStyles();
 
  return (
    <div className={classes.root}>
        <Typography variant={tipo} gutterBottom>
           {title}
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
            {subtitle}
        </Typography>
    </div>
  )
}

export default JumbotronView