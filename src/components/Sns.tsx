import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, IconButton, makeStyles } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

interface SNSProps {
  className?: string;
}

const useStyles = makeStyles({
  list: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const SNS: React.VFC<SNSProps> = ({ className }) => {
  const classes = useStyles();
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
      <ul className={classes.list}>
        <li>
          <IconButton
            href={data.site?.siteMetadata?.socialUrl?.twitter ?? ''}
            target="_blank"
          >
            <TwitterIcon color="primary" />
          </IconButton>
        </li>
        <li>
          <IconButton
            href={data.site?.siteMetadata?.socialUrl?.youtube ?? ''}
            target="_blank"
          >
            <YouTubeIcon color="primary" />
          </IconButton>
        </li>
      </ul>
    </Box>
  );
};

export default SNS;