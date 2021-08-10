import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '@material-ui/core/Container';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import SNS from './sns';
import theme from '../styles/theme';
import Menu from './menu';

/* Styles */
const useStyles = makeStyles({
  sns: {
    width: 200,
  },
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
        <Box className={classes.header}>
          <Typography variant="h1" color="primary">
            {data.site?.siteMetadata?.title}
          </Typography>
          <SNS className={classes.sns} />
        </Box>
        <Menu />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
