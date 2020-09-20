import React from "react"
import { Fade } from "react-awesome-reveal"
import { Row, Col } from "react-flexbox-grid"

import Amzn from "../../images/amazon.svg"
import Fb from "../../images/fb.svg"
import Cb from "../../images/coinbase.svg"
import Google from "../../images/google.svg"
import Cisco from "../../images/cisco.svg"
import Toyota from "../../images/toyota.svg"

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
      logo: <Toyota />,
      text:
        "Google is a learning experience platofrm which addresses itself to the entire world.",
    },
    {
      logo: <Fb />,
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
      logo: <Toyota />,
      text:
        "Cisco is a learning experience platofrm which addresses itself to enterprises.",
    },
    {
      logo: <Fb />,
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
      <Col xs={props.xs} sm={props.sm} md={props.md} lg={props.lg}>
        <Fade triggerOnce direction="up" delay={index * 50} triggerOnce>
          <div
            className={props.text ? styles.containerText : styles.containerLogo}
          >
            <div>{el.logo}</div>
            {props.text ? <p style={{ marginTop: "3rem" }}>{el.text}</p> : null}
          </div>
        </Fade>
      </Col>
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
        <Row>{list}</Row>
      </Fade>
    </div>
  )
}

export default Companies
