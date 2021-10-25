import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { Grid, GridJustification } from '@material-ui/core';

import TextLink from 'components/TextLink';

/* Interface */
type Underline = 'none' | 'hover' | 'always';
type LinkColor = 'primary' | 'secondary';
type LinkAlign = 'inherit' | 'left' | 'center' | 'right';

interface MenuProps {
  align: LinkAlign;
  color: LinkColor;
  underline: Underline;
  justifyContent: GridJustification;
}

/* Component */
const Menu: React.VFC<MenuProps> = ({
  align,
  color,
  underline,
  justifyContent,
}) => {
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
    <Grid container justifyContent={justifyContent}>
      {data.site?.siteMetadata?.menuLinks?.map(menu => (
        <Grid item xs={12} sm={2} key={menu?.name}>
          <TextLink
            align={align}
            variant="h5"
            color={color}
            underline={underline}
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
