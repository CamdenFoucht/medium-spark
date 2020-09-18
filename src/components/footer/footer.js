import React from "react"
import Container from "../container"
import Grid from "../grid/grid"
import { useStaticQuery, graphql } from "gatsby"
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
            <a className={styles.link} href="#">
              sparkmedium@gmail.com
            </a>
            <a className={styles.phoneNumber}>202.202.202</a>
          </div>
          <div className={styles.col}>
            <h2 className={styles.heading}>Quick Links</h2>
            <ul>
              <li>
                <a className={styles.link} href="#">
                  Home
                </a>
              </li>
              <li>
                <a className={styles.link} href="#">
                  Work
                </a>
              </li>
              <li>
                {" "}
                <a className={styles.link} href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h2 className={styles.heading}>About Us</h2>
            <ul>
              <li>
                <a className={styles.link} href="#">
                  About Spark Medium
                </a>
              </li>
              <li>
                {" "}
                <a className={styles.link} href="#">
                  Testimonials
                </a>
              </li>
              <li>
                <a className={styles.link} href="#">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h2 className={styles.heading}>Find Us</h2>
            <p className={styles.link} href="#">
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
