import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ResumePage from '../components/resumePage'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ResumePage />
  </Layout>
)

export default IndexPage
