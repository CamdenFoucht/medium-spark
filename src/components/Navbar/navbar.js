import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./navbar.module.css"
import Container from "../container"
import Logo from "../logo"

const Navbar = ({ siteTitle }) => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.brand}>spark medium</div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                About
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                Work
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
