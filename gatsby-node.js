const Promise = require('bluebird');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      blogPosts : allContentfulBlogPost {
        edges {
          node {
            slug
            title
            tags
          }
        }
      }
      pages : allContentfulPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  result.data.blogPosts.edges.forEach(({ node }) => {
    console.log(node);
    createPage({
      path: `/blog/${node.slug}/`,
      component: path.resolve('./src/templates/BlogPost.js'),
      context: {
        slug: node.slug
      },
    })
  })

  result.data.pages.edges.map(({ node }) => {
    createPage({
      path: `${node.slug}/`,
      component: path.resolve('./src/templates/Page.js'),
      context: {
        slug: node.slug,
      },
    })
  })
}