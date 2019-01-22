import React from 'react'

import Layout from '../components/layout'
import ResumePage from '../components/resumePage'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`,'stephen','ng','singapore']} />
    <ResumePage />
  </Layout>
)

export default IndexPage
