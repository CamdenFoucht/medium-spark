import React from "react"
import styles from "./navbar.module.css"
import { Link } from "gatsby"

const FullScreenMenu = () => {
  return (
    <div className={styles.fullScreenMenu}>
      <ul className={styles.fullScreenList}>
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
    </div>
  )
}

export default FullScreenMenu
