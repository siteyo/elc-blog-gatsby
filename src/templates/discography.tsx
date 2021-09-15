import React from 'react';
import Layout from 'components/Layout';
import { PageProps } from 'gatsby';

export interface DiscographyPageContext {
  limit: number;
  skip: number;
  numPage: number;
  currentPage: number;
}

const Discography: React.FC<PageProps> = () => <Layout>Discography</Layout>;

export default Discography;
