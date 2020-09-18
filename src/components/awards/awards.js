import React from "react"
import Amzn from "../../images/amazon.svg"
import Fb from "../../images/fb.svg"
import Cb from "../../images/coinbase.svg"
import Google from "../../images/google.svg"
import Cisco from "../../images/cisco.svg"
import Toyota from "../../images/toyota.svg"
import Container from "../container"
import Fade from "react-reveal/Fade"

import styles from "./awards.module.css"

const Awards = props => {
  return (
    <div
      style={{
        backgroundColor: props.dark ? "#15141a" : "transparent",
      }}
    >
      <Fade>
        <ul className={styles.row} style={{}}>
          <li>
            <Fade bottom>
              <div className={styles.imgBlock}>
                <img
                  src="https://humaan.com/wp-content/uploads/2020/01/award-awa.png"
                  width="105"
                  height="105"
                />
              </div>
              <p>
                50 Australian Web Awards
                <br />
                Most awarded agency 2016 – 2020
              </p>
            </Fade>
          </li>
          <li>
            <Fade bottom>
              <img
                src="https://humaan.com/wp-content/uploads/2020/01/award-webby.png"
                width="144"
                height="105"
              />
              <p>
                3 Webby nominations
                <br />3 Honorable Mentions
              </p>
            </Fade>
          </li>
          <li>
            <Fade bottom>
              <img
                src="https://humaan.com/wp-content/uploads/2020/01/award-awwwards.png"
                width="105"
                height="105"
              />
              <p>
                2 Awwwards Site of the Day
                <br />3 Awwwards Honorable Mentions
              </p>
            </Fade>
          </li>
          <li>
            <Fade bottom>
              <img
                src="https://humaan.com/wp-content/uploads/2020/01/award-css-design.png"
                width="105"
                height="105"
              />
              <p>
                10 CSS Design Awards
                <br />
                Site of the day
              </p>
            </Fade>
          </li>
          <li>
            <Fade bottom>
              <img
                src="https://humaan.com/wp-content/uploads/2020/01/award-comm-arts.png"
                width="105"
                height="105"
              />
              <p>
                Communication Arts
                <br />
                10 Webpicks features
              </p>
            </Fade>
          </li>
          <li>
            <Fade bottom>
              <img
                src="https://humaan.com/wp-content/uploads/2020/01/award-woo.png"
                width="105"
                height="105"
              />
              <p>
                WooCommerce Showcase
                <br />
                Sodashi Feature
              </p>
            </Fade>
          </li>
          <li>
            <Fade bottom>
              <img
                src="https://humaan.com/wp-content/uploads/2020/01/award-features.png"
                width="105"
                height="105"
              />
              <p>
                Plus Features from .net magazine,
                <br />
                The Best Designs, One Page Love &
              </p>
            </Fade>
          </li>
        </ul>
      </Fade>
    </div>
  )
}

export default Awards
