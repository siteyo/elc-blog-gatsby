import React from 'react';
import { Drawer, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import TextLink from 'components/TextLink';

/* Interfaces */
interface MenuBarProps {
  title: string;
  menuLinks: ReadonlyArray<
    GatsbyTypes.Maybe<
      Pick<GatsbyTypes.SiteSiteMetadataMenuLinks, 'link' | 'name'>
    >
  >;
}

/* Component */
const MenuBar: React.VFC<MenuBarProps> = ({ title, menuLinks }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  return (
    <div>
      <IconButton onClick={handleDrawerToggle}>
        <MenuIcon color="primary" />
      </IconButton>
      <Drawer open={mobileOpen} onClose={handleDrawerToggle}>
        <TextLink variant="h1" to="/">
          {title}
        </TextLink>
        <ul>
          {menuLinks.map(menu => (
            <li>
              <TextLink variant="h4" underline="always" to={menu?.link ?? '/'}>
                {menu?.name ?? ''}
              </TextLink>
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};

export default MenuBar;
