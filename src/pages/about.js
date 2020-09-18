import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/grid/grid"
import Container from "../components/container"
import Film from "../images/film.svg"

import styles from "./about.module.css"
import Companies from "../components/companies/companies"
import Testimonials from "../components/testimonials/testimonial"
import CountUp from "react-countup"
import FadeIn from "react-fade-in"
import { SectionHeading } from "../components/UI/headers"
import Awards from "../components/awards/awards"

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <FadeIn>
      <div style={{ padding: "15rem 0 0 0" }}>
        <Container>
          <div style={{ paddingBottom: "3rem" }}>
            <h1 className={styles.h1}>
              We design, build and ship world-class digital advertisements for
              forward-thinking brands.
            </h1>
            <Grid cols={3} style={{ gridTemplateColumns: "1fr 2fr 1fr" }}>
              <Grid cols={1}>
                <div
                  className="flexbox-center"
                  style={{ transform: `translateX(-12rem)` }}
                >
                  <span className={styles.span}>
                    <CountUp end={130} />+
                  </span>
                  <p className={styles.p}>Advertisements Made</p>
                </div>
                <div
                  className="flexbox-center"
                  style={{ transform: `translateX(-6rem)` }}
                >
                  <span className={styles.span}>
                    <CountUp end={50} />+
                  </span>
                  <p className={styles.p}>Awards & Recognition</p>
                </div>
                <div className="flexbox-center">
                  <span className={styles.span}>
                    <CountUp end={6} />
                  </span>
                  <p className={styles.p}>Years in Business</p>
                </div>
              </Grid>
              <div className={styles.svgContainer}>
                <Film />
              </div>
              <div className={styles.gridRight}>
                <div
                  className="flexbox-center"
                  style={{ transform: `translateX(12rem)` }}
                >
                  <span className={styles.span}>
                    <CountUp end={11} />
                  </span>
                  <p className={styles.p}>Designers & Animators</p>
                </div>
                <div
                  className="flexbox-center"
                  style={{ transform: `translateX(6rem)` }}
                >
                  <span className={styles.span}>
                    <CountUp end={100} />%
                  </span>
                  <p className={styles.p}>In-house & Independent</p>
                </div>
                <div className="flexbox-center">
                  <span className={styles.span}>US</span>
                  <p className={styles.p}>Working globally, proudly American</p>
                </div>{" "}
              </div>
            </Grid>
          </div>

          <div style={{ padding: "9rem 0" }}>
            <SectionHeading>Clients & Partners</SectionHeading>
            <Companies text cols={4} />
          </div>
        </Container>
        <div style={{ background: "#15141a", padding: "9rem 0" }}>
          <Container>
            <SectionHeading color="#fff">What they say</SectionHeading>
          </Container>
          <Testimonials />
        </div>
        <div style={{ padding: "9rem 0" }}>
          <Container>
            <SectionHeading>Awards & Recognition</SectionHeading>
            <Awards />
          </Container>
        </div>
      </div>
    </FadeIn>
  </Layout>
)

export default AboutPage
