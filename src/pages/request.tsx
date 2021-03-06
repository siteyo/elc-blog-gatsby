import * as React from 'react';

import { PageProps, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { Layout } from 'components/Layout';
import { Seo } from 'components/Seo';

import { useOptions } from 'styles/RichTextOptions';

const Request: React.VFC<PageProps<GatsbyTypes.RequestQuery>> = ({ data }) => {
  const content = data.contentfulArticles?.content;
  const options = useOptions('left');
  return (
    <Layout contentMaxWidth="sm" location="Mix request">
      <Seo title="Mix request" />
      <div>{content && renderRichText(content, options)}</div>
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
