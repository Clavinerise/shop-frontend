import React from 'react';
import { Button, Card, CardContent, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductItem from './components/product-item';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  test: {
    border: '1px solid black'
  }
}));

export default function ProductPage(props) {
  const classes = useStyles();
  
  return (
      <div className={classes.root}>
        <img src='props.product.productImgUrl' alt='props.product.productName'/>
      </div>
  );
}