import * as React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';
import { PageProps } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { Box, Typography } from '@material-ui/core';

import { Layout } from 'components/Layout';

export interface MusicPageContext {
  post: GatsbyTypes.ContentfulDiscographyEdge;
}

const Music: React.VFC<PageProps<Record<string, never>, MusicPageContext>> = ({
  pageContext,
}) => {
  const { songs } = pageContext.post.node;
  return (
    <Layout contentMaxWidth="sm">
      <Typography>{pageContext.post.node.title}</Typography>
      <GatsbyImage
        image={pageContext.post.node.image?.gatsbyImageData}
        alt=""
      />
      <Box>{songs && renderRichText(songs)}</Box>
    </Layout>
  );
};

export default Music;
