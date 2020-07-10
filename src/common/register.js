import React, { useState, useEffect, useRef } from 'react';
import { Typography, Button, Grid, IconButton, Divider, Container, Paper, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import res from '../resource.json';
import sha256 from 'crypto-js/sha256';
import API from '../utils/API';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  loginForm: {
    padding: '2em',
    '& button': {
      // border: `1px solid ${theme.palette.primary.main}`,
      // borderRadius: '.2em',
      // padding: '.3em',
      marginTop: '2em'
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
  // const minProductPurchase = 1;
  const classes = useStyles();
  // const firstRender = useRef(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  function formValidate() {  
    if(!firstname) {setSubmitDisabled(true); return;}
    if(!lastname) {setSubmitDisabled(true); return;}
    if(!email) {setSubmitDisabled(true); return;}
    if(!password) {setSubmitDisabled(true); return;}
    setSubmitDisabled(false);
  }

  function hashPw() {
    return sha256(password);
  }

  function handleSubmit(event) {
    console.log(event);
    API.post('/register', {
      fname: firstname,
      lname: lastname,
      email: email,
      pw: hashPw(password).toString()
    }, {headers:{"Content-Type" : "application/json"}})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    });
    event.preventDefault();
  }
  function handleChange(event) {
    // this.setState
  }

  useEffect(() => {
  //   if(firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }
    formValidate();
  }, [email, password, firstname, lastname]);
  
  return (
    <Container maxWidth='sm' className={classes.root}>
      <Paper className={classes.loginForm}>
        <Typography variant='h6' color='textSecondary'>{res.register}</Typography>
        {/* <TextField 
          id='email'
          margin='dense'
          variant='outlined'
          fullWidth
          value={email}
          onChange={event => setEmail(event.target.value)}
          /> */}
        <Divider light />
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal" required>
            <InputLabel htmlFor="firstname">{res.firstname}</InputLabel>
            <Input 
              id="firstname" 
              value={firstname} 
              onChange={event => setFname(event.target.value)}
              aria-describedby="my-helper-text" />
            {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl fullWidth margin="normal" required>
            <InputLabel htmlFor="lastname">{res.lastname}</InputLabel>
            <Input 
              id="lastname" 
              value={lastname} 
              onChange={event => setLname(event.target.value)}
              aria-describedby="my-helper-text" />
            {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl fullWidth margin="normal" required>
            <InputLabel htmlFor="email">{res.email}</InputLabel>
            <Input 
              id="email" 
              value={email}
              onChange={event => setEmail(event.target.value)}
              aria-describedby="my-helper-text" />
            {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
          </FormControl>
          <FormControl fullWidth margin="normal" required>
            <InputLabel htmlFor="password">{res.password}</InputLabel>
            <Input 
              type="password"
              id="password" 
              value={password} 
              onChange={event => setPassword(event.target.value)}
              aria-describedby="my-helper-text" />
            {/* <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText> */}
          </FormControl>

          <Button type="submit" variant="contained" onClick={handleSubmit} className="submitBtn" fullWidth color="primary" disabled={submitDisabled}>{res.submit}</Button>
        </form>
      </Paper>
    </Container>
  );
}