import React from "react"
import { Link } from "gatsby"

import styles from "./Links.module.css"
import LinkArrow from "../../images/link-arrow.svg"

const AnimatedLink = props => {
  return (
    <Link
      className={styles.link}
      to={props.to}
      style={{ fontSize: props.size }}
    >
      {props.text}
      <LinkArrow width="14" height="12" />
    </Link>
  )
}
export default AnimatedLink
