import React, { useState, useEffect, useRef } from 'react';
import { Typography, Grid, IconButton, TextField, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import R from 'res/R';
import API from 'utils/API';
import { useParams } from 'react-router-dom';

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
  },
  productImage: {
    maxWidth: '500px'
  }
}));

export default function ProductPage() {
  const minProductPurchase = 1;
  const classes = useStyles();
  const firstRender = useRef(true);
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(minProductPurchase);

  function formValidate(quantity) {
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
      const fetchProduct = async () => {
        const result = await API.get('/products', {
          params: {
            product_id: id
          }
        });
        console.log(result);
        setProduct(result.data[0]);
      };
  
      fetchProduct();
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
              <img className={classes.productImage} src={product.img} alt={product.product_name}/>
            </Grid>
            
            <Grid item>
              <Typography
                variant='h6'
                color='textSecondary'
                >
                {product.product_name}
              </Typography>
              <Typography
                color='textSecondary'
                >
                {product.price}
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
              {R.strings.descrip}
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
              {R.strings.recommendations}
            </Typography>
          </Grid>
        </Grid>
      </Container>
  );
}