import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

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
    // <header className="topnav">
    //   <h1 className="nav-title">SnR Shopping</h1>
    //   <div className="topnav-right">
        // <ul>
        //     <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        //     <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
        //     <li><NavLink to="/contact" exact activeClassName="active">Contact</NavLink></li>
        // </ul>
    //   </div>
    // </header>
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant='h2' color='textPrimary' className={classes.title}>
            S&R
          </Typography>
          {/* <div className={classes.topnavRight}>
            <ul>
                <li><NavLink variant='h1' to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
                <li><NavLink to="/contact" exact activeClassName="active">Contact</NavLink></li>
            </ul>
          </div> */}
          <div className={classes.topnavRight}>
            <NavLink className={classes.links} exact activeClassName={classes.active} to="/">Home</NavLink>
            <NavLink className={classes.links} activeClassName={classes.active} to="/products">Products</NavLink>
            <NavLink className={classes.links} activeClassName={classes.active} to="/memberships">Memberships</NavLink>
            <NavLink className={classes.links} activeClassName={classes.active} to="/contact">Contact</NavLink>
          </div>
          {/* <Button color='textPrimary'>Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}