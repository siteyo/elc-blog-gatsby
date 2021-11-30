import * as React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';

import { Box, Typography, Divider, Link } from '@material-ui/core';

import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Options } from '@contentful/rich-text-react-renderer';

import ReactPlayer from 'react-player';

import { LinkCard } from 'components/LinkCard';

type Align = 'inherit' | 'left' | 'center' | 'right';

const useOptions = (
  textAlign: Align = 'left',
  imgAlign: Align = 'center',
): Options => ({
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <Typography align={textAlign} variant="body1" color="primary">
        {children}
      </Typography>
    ),

    [BLOCKS.HEADING_1]: (_, children) => (
      <Typography align={textAlign} variant="h4" color="primary">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <Typography align={textAlign} variant="h5" color="primary">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <Typography align={textAlign} variant="h6" color="primary">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <Typography align={textAlign} variant="body1" color="primary">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_5]: (_, children) => (
      <Typography align={textAlign} variant="body2" color="primary">
        {children}
      </Typography>
    ),
    [BLOCKS.HEADING_6]: (_, children) => (
      <Typography align={textAlign} variant="body2" color="primary">
        {children}
      </Typography>
    ),

    [BLOCKS.HR]: () => <Divider />,

    [BLOCKS.LIST_ITEM]: (_, children) => (
      <Typography align={textAlign} variant="body1">
        <li>{children}</li>
      </Typography>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const { data } = node;
      if (data.target?.internal?.type === 'ContentfulYouTube') {
        return (
          <Box style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              style={{ position: 'absolute', top: 0, left: 0 }}
              url={data.target.url}
              controls
              width="100%"
              height="100%"
            />
          </Box>
        );
      }
      if (data.target?.internal?.type === 'ContentfulWorks') {
        return (
          <Box style={{ margin: '10px' }}>
            <LinkCard
              title={data.target?.title}
              description={data.target?.description}
              to={`/works/${data.target?.slug}`}
              image=""
            />
          </Box>
        );
      }
      if (data.target?.internal?.type === 'ContentfulDiscs') {
        return (
          <Box style={{ margin: '10px' }}>
            <LinkCard
              title={data.target?.title}
              description={data.target?.description}
              to={`/music/${data.target?.slug}`}
              image={`https:${data.target?.image?.fixed?.srcWebp}`}
            />
          </Box>
        );
      }
      return <h3>Entry</h3>;
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { data } = node;
      return (
        <Box style={{ textAlign: imgAlign }}>
          <GatsbyImage image={data.target?.gatsbyImageData} />
        </Box>
      );
    },

    [INLINES.HYPERLINK]: (node, children) => {
      const { data } = node;
      return (
        <Link href={data.uri} color="secondary" underline="hover">
          {children}
        </Link>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: text => (
      <Typography align={textAlign} color="primary" variant="body1">
        <b>{text}</b>
      </Typography>
    ),
    [MARKS.ITALIC]: text => (
      <Typography align={textAlign} color="primary" variant="body1">
        <i>{text}</i>
      </Typography>
    ),
  },
});

export { useOptions };
