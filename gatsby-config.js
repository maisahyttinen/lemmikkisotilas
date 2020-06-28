module.exports = {
  siteMetadata: require("./site-metadata.json"),
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              quality: 80,
              backgroundColor: "transparent",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`300`, `500`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: false,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-131931747-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        cookieDomain: "maisahyttinen.fi",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `588927280`, //`maisahyttinen`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                let imageHtml;
                let image;
                try {
                  let image = edge.node.frontmatter.img_path.publicURL;
                  imageHtml = `<p><img src="${site.siteMetadata.siteUrl}${image}"/></p>`;
                } catch (err) {}

                const description = edge.node.frontmatter.excerpt
                  ? edge.node.frontmatter.excerpt
                  : edge.node.excerpt;

                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.title,
                  description,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.path}`,
                  guid: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.path}`,
                  ...(image && {
                    image: `${site.siteMetadata.siteUrl}/${image}`,
                  }),
                  custom_elements: [
                    { "content:encoded": `${imageHtml}${edge.node.html}` },
                  ],
                });
              });
            },
            query: `
            {
              allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fields: {slug: {nin: ["/", "/arkisto/", "/tekija/"]}}}) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      path
                      excerpt
                      img_path{
                        publicURL
                      }
                    }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "Hevosvalokuvaaja Maisa Hyttinen",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({ site }) => {
          return site.siteMetadata.siteUrl;
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(({ path }) => {
            return {
              url: `${site.siteMetadata.siteUrl}${path}`,
              changefreq: `weekly`,
            };
          }),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://maisahyttinen.fi",
        sitemap: "https://maisahyttinen.fi/sitemap.xml",
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        //modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: false,
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
