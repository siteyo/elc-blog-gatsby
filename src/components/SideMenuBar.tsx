import * as React from 'react';

import { Drawer, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { TypoLink } from 'components/TypoLink';
import { Sns } from 'components/Sns';
import { Menu } from 'components/Menu';

/* Interfaces */
interface MenuBarProps {
  title: string;
  menuLinks: ReadonlyArray<
    GatsbyTypes.Maybe<
      Pick<GatsbyTypes.SiteSiteMetadataMenuLinks, 'link' | 'name'>
    >
  >;
}

/* Styles */
const useStyles = makeStyles({
  drawerContainer: {
    listStyle: 'none',
  },
  drawerItem: {
    margin: '1rem',
  },
});

/* Component */
const SideMenuBar: React.VFC<MenuBarProps> = ({ title, menuLinks }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  return (
    <div>
      <IconButton onClick={handleDrawerToggle}>
        <MenuIcon color="primary" />
      </IconButton>
      <Drawer open={mobileOpen} anchor="right" onClose={handleDrawerToggle}>
        <TypoLink variant="h1" to="/">
          {title}
        </TypoLink>
        <Sns />
        <ul className={classes.drawerContainer}>
          {menuLinks.map(menu => (
            <li className={classes.drawerItem} key={menu?.name}>
              <TypoLink variant="h4" underline="always" to={menu?.link ?? '/'}>
                {menu?.name ?? ''}
              </TypoLink>
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};

export { SideMenuBar };
