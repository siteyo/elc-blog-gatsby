import * as React from 'react';

import { Box, Grid, makeStyles } from '@material-ui/core';

import { TypoLink } from 'components/TypoLink';
import { Sns } from 'components/Sns';

interface HeaderProps {
  title: string;
}

const useStyles = makeStyles({
  divider: {
    margin: '1rem 0',
  },
  box: {
    padding: '2rem 0 0',
  },
});

const Header: React.VFC<HeaderProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Grid container justifyContent="space-between">
        <Grid item sm={6}>
          <TypoLink variant="h1" color="primary" to="/">
            {title}
          </TypoLink>
        </Grid>
        <Grid item sm={2} xs={4}>
          <Sns />
        </Grid>
      </Grid>
    </Box>
  );
};

export { Header };
