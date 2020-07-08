import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import res from '../resource.json';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    marginBottom: '1em'
  },
  title: {
    flexGrow: 1
  },
  links: {
    textDecoration: 'none',
    margin: '1em',
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.text.linkHover
    }
  },
  active: {
    borderBottom: `1px solid ${theme.palette.text.linkSelected}`,
    color: theme.palette.text.linkSelected
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant='h2' color='textPrimary' className={classes.title}>
            S&R
          </Typography>

          <div className={classes.topnavRight}>
            <NavLink className={classes.links} exact activeClassName={classes.active} to="/">{res.home}</NavLink>
            <NavLink className={classes.links} activeClassName={classes.active} to="/products">{res.products}</NavLink>
            <NavLink className={classes.links} activeClassName={classes.active} to="/memberships">{res.memberships}</NavLink>
            <NavLink className={classes.links} activeClassName={classes.active} to="/contact">{res.contact}</NavLink>
          </div>

          <Link to='/login'>
            <Button variant="outlined" color='textPrimary'>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}