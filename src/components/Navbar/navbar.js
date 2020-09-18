import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styles from "./navbar.module.css"
import Container from "../container"
import Logo from "../logo"
import Hamburger from "./hamburger"
import FullScreenMenu from "./FullScreenMenu"

const Navbar = ({ siteTitle }) => {
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset)
  const [visible, setIsVisible] = useState(true)

  const classNames = [styles.header]

  if (!visible) {
    classNames.push(styles.headerHidden)
  }

  useEffect(() => {
    const handleScroll = () => {
      const prevScrollPos = scrollPosition
      const currentScrollPos = window.pageYOffset
      const visible = prevScrollPos > currentScrollPos
      setIsVisible(visible)
      setScrollPosition(prev => currentScrollPos)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollPosition])

  return (
    <header
      className={classNames.join(" ")}
      style={{
        backgroundColor: scrollPosition == 0 ? "transparent" : "#fff",
        boxShadow: scrollPosition == 0 ? "" : `0 1px 1px rgba(6,8,8,.1)`,
      }}
    >
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
