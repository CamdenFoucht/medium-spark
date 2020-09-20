import React from "react"
import { Link } from "gatsby"

import styles from "./Links.module.css"
import LinkArrow from "../../images/link-arrow.svg"

const AnimatedLink = props => {
  let sizeStyle = styles.linkNormal
  if (props.large) {
    sizeStyle = styles.linkLarge
  } else if (props.small) {
    sizeStyle = styles.linkSmall
  }

  return (
    <Link className={[styles.link, sizeStyle].join(" ")} to={props.to}>
      {props.text}
      <LinkArrow width="14" height="12" />
    </Link>
  )
}
export default AnimatedLink
