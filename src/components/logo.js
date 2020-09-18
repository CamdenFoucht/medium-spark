import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "spark-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <h1
      style={{
        fontWeight: 600,
        fontSize: "2rem",
        color: "#222",
        fontWeight: 400,
        textTransform: "capitalize",
      }}
    >
      Spark Medium
    </h1>
  )
}

export default Logo
