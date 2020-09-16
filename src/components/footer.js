import React from "react"
import Container from "./container"
import { Grid } from "./grid"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./footer.module.css"
import Logo from "./logo"
import BackgroundImage from "gatsby-background-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "footer2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            aspectRatio
            originalName
            sizes
            src
            tracedSVG
          }
        }
      }
    }
  `)

  const imageData = data.placeholderImage.childImageSharp.fluid

  console.log(data)

  return (
    <BackgroundImage
      Tag="section"
      className={styles.footerBG}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <footer className={styles.footer}>
        <Container>
          <div className={styles.row}>
            <div className={styles.col}>
              <div style={{ width: "80px" }}>
                <Logo />
              </div>
              <a className={styles.link} href="#">
                mediumspark@gmail.com
              </a>
              <a className={styles.phoneNumber}>202.202.202</a>
            </div>
            <div>
              <h2 className={styles.heading}>Quick Links</h2>
              <a className={styles.link} href="#">
                Home
              </a>
              <a className={styles.link} href="#">
                Work
              </a>
              <a className={styles.link} href="#">
                Contact
              </a>
            </div>
            <div>
              <h2 className={styles.heading}>Quick Links</h2>
              <a className={styles.link} href="#">
                Home
              </a>
              <a className={styles.link} href="#">
                Work
              </a>
              <a className={styles.link} href="#">
                Contact
              </a>
            </div>
            <div>
              <h2 className={styles.heading}>Find Us</h2>
              <a className={styles.link} href="#">
                1001 290th Ave SE
              </a>
              <a className={styles.link} href="#">
                Fall City, WA
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </BackgroundImage>
  )
}

export default Footer
