import React, { useState, useEffect } from 'react';
import { Typography, Grid, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  quantity: {
    '& button': {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: '.2em',
      padding: '.3em',
      marginTop: '8px'
    },
    '& input': {
      width: '1em',
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  },
}));

export default function ProductPage() {
  function formValidate(event) {
    console.log('sdfsdf');
  
    if(event.target.value <= 0) {
      console.log(event.target.value);
    }
  }
  
  const classes = useStyles();
  const [product, setProduct] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setProduct({
      productId: '0',
      productName: 'Tea',
      productPrice: '400',
      productImgUrl: 'http://www.snrshopping.com/images/stories/hot_deals/july2019/111554-new.jpg',
      description: 'hello'
    });
  }, []);
  
  return (
      <div className={classes.root}>
        <Grid 
            container
            spacing={2}
            direction='row'
            >
          <Grid item>
            <img src={product.productImgUrl} alt={product.productName}/>
          </Grid>
          
          <Grid item>
            <Typography
              variant='h6'
              color='textSecondary'
              >
              {product.productName}
            </Typography>
            <Typography
              color='textSecondary'
              >
              {product.productPrice}
            </Typography>

            <div className={classes.quantity}>
              <IconButton
                aria-label='subtract'
                onClick={() => { setQuantity(quantity-1) }}>
                  <Remove color='primary'/>
              </IconButton>
              <TextField 
                id='outlined-basic'
                margin='dense'
                variant='outlined'
                value={quantity}
                onChange={formValidate}
                />
              <IconButton
                aria-label='add'
                onClick={() => { setQuantity(quantity+1) }}>
                  <Add color='primary'/>
              </IconButton>
            </div>

          </Grid>
        </Grid>
      </div>
  );
}