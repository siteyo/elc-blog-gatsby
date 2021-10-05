import React from 'react';

import { PageProps, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from 'components/Layout';
import SEO from 'components/Seo';

import options from 'styles/RichTextOptions';

const Request: React.VFC<PageProps<GatsbyTypes.RequestQuery>> = ({ data }) => {
  const content = data.contentfulArticles?.content;
  return (
    <Layout contentMaxWidth="sm">
      <SEO title="Mix request" />
      <>{content && renderRichText(content, options)}</>
    </Layout>
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
