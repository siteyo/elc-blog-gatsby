import React from 'react';

import { PageProps } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { Typography, Box } from '@material-ui/core';

import Layout from 'components/Layout';
import ShareButtons from 'components/ShareButtons';

import options from 'styles/RichTextOptions';

export interface WorkPageContext {
  post: GatsbyTypes.ContentfulWorksEdge;
}

const Work: React.VFC<PageProps<Record<string, never>, WorkPageContext>> = ({
  pageContext,
  location,
}) => {
  const { body } = pageContext.post.node;
  return (
    <Layout contentMaxWidth="sm">
      <Typography variant="h2" color="primary">
        {pageContext.post.node.title}
      </Typography>
      <Typography variant="h6" color="secondary">
        {pageContext.post.node.createdAt}
      </Typography>
      <Box style={{ margin: '1rem 0' }}>
        {body && renderRichText(body, options)}
      </Box>
      <ShareButtons url={location.href} />
    </Layout>
  );
};

export default Work;
