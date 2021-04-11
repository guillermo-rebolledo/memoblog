/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { bioQuery } from "../components/bio"

import { rhythm } from "../utils/typography"

// import resume from '../../content/assets/'
import resume from "../../content/assets/GuillermoO_Resume_Private.pdf"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <p>
              <a
                href={`https://twitter.com/${social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span role="img" aria-label="bird emoji">
                  🐦
                </span>{" "}
                twitter
              </a>
              {` `}
              <a
                href={`https://www.instagram.com/${social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span role="img" aria-label="camera emoji">
                  📷
                </span>{" "}
                instagram
              </a>
              <a href={resume} rel="noopener noreferrer" target="_blank">
                <span role="img" aria-label="file emoji">
                  📁
                </span>{" "}
                resume
              </a>
            </p>
          </Container>
        )
      }}
    />
  )
}

const Container = styled.div`
  display: flex;
`

export default Bio
