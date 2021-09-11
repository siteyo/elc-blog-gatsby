import React from 'react';
import {
  Grid,
  Divider,
  IconButton,
  Hidden,
  Typography,
  makeStyles,
} from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Sns from 'components/Sns';

/* Styles */
const useStyles = makeStyles({
  divider: {
    margin: '1rem 0',
  },
});

/* Component */
const Footer: React.VFC = () => {
  const classes = useStyles();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Divider className={classes.divider} />
      <Grid container justifyContent="space-between">
        <Grid item sm={2} xs={6} />
        <Hidden xsDown>
          <Grid item sm={8} style={{ textAlign: 'center' }}>
            <IconButton onClick={handleClick}>
              <ArrowDropUpIcon />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item sm={2} xs={6}>
          <Sns />
        </Grid>
        <Grid item sm={12}>
          <Typography variant="body2" color="secondary">
            本サイトに掲載されている全てのコンテンツ(記事、画像、音声データ、映像データなど)の無断転載を禁じます。
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
