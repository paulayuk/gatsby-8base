import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { POSTS_QUERY } from "../queries/index";
import { Link } from "gatsby";
import './posts.css';

export default class Posts extends Component {

  render() {
    return (
      <Query query={POSTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h1>Fetching</h1>
          if (error)   return <h1>Error</h1>
          const posts = data.postsList.items
          return (
                <div>
                  <div className="header">8thBlog</div>
                  {posts.map((post, index) => {
                      return (
                        <div key={index} className="main">
                              <div className="card-body">
                                <h2>
                                  <Link to={`/${post.id}`} className="links">{post.title}</Link>
                                  <span className="created">Created At: {post.createdAt}</span>
                                </h2>
                                <p className="card-text">{post.body}</p>
                              </div>
                        </div>
                      )
                  })}
                </div>
              )
          }}
        </Query>
    )}
}
