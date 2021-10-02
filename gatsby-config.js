require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://equnie.netlify.app",
    title: "elc",
    description: "ひとり音楽アカウント elc のホームページです。",
    menuLinks: [
      { name: 'Works', link: '/works' },
      { name: 'Discography', link: '/discography' },
      { name: 'Biography', link: '/biography' },
      { name: `Mix request`, link: `/request` },
      { name: `Contact`, link: `/contact` },
    ],
    socialUrl: {
      twitter: 'http://twitter.com/equnie',
      youtube: 'https://www.youtube.com/channel/UCa0jy-bqHnmUulmWjTbgvaA/featured',
      soundcloud: ''
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-typegen`,
    `gatsby-plugin-root-import`,
  ],
};
