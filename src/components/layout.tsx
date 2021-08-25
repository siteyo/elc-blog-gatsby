import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import {
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
  CssBaseline,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import SNS from 'components/sns';
import theme from 'styles/theme';
import Menu from 'components/menu';
import Footer from 'components/footer';

/* Styles */
const useStyles = makeStyles({
  sns: {},
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  divider: {
    margin: '1rem 0',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

/* Interfaces */
interface LayoutProps {
  children: React.ReactChild | React.ReactChild[];
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
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container>
          <Grid item sm={9}>
            <Typography variant="h1" color="primary">
              <Link className={classes.link} to="/">
                {data.site?.siteMetadata?.title}
              </Link>
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <SNS className={classes.sns} />
          </Grid>
        </Grid>
        <Menu />
        <Divider className={classes.divider} />
        <Container>{children}</Container>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
