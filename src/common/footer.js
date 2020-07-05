import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    minHeight: '50px',
    display: 'flex',
    padding: '2em',
    paddingLeft: '5em',
    color: theme.palette.text.primary
  },
  links: {
    '& li': {
      listStyle: 'none'
    },
    '& ul': {
      padding: 0,
      margin: 0
    }
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      {/* <div className={classes.footerText}>Made by Clavinerise, 2020</div> */}
      {/* <Typography color='textPrimary'>
        Made by Clavinerise, 2020
      </Typography> */}
      <Grid 
        container
        spacing={3}
        >
          <Grid item xs={12} md={4}>
            <Typography 
              color='textPrimary' 
              align='left'
              variant='h6'
              >
                Shop
            </Typography>
            <div className={classes.links}>
              <ul>
                <li>sfads</li>
                <li>sfads</li>
                <li>sfads</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              color='textPrimary' 
              align='left'
              variant='h6'
              >
                About
            </Typography>
            <div className={classes.links}>
              <ul>
                <li>sfads</li>
                <li>sfads</li>
                <li>sfads</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography 
              color='textPrimary' 
              align='left'
              variant='h6'
              >
                Support
            </Typography>
            <div className={classes.links}>
              <ul>
                <li>sfads</li>
                <li>sfads</li>
                <li>sfads</li>
              </ul>
            </div>
          </Grid>
        </Grid>
    </footer>
  );
}