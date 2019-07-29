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

const SINGLE_POST_QUERY = gql`
  query PostByID($id: ID){
      post(id: $id){
        id,
        title,
        body,
        createdAt
      }
  }
`;

 export { POSTS_QUERY, SINGLE_POST_QUERY }

