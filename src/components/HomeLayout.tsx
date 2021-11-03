import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import {
  Box,
  Container,
  CssBaseline,
  Hidden,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/Theme';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

interface HomeLayoutProps {
  children?: React.ReactChild | React.ReactChild[];
}

const useStyles = makeStyles({
  container: {
    height: '100vh',
    minHeight: '50rem',
  },
  inner: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

const HomeLayout: React.VFC<HomeLayoutProps> = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.HomeLayoutQuery>(
    graphql`
      query HomeLayout {
        site {
          siteMetadata {
            title
            menuLinks {
              link
              name
            }
          }
        }
      }
    `,
  );
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={classes.container} maxWidth="md">
        <Box className={classes.inner}>
          <Grid container justifyContent="flex-end">
            <Grid item>{children}</Grid>
          </Grid>
          <Header title={data.site?.siteMetadata?.title ?? ''} />
          <Hidden xsDown>
            <Menu
              variant="body1"
              color="primary"
              underline="hover"
              justifyContent="space-around"
              align="center"
            />
          </Hidden>
          <Hidden smUp>
            <Menu
              variant="h3"
              color="primary"
              underline="hover"
              justifyContent="space-around"
              align="right"
            />
          </Hidden>
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HomeLayout;
