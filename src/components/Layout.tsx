import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { Box, Container, CssBaseline, Hidden } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { theme } from 'styles/Theme';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Menu } from 'components/Menu';
import { SideMenuBar } from 'components/SideMenuBar';

/* Interfaces */
interface LayoutProps {
  contentMaxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  children?: React.ReactChild | React.ReactChild[];
  location?: Location;
}

/* Component */
const Layout: React.VFC<LayoutProps> = ({ contentMaxWidth, children }) => {
  const data = useStaticQuery<GatsbyTypes.LayoutQuery>(
    graphql`
      query Layout {
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
        <SideMenuBar
          title={data.site?.siteMetadata?.title ?? ''}
          menuLinks={data.site?.siteMetadata?.menuLinks ?? []}
        />
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
        <Container maxWidth={contentMaxWidth}>
          <Box my={5}>
            <div>{children}</div>
          </Box>
        </Container>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
