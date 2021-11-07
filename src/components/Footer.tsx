import * as React from 'react';

import { Grid, IconButton, Hidden, Typography } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

/* Component */
const Footer: React.VFC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Grid container justifyContent="space-between">
        <Hidden xsDown>
          <Grid item sm={12} style={{ textAlign: 'center' }}>
            <IconButton onClick={handleClick}>
              <ArrowDropUpIcon />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item sm={12}>
          <Typography variant="body2" color="secondary">
            Copyright © elc, All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export { Footer };
