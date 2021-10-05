import React from 'react';

import { graphql, PageProps } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from 'components/Layout';
import SEO from 'components/Seo';

import options from 'styles/RichTextOptions';

const Biography: React.FC<PageProps<GatsbyTypes.BioQuery>> = ({ data }) => {
  const content = data.contentfulArticles?.content;
  return (
    <Layout contentMaxWidth="sm">
      <SEO title="Biography" />
      <>{content && renderRichText(content, options)}</>
    </Layout>
  );
};

export default Biography;

export const query = graphql`
  query Bio {
    contentfulArticles(slug: { eq: "biography" }) {
      slug
      title
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
          }
        }
      }
    }
  }
`;
