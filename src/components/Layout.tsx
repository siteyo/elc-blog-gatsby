import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, makeStyles, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'styles/theme';
import Header from 'components/Header';
import Footer from 'components/Footer';

/* Styles */
const useStyles = makeStyles({
  divider: {
    margin: '1rem 0',
  },
});

/* Interfaces */
interface LayoutProps {
  children?: React.ReactChild | React.ReactChild[];
}

/* Component */
const Layout: React.VFC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
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
        <Container>
          <div>{children}</div>
        </Container>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
