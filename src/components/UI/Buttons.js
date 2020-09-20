import React from "react"
import { Link } from "gatsby"

import styles from "./buttons.module.css"

export const Button = props => (
  <button
    className={styles.button}
    {...props}
    style={{
      padding: "1.25rem 2rem",
      color: "rgba(0,0,0,.8)",
      background: "#45b29a",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
      display: "inline-block",

      ...props.style,
    }}
  >
    {props.children}
  </button>
)

export const ButtonLink = props => (
  <Link
    className={styles.buttonLink}
    {...props}
    style={{
      padding: "1.25rem 2rem",
      color: "rgba(0,0,0,.8)",
      background: "#45b29a",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
      display: "inline-block",
      ...props.style,
      textDecoration: "none",
    }}
  >
    {props.children}
  </Link>
)
