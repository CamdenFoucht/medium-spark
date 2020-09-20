import React from "react"
import { Row, Col } from "react-flexbox-grid"
import { Fade } from "react-awesome-reveal"
import CountUp from "react-countup"
import FadeIn from "react-fade-in"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Companies from "../components/companies/companies"
import Testimonials from "../components/testimonials/testimonial"
import { SectionHeading } from "../components/UI/headers"
import Awards from "../components/awards/awards"
import Section from "../components/UI/section"
import Container from "../components/container"

import styles from "./about.module.css"

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <FadeIn>
      <header className={styles.header}>
        <Container>
          <h1 className={styles.headerH1}>
            {`We are Spark Medium`}
            <span className="primary">.</span>
          </h1>
          <h1 className={styles.headerP}>
            We design, build and ship world-class digital advertisements for
            forward-thinking brands.
          </h1>
          <div>
            <Row>
              <Col xs={6} sm={4} md={2} lg={4}>
                <span className={styles.span}>
                  <CountUp end={130} />+
                </span>
                <p className={styles.p}>Advertisements Made</p>
              </Col>

              <Col xs={6} sm={4} md={2} lg={4}>
                <span className={styles.span}>
                  <CountUp end={50} />+
                </span>
                <p className={styles.p}>Awards & Recognition</p>
              </Col>
              <Col xs={6} sm={4} md={2} lg={4}>
                <span className={styles.span}>
                  <CountUp end={11} />
                </span>
                <p className={styles.p}>Designers & Animators</p>
              </Col>
              <Col xs={6} sm={4} md={2} lg={4}>
                <span className={styles.span}>
                  <CountUp end={6} />
                </span>
                <p className={styles.p}>Years in Business</p>
              </Col>
              <Col xs={6} sm={4} md={2} lg={4} center="xs">
                <span className={styles.span}>
                  <CountUp end={100} />%
                </span>
                <p className={styles.p}>In-house & Independent</p>
              </Col>
              <Col xs={6} sm={4} md={4} lg={4}>
                <span className={styles.span}>US</span>
                <p className={styles.p}>Working globally, proudly American</p>
              </Col>
            </Row>
          </div>
        </Container>
      </header>
    </FadeIn>
    <Section id="what we do">
      <SectionHeading>What we create</SectionHeading>
      <Row>
        <Col xs={12} md={6}>
          <Fade direction="up" triggerOnce>
            <h4 className={styles.h4}>Stunning commericials</h4>
            <p className={styles.text}>
              We are a fun-loving design studio based in Amsterdam and love
              walking the thin line between stunning and usable products.
              Together with our clients we design and build digital products
              like apps for web & mobile, illustrations and more.
            </p>
            <p className={styles.text}>
              We are a fun-loving design studio based in Amsterdam and love
              walking the thin line between stunning and usable products.
              Together with our clients we design and build digital products
              like apps for web & mobile, illustrations and more.
            </p>
          </Fade>
        </Col>
        <Col xs={12} md={6}>
          <Fade direction="up" triggerOnce delay={75}>
            <h4 className={styles.h4}>From idea to launch</h4>
            <p className={styles.text}>
              Whether you have a new startup or an established business; we help
              you build your product. With your input we turn a rough idea into
              a polished product. At Yummygum, we master a swift, smooth and fun
              road to the best results.
            </p>
            <p className={styles.text}>
              Whether you have a new startup or an established business; we help
              you build your product. With your input we turn a rough idea into
              a polished product. At Yummygum, we master a swift, smooth and fun
              road to the best results.
            </p>
          </Fade>
        </Col>
      </Row>
    </Section>

    <Section id="clients">
      <SectionHeading>Clients & Partners</SectionHeading>
      <Companies text cols={4} xs={12} sm={6} md={3} lg={3} />
    </Section>
    <Section background="#15141a">
      <SectionHeading color="#fff">What they say</SectionHeading>
      <Testimonials />
    </Section>
    <Section>
      <SectionHeading>Awards & Recognition</SectionHeading>
      <Awards />
    </Section>
  </Layout>
)

export default AboutPage
