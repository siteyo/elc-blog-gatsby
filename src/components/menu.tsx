import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStaticQuery, graphql, Link } from 'gatsby';

/* Component */
const Menu: React.VFC = () => {
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
          <Link to={menu?.link ?? '/'}>
            <Typography variant="h5" color="primary" align="center">
              {menu?.name}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Menu;
