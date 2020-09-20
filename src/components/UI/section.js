import React from "react"

import Container from "../container"

import styles from "./section.module.css"

const Section = props => {
  return (
    <section
      id={props.id}
      className={styles.section}
      style={{ background: props.background || "#fff" }}
    >
      <Container>{props.children}</Container>
    </section>
  )
}
export default Section
