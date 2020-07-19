import React, { useState, useEffect, useRef } from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductItem from './components/product-item';
import API from 'utils/API';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  }
}));

export default function ProductList(props) {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const firstRender = useRef(true);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await API.get('/products');
      console.log(result);
      setProducts(result.data);
    };

    fetchProducts();
  }, []);

  // console.log(typeof products);

  let productItems = products.map((product) =>
    <Grid key={product.productId} item xs={12} sm={6} md={4}>
      <ProductItem product={product}/>
    </Grid>
  );
  return (
      <div className={classes.root}>
        <Container disableGutters maxWidth='md'>
          <Grid 
            container
            spacing={2}
            direction='row'
            >
            {productItems}
          </Grid>
        </Container>
      </div>
  );
}