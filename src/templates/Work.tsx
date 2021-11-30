import * as React from 'react';

import { PageProps } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { Typography, Box, makeStyles } from '@material-ui/core';

import { Layout } from 'components/Layout';
import { ShareButtons } from 'components/ShareButtons';
import { useOptions } from 'styles/RichTextOptions';

export interface WorkPageContext {
  post: GatsbyTypes.ContentfulWorksEdge;
}

const useStyles = makeStyles({
  title: {
    margin: '2rem 0 2rem',
  },
  content: {
    margin: '1rem 0',
  },
});

const Work: React.VFC<PageProps<Record<string, never>, WorkPageContext>> = ({
  pageContext,
  location,
}) => {
  const { body } = pageContext.post.node;
  const options = useOptions('left');
  const classes = useStyles();
  return (
    <Layout contentMaxWidth="sm" location="Work">
      <Box className={classes.title}>
        <Typography variant="body2" color="secondary">
          {pageContext.post.node.createdAt}
        </Typography>
        <Typography variant="h4" color="primary">
          {pageContext.post.node.title}
        </Typography>
      </Box>
      <Box className={classes.content}>
        {body && renderRichText(body, options)}
      </Box>
      <ShareButtons url={location.href} />
    </Layout>
  );
};

export default Work;
