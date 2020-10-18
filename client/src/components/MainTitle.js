import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
    padding: 42,
  },
  title: {
    color: 'white',
  },
  subtitle: {
    color: 'white',
  },
}));

const MainTitle = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        align="center"
        className={classes.title}
        gutterBottom
        variant="h2"
      >
        Voting App
      </Typography>
      <Typography
        align="center"
        className={classes.subtitle}
        variant="subtitle1"
      >
        Vote on other users' polls or sign in to create your own.
      </Typography>
    </div>
  );
};

export default MainTitle;
