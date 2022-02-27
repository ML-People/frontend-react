import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  temporary: {
    backgroundColor: '#FEF8DD',
    height: '100vh',
  },
}));

const About = () => {
  const classes = useStyles();
  return <div className={classes.temporary}>About</div>;
};

export default About;
