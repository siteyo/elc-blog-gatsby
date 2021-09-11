import React from 'react';
import { Grid, Hidden, Divider, makeStyles } from '@material-ui/core';
import TextLink from 'components/TextLink';
import Sns from 'components/Sns';
import SideMenuBar from 'components/SideMenuBar';
import Menu from 'components/Menu';

interface HeaderProps {
  title: string;
  menuLinks: readonly GatsbyTypes.Maybe<
    Pick<GatsbyTypes.SiteSiteMetadataMenuLinks, 'link' | 'name'>
  >[];
}

const useStyles = makeStyles({
  divider: {
    margin: '1rem 0',
  },
});

const Header: React.VFC<HeaderProps> = ({ title, menuLinks }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item sm={6}>
          <TextLink variant="h1" color="primary" to="/">
            {title}
          </TextLink>
        </Grid>
        <Grid item sm={2}>
          <Hidden xsDown>
            <Sns />
          </Hidden>
          <Hidden smUp>
            <SideMenuBar title={title} menuLinks={menuLinks} />
          </Hidden>
        </Grid>
      </Grid>
      <Hidden xsDown>
        <Menu />
      </Hidden>
      <Divider className={classes.divider} />
    </>
  );
};

export default Header;
