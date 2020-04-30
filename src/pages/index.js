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
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./profile-pic-round.png" alt="Gatsby Scene" />
        <h1>
          Hello{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>I'm a software engineer from Mexico <span role="img" aria-label="flag emoji">🇲🇽</span> passionate about React, javascript, and frontend development.</p>

        <p>I also love videogames and play the guitar in my free time.</p>

        <p>Welcome to my blog!</p>

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
