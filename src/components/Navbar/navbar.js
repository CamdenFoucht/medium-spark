import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import Container from "../container"

import styles from "./navbar.module.css"

const Navbar = ({ siteTitle }) => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div>
            <Link className={styles.brand} to="/">
              <h1>spark medium</h1>
            </Link>
          </div>
          <ul className={styles.list}>
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
