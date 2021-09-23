import React from 'react';

import { PageProps, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from 'components/Layout';

const Request: React.VFC<PageProps<GatsbyTypes.RequestQuery>> = ({ data }) => {
  const content = data.contentfulArticles?.content;
  return (
    <Layout contentMaxWidth="sm">{content && renderRichText(content)}</Layout>
  );
};

export default Request;

export const query = graphql`
  query Request {
    contentfulArticles(slug: { eq: "request" }) {
      content {
        raw
      }
    }
  }
`;
