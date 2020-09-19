import React from "react"
import Amzn from "../../images/amazon.svg"
import Fb from "../../images/fb.svg"
import Cb from "../../images/coinbase.svg"
import Google from "../../images/google.svg"
import Cisco from "../../images/cisco.svg"
import Toyota from "../../images/toyota.svg"
import Container from "../container"
import Fade from "react-reveal/Fade"

import styles from "./companies.module.css"

const Companies = props => {
  let partners = [
    {
      logo: <Cb />,
      text: "The first digital health insurance that makes your life easier.",
    },
    {
      logo: <Cisco />,
      text:
        "Cisco is a learning experience platofrm which addresses itself to enterprises.",
    },
    {
      logo: <Google />,
      text:
        "Google is a learning experience platofrm which addresses itself to the entire world.",
    },
    {
      logo: <Amzn />,
      text: "The first digital health insurance that makes your life easier.",
    },
    {
      logo: <Cisco />,
      text:
        "Cisco is a learning experience platofrm which addresses itself to enterprises.",
    },
    {
      logo: <Google />,
      text:
        "Google is a learning experience platofrm which addresses itself to the entire world.",
    },
    {
      logo: <Cisco />,
      text:
        "Cisco is a learning experience platofrm which addresses itself to enterprises.",
    },
    {
      logo: <Google />,
      text:
        "Google is a learning experience platofrm which addresses itself to the entire world.",
    },
    {
      logo: <Amzn />,
      text: "The first digital health insurance that makes your life easier.",
    },
    {
      logo: <Cisco />,
      text:
        "Cisco is a learning experience platofrm which addresses itself to enterprises.",
    },
    {
      logo: <Google />,
      text:
        "Google is a learning experience platofrm which addresses itself to the entire world.",
    },
    {
      logo: <Amzn />,
      text: "The first digital health insurance that makes your life easier.",
    },
  ]

  if (props.max) {
    partners = partners.slice(0, props.max)
  }

  const list = partners.map((el, index) => {
    return (
      <li>
        <Fade bottom delay={(index % 6) * 50}>
          <div className={styles.container}>
            <div>{el.logo}</div>
            {props.text ? <p style={{ marginTop: "3rem" }}>{el.text}</p> : null}
          </div>
        </Fade>
      </li>
    )
  })

  return (
    <div
      style={{
        backgroundColor: props.dark ? "#15141a" : "transparent",
        padding: "0 0",
      }}
    >
      <Fade>
        <ul
          className={styles.clientList}
          style={{ gridTemplateColumns: `repeat(${props.cols || 5}, 1fr)` }}
        >
          {list}
        </ul>
      </Fade>
    </div>
  )
}

export default Companies
