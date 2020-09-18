import React from "react"

import styles from "./grid.module.css"

const Grid = props => (
  <div
    className={styles.grid}
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
      ...props.style,
    }}
  >
    {props.children}
  </div>
)

export default Grid
