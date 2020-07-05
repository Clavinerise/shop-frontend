import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '10px'
  },
  test: {
    border: '1px solid black'
  }
}));

export default function ContactPage(props) {
  const classes = useStyles();
  
  return (
      <Container maxWidth='md' className={classes.root}>
        <Typography 
          color='textSecondary' 
          align='left'
          variant='h6'
          >
            Contact
        </Typography>
        <Typography 
          color='textSecondary' 
          align='left'
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Container>
  );
}