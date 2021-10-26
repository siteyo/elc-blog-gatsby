import * as React from 'react';

import { Link } from 'gatsby';

import { Typography, makeStyles } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';

/* Interface */
type Underline = 'none' | 'hover' | 'always';
type LinkColor = 'primary' | 'secondary';
type LinkAlign = 'inherit' | 'left' | 'center' | 'right';

interface TypoLinkProps {
  align?: LinkAlign;
  color?: LinkColor;
  underline?: Underline;
  variant?: 'inherit' | Variant;
  to: string;
  children: React.ReactText;
}

interface StyleProps {
  underline?: Underline;
}

/* Styles */
const useStyle = makeStyles({
  link: (props: StyleProps) => ({
    textDecoration: 'none',
    color: 'inherit',
    borderBottom: props.underline === 'always' ? 'solid 1px' : 'none',
    '&:hover': {
      borderBottom:
        props.underline === 'hover' || props.underline === 'always'
          ? 'solid 1px'
          : 'none',
    },
  }),
});

/* Component */
const TypoLink: React.VFC<TypoLinkProps> = ({
  variant,
  color,
  underline,
  align,
  children,
  to,
}) => {
  const classes = useStyle({ underline });
  return (
    <Typography variant={variant} color={color} align={align}>
      <Link className={classes.link} to={to}>
        {children}
      </Link>
    </Typography>
  );
};

export default TypoLink;
