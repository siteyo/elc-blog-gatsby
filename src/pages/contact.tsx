import React from 'react';

import { PageProps } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/Seo';

const Contact: React.VFC<PageProps> = () => (
  <Layout contentMaxWidth="sm">
    <SEO title="Contact" />
    <iframe
      title="test"
      src={process.env.GOOGLE_FORM_SRC}
      width="100%"
      height="1000"
      frameBorder="0"
    >
      読み込んでいます…
    </iframe>
  </Layout>
);

export default Contact;
