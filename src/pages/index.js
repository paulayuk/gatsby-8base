import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Posts from '../components/Posts';


const IndexPage = () => (
  <Layout>
    <Posts />
  </Layout>
)

export default IndexPage
