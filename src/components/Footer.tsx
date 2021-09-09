import React from 'react';
import { Grid, Divider, makeStyles } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SNS from 'components/Sns';

const useStyles = makeStyles({
  divider: {
    margin: '1rem 0',
  },
});

/* Component */
const Footer: React.VFC = () => { 
  const classes = useStyles()
  return (
  <>
    <Divider className={classes.divider} />
    <Grid container>
      <Grid item sm={3} />
      <Grid item sm={6} style={{ textAlign: 'center' }}>
        <ArrowDropUpIcon />
      </Grid>
      <Grid item sm={3}>
        <SNS />
      </Grid>
    </Grid>
  </>
) };

export default Footer;
