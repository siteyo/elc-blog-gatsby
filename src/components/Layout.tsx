import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Container,
  Divider,
  Grid,
  makeStyles,
  CssBaseline,
  Hidden,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import SNS from 'components/Sns';
import theme from 'styles/theme';
import Menu from 'components/Menu';
import Footer from 'components/Footer';
import TextLink from 'components/TextLink';
import MenuBar from 'components/MenuBar';

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
        <Grid container justifyContent="space-between">
          <Grid item>
            <TextLink variant="h1" color="primary" to="/">
              {data.site?.siteMetadata?.title ?? ''}
            </TextLink>
          </Grid>
          <Grid item>
            <Hidden xsDown>
              <SNS className={classes.sns} />
            </Hidden>
            <Hidden smUp>
              <MenuBar title={data.site?.siteMetadata?.title ?? ''} menuLinks={data.site?.siteMetadata?.menuLinks ?? []} />
            </Hidden>
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Menu />
        </Hidden>
        <Divider className={classes.divider} />
        <Container>
          <div>{children}</div>
        </Container>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
