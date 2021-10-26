import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { Grid, GridJustification } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';

import TypoLink from 'components/TypoLink';

/* Interface */
type Underline = 'none' | 'hover' | 'always';
type LinkColor = 'primary' | 'secondary';
type LinkAlign = 'inherit' | 'left' | 'center' | 'right';

interface MenuProps {
  variant: 'inherit' | Variant;
  align: LinkAlign;
  color: LinkColor;
  underline: Underline;
  justifyContent: GridJustification;
}

/* Component */
const Menu: React.VFC<MenuProps> = ({
  variant,
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
          <TypoLink
            align={align}
            variant={variant}
            color={color}
            underline={underline}
            to={menu?.link ?? '/'}
          >
            {menu?.name ?? ''}
          </TypoLink>
        </Grid>
      ))}
    </Grid>
  );
};

export default Menu;
