import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import R from 'res/R';
import modules from 'modules';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    marginBottom: '1em'
  },
  logo: {
    textDecoration: 'none',
    flexGrow: 1,
  },
  title: {
    color: theme.palette.text.primary,
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
          
          <Link to='/' className={classes.logo}>
            <Typography variant='h2' color='textPrimary' className={classes.title}>
              {R.strings.appname}
            </Typography>
          </Link>

          <div className={classes.topnavRight}>
            {modules.map(module => (
              <NavLink 
                exact
                className={classes.links} 
                activeClassName={classes.active} 
                to={module.routeProps.path}
                >
                {module.name}
              </NavLink>
            ))}
            {/* <NavLink className={classes.links} exact activeClassName={classes.active} to="/">{R.strings.home}</NavLink>
            <NavLink className={classes.links} activeClassName={classes.active} to="/products">{R.strings.products}</NavLink>
            <NavLink className={classes.links} activeClassName={classes.active} to="/memberships">{R.strings.memberships}</NavLink>
            <NavLink className={classes.links} activeClassName={classes.active} to="/contact">{R.strings.contact}</NavLink> */}
          </div>

          <Link to='/login'>
            <Button variant="outlined" color='textPrimary'>{R.strings.login}</Button>
          </Link>
          <Link to='/register'>
            <Button variant="outlined" color='textPrimary'>{R.strings.register}</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}