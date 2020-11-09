
module.exports = {
  siteMetadata: { //used for SEO
    title: 'Portfolio',
    description: 'Personal website', 
    author: 'unknown',
    siteUrl:'http://localhost:8000' 
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal website`,  
        short_name: `short_name`, 
        start_url: `/`,
        background_color: `#333333`, 
        theme_color: `#333333`, 
        display: `minimal-ui`,
        icon: `src/images/icon.png`, 
      },
    },
    {
      resolve:`gatsby-plugin-robots-txt`,
      options:{
        host:`https://localhost:8000`, 
        policy: [{ userAgent: '*' }]
      }
    }  
  ],
}
