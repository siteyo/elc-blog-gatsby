import React from 'react';
import { PageProps } from 'gatsby';
import Layout from 'components/Layout';
import { Typography, Box } from '@material-ui/core';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import options from 'styles/RichTextOptions';

export interface WorkPageContext {
  post: GatsbyTypes.ContentfulWorksEdge;
}

const Work: React.VFC<PageProps<Record<string, never>, WorkPageContext>> = ({
  pageContext,
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
      <Box>{body && renderRichText(body, options)}</Box>
    </Layout>
  );
};

export default Work;
