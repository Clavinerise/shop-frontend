import React, { useState, useEffect, useRef } from 'react';
import { Typography, Grid, IconButton, TextField, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import res from '../resource.json';

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
      width: '3em',
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  },
  productSection: {
    backgroundColor: '#fff',
    borderRadius: '.3em',
    marginBottom: '1em',
    padding: '1em',
    // border: '2px solid #ddd'
  }
}));

export default function ProductPage() {
  const minProductPurchase = 1;
  const classes = useStyles();
  const firstRender = useRef(true);
  const [product, setProduct] = useState(0);
  const [quantity, setQuantity] = useState(minProductPurchase);

  function formValidate(quantity) {
    console.log('sdfsdf');
  
    if(quantity <= minProductPurchase) {
      setQuantity(minProductPurchase);
      return;
    }
    if(quantity >= product.stock) {
      setQuantity(product.stock);
      return;
    }
  }

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
      setProduct({
        productId: '0',
        productName: 'Tea',
        productPrice: '400',
        productImgUrl: 'http://www.snrshopping.com/images/stories/hot_deals/july2019/111554-new.jpg',
        description: 'hello',
        stock: 999,
      });
      return;
    }

    // formValidate
    formValidate(quantity);
  }, [quantity]);
  
  return (
      <Container maxWidth='md' className={classes.root}>
        <Grid 
          container
          spacing={2}
          direction='column'
          >
          <Grid 
            container
            spacing={2}
            direction='row'
            className={classes.productSection}
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
                  disabled={quantity <= 1 ? true : false}
                  onClick={() => { setQuantity(quantity-1) }}>
                    <Remove color='primary'/>
                </IconButton>
                <TextField 
                  id='outlined-basic'
                  margin='dense'
                  variant='outlined'
                  value={quantity}
                  onChange={event => setQuantity(event.target.value)}
                  />
                <IconButton
                  aria-label='add'
                  onClick={event => { setQuantity(quantity+ +1) }}>
                    <Add color='primary'/>
                </IconButton>
              </div>
            </Grid>
          </Grid>

          <Grid 
            container
            spacing={2}
            direction='column'
            className={classes.productSection}
            >
            <Typography
              color='textSecondary'
              variant='h6'
              >
              {res.productDescription}
            </Typography>

            <Typography
              color='textSecondary'
              >
              {product.description}
            </Typography>
          </Grid>
          
          <Grid 
            container
            spacing={2}
            direction='column'
            >
            <Typography
              color='textSecondary'
              variant='h6'
              >
              {res.recommendations}
            </Typography>
          </Grid>
        </Grid>
      </Container>
  );
}