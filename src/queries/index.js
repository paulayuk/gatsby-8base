import gql from 'graphql-tag';

const POSTS_QUERY = gql`
  query {
    postsList{
          items{
            id,
            title,
            body,
            createdAt
          }
       }
  }
`;


 export { POSTS_QUERY }

