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
  return (
    <Card 
      className={classes.root}
      variant='outlined'
      >
      <CardActionArea component={ Link } to={location => `${location.pathname}/${props.product.productId}`}>
        <CardMedia
          className={classes.media}
          image={props.product.productImgUrl}
          title={props.product.productName}
        />
        <CardContent>
          <Typography 
            color='textSecondary' 
            align='left'
            variant='h5'
            >
              {/* hello */}
            {props.product.productName}
          </Typography>
          <Typography 
            color='textSecondary' 
            align='left'
            >
              {/* hello2 */}
            {props.product.productPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}