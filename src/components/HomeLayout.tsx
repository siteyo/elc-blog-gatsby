import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { Box, Container, CssBaseline, Hidden } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/Theme';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

interface HomeLayoutProps {
  children?: React.ReactChild | React.ReactChild[];
}

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box mt={10}>{children}</Box>
        <Header title={data.site?.siteMetadata?.title ?? ''} />
        <Hidden xsDown>
          <Menu
            variant="h5"
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
      </Container>
    </ThemeProvider>
  );
};

export default HomeLayout;
