import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  test: {
    border: '1px solid black'
  }
}));

export default function ProductPage() {
  const classes = useStyles();
  
  return (
      <div className={classes.root}>
        {/* <img src='props.product.productImgUrl' alt='props.product.productName'/> */}
        <Typography>asfasdf</Typography>
      </div>
  );
}