import React from 'react';
import { createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import { useStaticQuery, graphql, Link } from 'gatsby';

/* Styles */
const useStyles = makeStyles(theme =>
  createStyles({
    link: {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        borderBottom: `solid 1px ${theme.palette.primary.main}`,
      },
    },
  }),
);

/* Component */
const Menu: React.VFC = () => {
  const classes = useStyles();
  const data = useStaticQuery<GatsbyTypes.MenuLinksQuery>(
    graphql`
      query MenuLinks {
        site {
          siteMetadata {
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
    <Grid container justifyContent="center">
      {data.site?.siteMetadata?.menuLinks?.map(menu => (
        <Grid item xs={2} key={menu?.name}>
          <Typography variant="h5" color="primary" align="center">
            <Link className={classes.link} to={menu?.link ?? '/'}>
              {menu?.name}
            </Link>
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Menu;
