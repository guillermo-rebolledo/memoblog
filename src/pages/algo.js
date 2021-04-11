import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Algorithms"
          keywords={[
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            `algorithms`,
            `data structures`,
          ]}
        />
        <p>Algos</p>

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
