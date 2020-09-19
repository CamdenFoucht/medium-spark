import React from "react"
import Container from "../container"
import Grid from "../grid/grid"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./footer.module.css"
import Logo from "../logo"
import Img from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "footer2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageData = data.placeholderImage.childImageSharp.fluid

  console.log(data)

  return (
    <footer className={styles.footer}>
      <Container>
        <div
          className={styles.row}
          style={{ position: "relative", zIndex: 100 }}
        >
          <div className={styles.col}>
            <div>
              <Logo />
            </div>
            <a className={styles.link}>sparkmedium@gmail.com</a>
            <a className={styles.phoneNumber}>202.202.202</a>
          </div>
          <div className={styles.col}>
            <h2 className={styles.heading}>Quick Links</h2>
            <ul>
              <li>
                <Link to="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className={styles.link}>
                  Work
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.link} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h2 className={styles.heading}>About Us</h2>
            <ul>
              <li>
                <Link className={styles.link} to="/about">
                  About Spark Medium
                </Link>
              </li>
              <li>
                {" "}
                <Link className={styles.link} to="/about">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/contact">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h2 className={styles.heading}>Find Us</h2>
            <p className={styles.link}>
              555 W 5th St, 35th Floor
              <br /> Los Angeles, CA 90013, US
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

//
// <Img
//   className={styles.bg}
//   fluid={data.placeholderImage.childImageSharp.fluid}
// />
