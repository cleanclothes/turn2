module.exports = {
  siteMetadata: {
    title: "Turn Around H&M",
    author: "Clean Clothes Campaign",
    description: "Let's make sure H&M starts paying a living wage",
    siteUrl: "https://turnaroundhm.org"
  },
  plugins: [
      {
      resolve: `gatsby-plugin-sitemap`
},
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://turnaroundhm.org',
        sitemap: 'https://turnaroundhm.org/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-twitter',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/ccc-logo-small.svg', // This path is relative to the root of the site.
      },
    },
{
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '3',
        matomoUrl: 'https://piwik.cleanclothes.org',
        siteUrl: 'https://turnaroundhm.org'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
              linkImagesToOriginal: true,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
                width: 800,
                ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                // height: 400, // Optional: Overrides optional.ratio
                related: false //Optional: Will remove related videos from the end of an embedded YouTube video.
            },
          },
	  {
        resolve: "gatsby-remark-external-links",
        options: {
          target: "_self",
          rel: "nofollow noopener noreferrer"
        }
      },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-copy-images",
          "gatsby-remark-responsive-iframe",
        ],
      },
    },
    `gatsby-transformer-sharp`,
`gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
