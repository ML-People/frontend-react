import React from 'react';
import { makeStyles } from '@mui/styles';
import './Home.css';

const useStyles = makeStyles((theme) => ({
  temporary: {
    backgroundColor: '#E1F8DD',
    height: '100vh',
  },
}));

const Home = () => {
  const classes = useStyles();
  return <div className={classes.temporary}>
    <h1>Colorize any black & white image!</h1>
    <div>
      Try it out by clicking this image
      <label>
        <input type="checkbox" />
        <div class="card">
          <div class="front">Front</div>
          <div class="back">Back</div>
        </div>
      </label>
    </div>
  </div>;
};

export default Home;
