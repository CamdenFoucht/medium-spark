import React from "react"
import { Fade } from "react-awesome-reveal"
import { Row, Col } from "react-flexbox-grid"

import Amzn from "../../images/amazon.svg"
import Fb from "../../images/fb.svg"
import Cb from "../../images/coinbase.svg"
import Google from "../../images/google.svg"
import Cisco from "../../images/cisco.svg"
import Toyota from "../../images/toyota.svg"
import Costco from "../../images/costco.svg"
import Apple from "../../images/apple-11.svg"
import Lowes from "../../images/lowes.svg"
import HomeDepot from "../../images/homedepot.svg"
import OfficeMax from "../../images/officemax.svg"
import Dyson from "../../images/dyson.svg"
import Intel from "../../images/intel.svg"
import Ebay from "../../images/ebay.svg"
import Discord from "../../images/discord.svg"
import PG from "../../images/pg.svg"
import GenMills from "../../images/general-mills.svg"

import styles from "./companies.module.css"

const Companies = props => {
  let partners = [
    {
      logo: <Google />,
      text:
        "Google is a learning experience platofrm which addresses itself to the entire world.",
    },
    {
      logo: <Amzn />,
      text:
        "Amazon focuses on e-commerce, cloud computing, digital streaming, and AI.",
    },
    {
      logo: <Cb />,
      text:
        "They broker exchanges of Bitcoin, Bitcoin Cash, Ethereum, and Tezos.",
    },
    {
      logo: <Toyota />,
      text:
        "Japanese multinational automotive manufacturer headquartered in Aichi, Japan.",
    },
    {
      logo: <Costco />,
      text:
        "Costco Wholesale operates a chain of membership-only warehouse clubs",
    },
    {
      logo: <PG />,
      text:
        "Proctor & Gamble is a consumer goods corporation headquartered in Ohio.",
    },
    {
      logo: <OfficeMax />,
      text: "The go-to store for office and breakroom supplies and furniture.",
    },
    {
      logo: <Lowes />,
      text: "American retail company specializing in home improvement.",
    },
    {
      logo: <Fb />,
      text:
        "American social media conglomerate corporation based in Menlo Park, California.",
    },

    {
      logo: <Dyson />,
      text:
        "Manufactures household appliances such as vacuum cleaners, fans, and lights.",
    },
    {
      logo: <GenMills />,
      text: "Multinational manufacturer and market of branded consumer foods.",
    },
    {
      logo: <Discord />,
      text:
        "Instant messaging and VoIP application and digital distribution platform.",
    },
  ]

  if (props.max) {
    partners = partners.slice(0, props.max)
  }

  const list = partners.map((el, index) => {
    return (
      <Col xs={props.xs} sm={props.sm} md={props.md} lg={props.lg}>
        <Fade direction="up" delay={index * 50} triggerOnce duration={500}>
          <div
            className={props.text ? styles.containerText : styles.containerLogo}
          >
            <div className={styles.companyLogo}>{el.logo}</div>
            {props.text ? <p className={styles.text}>{el.text}</p> : null}
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
