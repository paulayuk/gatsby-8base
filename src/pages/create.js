import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Posts from '../components/Posts';

const inputStyles = {
  width: '400px',
  padding: '5px',
};
const divStyles = {
  marginBottom: '15px',
  display: 'flex',
  alignItems: 'center',
};
const labelStyles = {
  color: '#828282',
  fontSize: '13px',
  fontWeight: 'bold',
  marginRight: '7px',
};

// TODO -- 2
const POST_MUTATION = gql`
  mutation PostCreate($data: PostCreateInput!) {
    postCreate(data: $data) {
      id
    }
  }
`;

const Create = ({ history }) => {
  const [post, setPost] = useState({
    title: '',
    description: '',
  });

  // TODO -- 4
  const onFormSubmit = async (createPost) => {
    const data = {
      variables: {
        data: post,
      },
    };
    const response = await createPost(data);
    if (response.data.postCreate.id) {
      history.push('/');
    }
  };

  return (
    // TODO -- 3
    <Layout>
    <Mutation mutation={POST_MUTATION}>
      {(postCreate) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onFormSubmit(postCreate);
          }}
        >
          <div style={{ backgroundColor: '#f6f6ef', padding: '10px 8px 15px' }}>
            <div style={divStyles}>
              <label htmlFor="title" style={labelStyles}>
                title
              </label>
              <input
                className="mb2"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type="text"
                id="title"
                placeholder="Title"
                style={inputStyles}
              />
            </div>
            <div style={divStyles}>
              <label htmlFor="description" style={labelStyles}>
                text
              </label>
              <textarea
                className="mb2"
                value={post.description}
                onChange={(e) =>
                  setPost({ ...post, description: e.target.value })
                }
                placeholder="A description for the link"
                rows={4}
                id="description"
                style={inputStyles}
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </Mutation>
    </Layout>
  );
};

export default Create;
