import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { SINGLE_POST_QUERY } from "../queries/index";


export default class Post extends Component {

  render() {

    return (
      <Query query={SINGLE_POST_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <h1>Fetching</h1>
        if (error)   return <h1>Error</h1>
        const PostToRender = data.post
        return (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{PostToRender.id}</h5>
                <p className="card-text">{PostToRender.title}</p>
                <p className="card-text">{PostToRender.body}</p>
              </div>
            </div>
            )
          }}
      </Query>)}
}
