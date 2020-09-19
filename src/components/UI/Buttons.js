import React from "react"
import { Link } from "gatsby"

export const Button = props => (
  <button
    {...props}
    style={{
      padding: "1.25rem 2rem",
      color: "rgba(0,0,0,.8)",
      background: "#45b29a",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
      ...props.style,
    }}
  >
    {props.children}
  </button>
)

export const ButtonLink = props => (
  <Link
    {...props}
    style={{
      padding: "1.25rem 2rem",
      color: "rgba(0,0,0,.8)",
      background: "#45b29a",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
      ...props.style,
    }}
  >
    {props.children}
  </Link>
)
