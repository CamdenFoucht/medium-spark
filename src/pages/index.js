import React from "react"
import FadeIn from "react-fade-in"
import CountUp from "react-countup"
import { Row, Col } from "react-flexbox-grid"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Companies from "../components/companies/companies"
import Projects from "../components/project/projects"
import Section from "../components/UI/section"
import AnimatedLink from "../components/UI/Links"

import styles from "./index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.hero}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={5} lg={6} className={styles.colLeft}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <FadeIn>
                  <h1 className={styles.headerHeading}>
                    Advertise your business<span className="primary">.</span>
                  </h1>
                </FadeIn>

                <FadeIn delay={100}>
                  <p className={styles.headerText}>
                    We are an advertisement studio from California. We turn
                    products and ideas into extraordinary digital advertisements
                    and sales.{" "}
                    <AnimatedLink text="See our work" to="/work" large />
                  </p>
                </FadeIn>
              </div>
            </Col>
            <Col xs={12} sm={12} md={7} lg={6} className={styles.colRight}>
              <div className={styles.headerImgContainer}>
                <FadeIn>
                  <img
                    src="https://static.dribbble.com/users/646089/screenshots/11359567/media/232cbfcf8bf0c30769bf212d7b7e1258.gif"
                    style={{ maxWidth: "100%" }}
                  />
                </FadeIn>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Section>
        <div className={styles.aboutFlex}>
          <div className={styles.aboutLeft}>
            <FadeIn>
              <p className={styles.aboutP}>
                As a full-service commercial agency, we work closely with our
                clients to define, design and develop advertisements than can be
                used across all platforms.
              </p>
              <AnimatedLink text="About Spark Medium" to="/about" normal />
            </FadeIn>
          </div>
          <div className={styles.aboutRight}>
            <div className={styles.aboutRightContainer}>
              <FadeIn>
                <div className={styles.aboutSpan}>
                  <CountUp end={20} />
                </div>
                <span>Animators and Designers</span>
              </FadeIn>
            </div>
            <div>
              <FadeIn>
                <div className={styles.aboutSpan}>
                  <CountUp end={6} />
                </div>
                <span>years in business</span>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className={styles.sectionHeading}>Our Work</h2>
        <div>
          <Projects max={4} />
          <AnimatedLink text="View more work" to="/work" />
        </div>
      </Section>

      <Section>
        <h2
          className={styles.sectionHeading}
          style={{ textAlign: "center" }}
        >{`Trusted by`}</h2>
        <Companies max={12} xs={6} sm={4} md={3} lg={3} />
      </Section>
    </Layout>
  )
}

export default IndexPage

// background: `url(/static/header-bg.svg) no-repeat center center`,
// backgroundSize: "cover",
