import React from 'react';
import { Card, CardContent, CardActionArea, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 200,
  },
  media: {
    height: 140
  }
}));

export default function ProductItem(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Card 
      className={classes.root}
      variant='outlined'
      >
      <CardActionArea component={ Link } to={location => `${location.pathname}/${props.product.product_id}`}>
        <CardMedia
          className={classes.media}
          image={props.product.img}
        />
        <CardContent>
          <Typography 
            color='textSecondary' 
            align='left'
            variant='h5'
            >
            {props.product.product_name}
          </Typography>
          <Typography 
            color='textSecondary' 
            align='left'
            >
            {props.product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}