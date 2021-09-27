import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/Theme';
import Header from 'components/Header';
import Footer from 'components/Footer';

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
        <Header
          title={data.site?.siteMetadata?.title ?? ''}
          menuLinks={data.site?.siteMetadata?.menuLinks ?? []}
        />
        <Container maxWidth={contentMaxWidth}>
          <div>{children}</div>
        </Container>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
