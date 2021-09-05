import React from 'react';
import { Grid } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SNS from 'components/Sns';

/* Component */
const Footer: React.VFC = () => (
    <Grid container>
      <Grid item sm={3} />
      <Grid item sm={6} style={{ textAlign: 'center' }}>
        <ArrowDropUpIcon />
      </Grid>
      <Grid item sm={3}>
        <SNS />
      </Grid>
    </Grid>
  );

export default Footer;
