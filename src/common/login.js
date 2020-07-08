import React, { useState, useEffect, useRef } from 'react';
import { Typography, Grid, IconButton, Divider, Container, Paper, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import res from '../resource.json';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  loginForm: {
    padding: '2em',
    '& button': {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: '.2em',
      padding: '.3em',
      marginTop: '8px'
    },
    '& input': {
      // paddingTop: '1em',
      color: theme.palette.text.secondary
    },
    '& h6': {
      marginBottom: '.5em',
    }
  }
}));

export default function ProductPage() {
  const minProductPurchase = 1;
  const classes = useStyles();
  const firstRender = useRef(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function formValidate(quantity) {  

  }

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
      return;
    }
  }, [email, password]);
  
  return (
    <Container maxWidth='sm' className={classes.root}>
      <Paper className={classes.loginForm}>
        <Typography variant='h6' color='textSecondary'>{res.login}</Typography>
        {/* <TextField 
          id='email'
          margin='dense'
          variant='outlined'
          fullWidth
          value={email}
          onChange={event => setEmail(event.target.value)}
          /> */}
        <Divider light />
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="email">{res.email}</InputLabel>
          <Input id="email" aria-describedby="my-helper-text" />
          {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="password">{res.password}</InputLabel>
          <Input id="password" aria-describedby="my-helper-text" />
          {/* <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText> */}
        </FormControl>
      </Paper>
    </Container>
  );
}