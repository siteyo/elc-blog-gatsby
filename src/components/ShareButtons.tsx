import * as React from 'react';

import { Divider, Grid, Box } from '@material-ui/core';

import {
  TwitterShareButton,
  LineShareButton,
  TwitterIcon,
  LineIcon,
} from 'react-share';

interface ShareButtonsProps {
  url: string;
  style?: React.CSSProperties;
}

const ShareButtons: React.VFC<ShareButtonsProps> = ({ url, style }) => (
  <Box style={style}>
    <Divider />
    <Grid container justifyContent="space-around">
      <Grid item sm={1}>
        <Box style={{ padding: '0.5rem' }}>
          <TwitterShareButton url={url}>
            <TwitterIcon round size={32} />
          </TwitterShareButton>
        </Box>
      </Grid>
      <Grid item sm={1}>
        <Box style={{ padding: '0.5rem' }}>
          <LineShareButton url={url}>
            <LineIcon round size={32} />
          </LineShareButton>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export { ShareButtons };
