import React from "react"
import Container from "./container"
import { Grid } from "./grid"
import { Link } from "gatsby"
import styles from "./footer.module.css"

const Footer = () => (
  <section className={styles.footer}>
    <Container>
      <div>
        Lets start something together!
        <button>Contact Us</button>
      </div>
    </Container>
  </section>
)

export default Footer
