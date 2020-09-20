import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
        fontWeight: 700,
        textTransform: "capitalize",
      }}
    >
      <Link to="/" style={{ color: "currentColor", textDecoration: "none" }}>
        Spark Medium
      </Link>
    </h1>
  )
}

export default Logo
