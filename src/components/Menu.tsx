import React from 'react';
import { Grid } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import TextLink from 'components/TextLink';

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
          <TextLink
            align="center"
            variant="h5"
            color="primary"
            underline="hover"
            to={menu?.link ?? '/'}
          >
            {menu?.name ?? ''}
          </TextLink>
        </Grid>
      ))}
    </Grid>
  );
};

export default Menu;
