import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styles from "./navbar.module.css"
import Container from "../container"

const Navbar = ({ siteTitle }) => {
  return (
    <header className={style.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.brand}>spark medium</div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link
                className={styles.link}
                to="/"
                activeClassName={styles.activeLink}
              >
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                activeClassName={styles.activeLink}
                to="/work"
              >
                Work
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={styles.link}
                activeClassName={styles.activeLink}
                to="/about"
              >
                About
              </Link>
            </li>

            <li className={styles.item}>
              <Link
                className={styles.link}
                activeClassName={styles.activeLink}
                to="/contact"
              >
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
