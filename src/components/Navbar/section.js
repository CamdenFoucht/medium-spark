import React from "react"

const Section = props => {
  const tag = props.tag || "section"

  return (
    <section
      style={{
        padding: "6rem 0",
        background: props.background || "transparent",
      }}
    >
      {props.children}
    </section>
  )
}

export default Section
