import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  temporary: {
    backgroundColor: '#E1F8DD',
    height: '100vh',
  },
}));

const Home = () => {
  const classes = useStyles();
  return <div className={classes.temporary}>Home</div>;
};

export default Home;
