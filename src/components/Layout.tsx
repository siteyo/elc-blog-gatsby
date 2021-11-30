import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import {
  Box,
  Container,
  CssBaseline,
  Hidden,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { theme } from 'styles/Theme';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Menu } from 'components/Menu';
import { SideMenuBar } from 'components/SideMenuBar';

/* Styles */
const useStyles = makeStyles({
  location: {
    textAlign: 'center',
    margin: '2rem 0 1rem',
  },
});

/* Interfaces */
interface LayoutProps {
  location: string;
  contentMaxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  children?: React.ReactChild | React.ReactChild[];
}

/* Component */
const Layout: React.VFC<LayoutProps> = ({
  location,
  contentMaxWidth,
  children,
}) => {
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
        <SideMenuBar />
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
        <Typography className={classes.location} variant="h3" color="primary">
          {location}
        </Typography>
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
