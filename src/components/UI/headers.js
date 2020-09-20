import React from "react"

import styles from "./headers.module.css"

export const H1 = props => (
  <h1
    style={{
      fontSize: props.size || "3.2rem",
      fontWeight: 900,
      color: props.color || "#000",
    }}
  >
    {props.children}
  </h1>
)

export const H2 = props => <h2>{props.text}</h2>

export const H3 = props => <h3>{props.text}</h3>

export const H4 = props => <h4>{props.text}</h4>

export const H5 = props => <h5>{props.text}</h5>

export const H6 = props => <h6>{props.text}</h6>

export const LandingHeading = props => (
  <H1 color="#2e476b" size="4.8rem">
    {props.children}
  </H1>
)

export const PrimaryHeading = props => <H1 color="#2e476b">{props.children}</H1>

export const SectionHeading = props => (
  <h2
    style={{
      position: "relative",
      fontSize: "3.2rem",
      marginBottom: "5rem",
      color: props.color ? props.color : "rgba(0,0,0,.8)",
    }}
    className={styles.sectionHeading}
  >
    {props.children}
  </h2>
)
