import React from 'react';

import { Helmet } from 'react-helmet';

import { useStaticQuery, graphql } from 'gatsby';

type Meta = {
  name: string;
  content: string;
};

interface SeoProps {
  description?: string;
  lang?: string;
  title: string;
  meta?: Meta[];
}

const Seo: React.VFC<SeoProps> = ({
  description,
  lang = 'ja',
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery<GatsbyTypes.SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            socialUrl {
              twitter
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site?.siteMetadata?.description;
  const defaultTitle = site?.siteMetadata?.title ?? '';

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.socialUrl?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default Seo;
