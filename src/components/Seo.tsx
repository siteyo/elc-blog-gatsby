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

const Seo: React.VFC<SeoProps> = ({ description, lang, meta = [], title }) => {
  const { site } = useStaticQuery<GatsbyTypes.SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  const defaultTitle = site?.siteMetadata?.title ?? '';

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={meta}
    />
  );
};

export default Seo;
