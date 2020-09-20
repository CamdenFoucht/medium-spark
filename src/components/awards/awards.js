import React from "react"
import { Fade } from "react-awesome-reveal"
import { Row, Col } from "react-flexbox-grid"

import styles from "./awards.module.css"

const Awards = props => {
  const items = [
    {
      img: "https://humaan.com/wp-content/uploads/2020/01/award-awa.png",
      text1: "50 Australian Web Awards",
      text2: "Most awarded agency",
    },
    {
      img: "https://humaan.com/wp-content/uploads/2020/01/award-awa.png",
      text1: "50 Australian Web Awards",
      text2: "Most awarded agency 2020",
    },
    {
      img: "https://humaan.com/wp-content/uploads/2020/01/award-awwwards.png",
      text1: "2 Awwwards Site of the Day",
      text2: "3 Awwwards Honorable Mentions",
    },
    {
      img: "https://humaan.com/wp-content/uploads/2020/01/award-css-design.png",
      text1: "10 CSS Design Awards",
      text2: "Site of the day",
    },
    {
      img: "https://humaan.com/wp-content/uploads/2020/01/award-comm-arts.png",
      text1: "Communication Arts",
      text2: "10 Webpicks features",
    },
    {
      img: "https://humaan.com/wp-content/uploads/2020/01/award-comm-arts.png",
      text1: "WooCommerce Showcase",
      text2: "Sodashi Feature",
    },
    {
      img: "https://humaan.com/wp-content/uploads/2020/01/award-features.png",
      text1: "Plus Features from .net magazine,",
      text2: "The Best Designs, One Page Love &",
    },
  ].map((el, index) => (
    <Col xs={6} sm={6} md={3} className={styles.col}>
      <Fade direction="up" triggerOnce delay={75 * index}>
        <>
          <div className={styles.imgBlock}>
            <img src={el.img} width="105" height="105" />
          </div>
          <p>
            {el.text1}
            <br />
            {el.text2}
          </p>
        </>
      </Fade>
    </Col>
  ))

  return (
    <div
      style={{
        backgroundColor: props.dark ? "#15141a" : "transparent",
      }}
    >
      <div>
        <Row>{items}</Row>
      </div>
    </div>
  )
}

export default Awards
