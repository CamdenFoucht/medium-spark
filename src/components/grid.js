import React from "react"

export const Grid = props => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
      ...props.style,
    }}
  >
    {props.children}
  </div>
)
