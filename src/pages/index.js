import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Ving Kris Saliendra</p>
    <Link to="/page-2/">Link Ako</Link>
  </Layout>
)

export default IndexPage
