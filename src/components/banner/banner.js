import React from "react"
import Container from "../container"
import Grid from "../grid/grid"
import { Link } from "gatsby"
import styles from "./banner.module.css"
import Undraw2 from "../../images/undraw2.svg"
import Button from "../UI/Buttons"

const Banner = () => (
  <section className={styles.banner}>
    <Container>
      <Grid
        cols={2}
        style={{ alignItems: "center", gridTemplateColumns: "2fr 1fr" }}
      >
        <div style={{}}>
          <h4 className={styles.heading}>Lets start something together!</h4>
            <ButtonLink to="/contact">Start a Project</ButtonLink>
        </div>
        <div className={styles.svgContainer}>
          <Undraw2 />
        </div>
      </Grid>
    </Container>
  </section>
)

export default Banner
