module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog Starter',
    description: 'A modern Gatsby blog',
    siteUrl: 'https://example.com',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mdx',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
  ],
};
