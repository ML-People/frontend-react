import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  temporary: {
    backgroundColor: '#F7D8BA',
    height: '100vh',
  },
}));

const Upload = () => {
  const classes = useStyles();

  return <div className={classes.temporary}>Upload</div>;
};

export default Upload;
