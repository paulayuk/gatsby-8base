// const path = require(`path`);



// const POSTS_QUERY = `
//     postsList{
//           items{
//             id,
//             title,
//             body
//           }
//        }
// `;

// const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
//   // Query for nodes to use in creating pages.
//   resolve(
//     graphql(request).then(result => {
//       if (result.errors) {
//         reject(result.errors)
//       }
//       return result;
//     })
//   )
// });

// // Implement the Gatsby API “createPages”. This is called once the
// // data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;

//   const getPosts = makeRequest(graphql,POSTS_QUERY).then(result => {
//       console.log(result)
//     //Create pages for each article.
//     result.data.postsList.items.forEach(({ item }) => {
//       createPage({
//         path: `/${item.id}`,
//         component: path.resolve(`src/templates/post.js`),
//         context: {
//           id: item.id,
//         },
//       })
//     })
//   });

//   // Query for articles nodes to use in creating pages.
//   return getPosts;
// };
