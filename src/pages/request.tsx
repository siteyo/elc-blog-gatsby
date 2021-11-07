import * as React from 'react';

import { PageProps, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { Layout } from 'components/Layout';
import { Seo } from 'components/Seo';

import { generalOptions } from 'styles/RichTextOptions';

const Request: React.VFC<PageProps<GatsbyTypes.RequestQuery>> = ({ data }) => {
  const content = data.contentfulArticles?.content;
  return (
    <Layout contentMaxWidth="sm">
      <Seo title="Mix request" />
      <>{content && renderRichText(content, generalOptions)}</>
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
