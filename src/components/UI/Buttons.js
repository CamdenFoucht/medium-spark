import React from "react"

const Button = props => (
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

export default Button
