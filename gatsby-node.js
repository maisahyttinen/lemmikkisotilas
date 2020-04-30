const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              template
              path
              date(formatString: "YYYY")
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const id = edge.node.id;
      const slug = edge.node.frontmatter.path
        ? edge.node.frontmatter.path
        : edge.node.fields.slug;
      createPage({
        path: slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.template)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    // Tag pages:
    let years = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.date`)) {
        const year = edge.node.frontmatter.date;
        years.push(year);
      }
    });

    // Eliminate duplicate tags
    years = _.uniq(years);

    years = years.sort((a, b) => b - a);

    // Make tag pages
    years.forEach((year, i) => {
      const yearPath = `/arkisto/${_.kebabCase(year)}/`;

      if (i === 0) {
        createPage({
          path: "/arkisto",
          component: path.resolve(`src/templates/years.js`),
          context: {
            year: String(year),
            years,
          },
        });
      }

      createPage({
        path: yearPath,
        component: path.resolve(`src/templates/years.js`),
        context: {
          year: String(year),
          years,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    if (node.frontmatter.date) {
      createNodeField({
        name: `year`,
        node,
        value: node.frontmatter.date.split("-")[0],
      });
    }
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateDevServer = ({ app }) => {
  const fsMiddlewareAPI = require("netlify-cms-backend-fs/dist/fs");
  fsMiddlewareAPI(app);
};
