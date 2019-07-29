import React, { Component } from "react"
import Layout from "../components/layout"

//this.props.match.params


export default class Post extends Component {
  state = {
        id: 2
    }
  render() {
    console.log(this.state.id)
    return (
      <Layout>
      <h1>hI</h1>
      </Layout>
    )
  }
}

