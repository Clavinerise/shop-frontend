import React from 'react';
import { Grid, Container } from '@material-ui/core';
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

const products = [
  {
    productId: '0',
    productName: 'Tea',
    productPrice: '400',
    productImgUrl: 'http://www.snrshopping.com/images/stories/hot_deals/july2019/111554-new.jpg',
    description: 'hello'
  },
  {
    productId: '1',
    productName: 'Coffee',
    productPrice: '400',
    productImgUrl: 'http://www.snrshopping.com/images/stories/hot_deals/aug2019/109514-new.jpg',
    description: 'hello'
  },
  {
    productId: '2',
    productName: 'Soda',
    productPrice: '400',
    productImgUrl: 'http://www.snrshopping.com/images/resized/images/stories/hot_deals/july2019/66120-new_210_120.jpg',
    description: 'hello'
  },
  {
    productId: '4',
    productName: 'Water',
    productPrice: '300',
    productImgUrl: 'http://www.snrshopping.com/images/stories/hot_deals/july2019/111554-new.jpg',
    description: 'hello'
  }
]

export default function ProductList(props) {
  const classes = useStyles();
  const productItems = products.map((product) =>
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