import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button, Hidden, IconButton, Drawer, Divider, List, ListItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import R from 'res/R';
import modules from 'modules';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    marginBottom: '1em'
  },
  logo: {
    textDecoration: 'none'
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
  drawerLink: {
    textDecoration: 'none',
    // margin: '1em',
    color: `${R.colors.primary}aa`,
    '&:hover': {
      color: R.colors.darkgrey
    }
  },
  drawerActive: {
    color: R.colors.primary
  },
  active: {
    borderBottom: `1px solid ${theme.palette.text.linkSelected}`,
    color: theme.palette.text.linkSelected
  },
  topnavRight: {
    // flexGrow: 1,
    // justifyContent: 'flex-end',
    // display: 'flex'
  },
  logoSection: {
    flexGrow: 1
  },
  menuIcon: {
    color: R.colors.white
  }
}));

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawer = (openDrawer) => {
    setOpen(openDrawer);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          
          <div className={classes.logoSection}>
            <Link to='/' className={classes.logo}>
              <Typography variant='h2' color='textPrimary' className={classes.title}>
                {R.strings.appname}
              </Typography>
            </Link>
          </div>

          {/* Menu icon */}
          <Hidden mdUp>
            <IconButton edge="end" className={classes.menuIcon} onClick={() => handleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Drawer
            className={classes.drawer}
            anchor="right"
            open={open}
            variant='temporary'
            onBackdropClick={() => handleDrawer(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={() => handleDrawer(false)}>
                <ChevronRightIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <div className={classes.topnavRight}>
                {modules.map(module => (
                  <div>
                    <ListItem>
                      <NavLink 
                      exact
                      className={classes.drawerLink} 
                      activeClassName={classes.drawerActive} 
                      to={module.routeProps.path}
                      >
                        {module.name}
                      </NavLink>
                    </ListItem>

                    <Divider />
                  </div>
                ))}

                <Link to='/login'>
                  <Button variant="outlined">{R.strings.login}</Button>
                </Link>
                <Link to='/register'>
                  <Button variant="outlined">{R.strings.register}</Button>
                </Link>
              </div>
            </List>
          </Drawer>

          {/* TopNav links */}
          <Hidden smDown>
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

            <Link to='/login'>
              <Button variant="outlined" color='textPrimary'>{R.strings.login}</Button>
            </Link>
            <Link to='/register'>
              <Button variant="outlined" color='textPrimary'>{R.strings.register}</Button>
            </Link>
              {/* <NavLink className={classes.links} exact activeClassName={classes.active} to="/">{R.strings.home}</NavLink>
              <NavLink className={classes.links} activeClassName={classes.active} to="/products">{R.strings.products}</NavLink>
              <NavLink className={classes.links} activeClassName={classes.active} to="/memberships">{R.strings.memberships}</NavLink>
              <NavLink className={classes.links} activeClassName={classes.active} to="/contact">{R.strings.contact}</NavLink> */}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}