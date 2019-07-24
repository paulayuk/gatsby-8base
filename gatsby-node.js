/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { makeBlogPath } = require("./src/utils")

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
        postList{
          items {
            id
            title
            body
          }
        }
      }
  `)
  data.postsList.items.forEach(item => {
    actions.createPage({
      path: makeBlogPath(item),
      component: path.resolve(`./src/components/BlogPost.js`),
      context: {
        postId: item.id,
      },
    })
  })
}

