import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import SNS from './sns';
import theme from '../styles/theme';
import Menu from './menu';
import Footer from './footer';

/* Styles */
const useStyles = makeStyles({
  sns: {},
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

/* Interfaces */
interface LayoutProps {
  children: React.ReactChild;
}

/* Component */
const Layout: React.VFC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  const data = useStaticQuery<GatsbyTypes.SiteTitleQuery>(
    graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item sm={9}>
            <Typography variant="h1" color="primary">
              {data.site?.siteMetadata?.title}
            </Typography>
          </Grid>
          <Grid sm={3}>
            <SNS className={classes.sns} />
          </Grid>
        </Grid>
        <Menu />
        <Divider />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
