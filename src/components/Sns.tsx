import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, IconButton, Grid } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

interface SnsProps {
  className?: string;
}

const Sns: React.VFC<SnsProps> = ({ className }) => {
  const data = useStaticQuery<GatsbyTypes.SocialQuery>(
    graphql`
      query Social {
        site {
          siteMetadata {
            title
            socialUrl {
              twitter
              youtube
            }
          }
        }
      }
    `,
  );

  return (
    <Box className={className ?? ''}>
      <Grid container justifyContent="space-around">
        <Grid item>
          <IconButton
            href={data.site?.siteMetadata?.socialUrl?.twitter ?? ''}
            target="_blank"
            rel="noopener"
          >
            <TwitterIcon color="primary" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href={data.site?.siteMetadata?.socialUrl?.youtube ?? ''}
            target="_blank"
            rel="noopener"
          >
            <YouTubeIcon color="primary" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sns;
