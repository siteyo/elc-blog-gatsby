import * as React from 'react';

import { Box, Drawer, IconButton, Hidden, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Menu } from 'components/Menu';

/* Styles */
const useStyles = makeStyles({
  container: {
    margin: '20vh 10vw',
  },
  button: {
    position: 'fixed',
    top: 0,
    right: 0,
  },
  paper: {
    width: '72vw',
  },
});

/* Component */
const SideMenuBar: React.VFC = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  return (
    <Box style={{ maxWidth: '50%' }}>
      <Hidden smUp>
        <IconButton className={classes.button} onClick={handleDrawerToggle}>
          <MenuIcon color="primary" />
        </IconButton>
      </Hidden>
      <Drawer
        classes={{ paper: classes.paper }}
        open={mobileOpen}
        anchor="right"
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        <Box className={classes.container}>
          <Menu
            variant="h3"
            color="primary"
            underline="always"
            justifyContent="flex-start"
            align="right"
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export { SideMenuBar };
