import * as React from 'react';

import { Helmet } from 'react-helmet';

import { useStaticQuery, graphql } from 'gatsby';

type Meta = {
  name: string;
  content: string;
};

interface SeoProps {
  description?: string;
  image?: string;
  lang?: string;
  title: string;
  meta?: Meta[];
}

const Seo: React.VFC<SeoProps> = ({
  description,
  image,
  lang = 'ja',
  meta = [],
  title,
}) => {
  const data = useStaticQuery<GatsbyTypes.SeoQuery>(
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
        contentfulAsset(title: { eq: "HomeImage" }) {
          gatsbyImageData(formats: WEBP, quality: 50, width: 400)
        }
      }
    `,
  );

  const metaDescription = description || data.site?.siteMetadata?.description;
  const defaultTitle = data.site?.siteMetadata?.title ?? '';
  const metaImage = image
    ? `https:${image}`
    : `https:${data.contentfulAsset?.resize?.src ?? ''}`;

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
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site?.siteMetadata?.socialUrl?.twitter || ``,
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

export { Seo };
