import React from "react"

import Grid from "../grid/grid"
import Undraw2 from "../../images/undraw2.svg"
import { ButtonLink } from "../UI/Buttons"
import Section from "../UI/section"

import styles from "./banner.module.css"

const Banner = () => (
  <Section background="linear-gradient(49deg, rgb(235, 242, 245), rgb(230, 242, 250))">
    <div className={styles.banner}>
      <Grid
        cols={2}
        style={{ alignItems: "center", gridTemplateColumns: "2fr 1fr" }}
      >
        <div style={{}}>
          <h4
            className={styles.heading}
          >{`Let's start something together!`}</h4>
          <div>
            <ButtonLink to="/contact">Start a Project</ButtonLink>
          </div>
        </div>
        <div className={styles.svgContainer}>
          <Undraw2 />
        </div>
      </Grid>
    </div>
  </Section>
)

export default Banner

// background = "#212129"
