import React, { useState } from "react"
import Grid from "../components/grid/grid"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

import styles from "./index.module.css"
import { graphql, useStaticQuery } from "gatsby"
import { Button } from "../components/UI/Buttons"
import VideoPlayer from "../components/videoPlayer"
import { Link } from "gatsby"
import Companies from "../components/companies/companies"
import FadeIn from "react-fade-in"
import CountUp from "react-countup"
import Projects from "../components/project/projects"

const IndexPage = () => {
  const [url, setUrl] = useState("")

  const openPlayer = src => {
    setUrl(src)
  }
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header-img.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />

      <div
        className={styles.hero}
        style={{
          background: `url('/static/header-bg.svg') no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Grid
            cols={2}
            style={{
              height: "100%",
              gridColumnGap: "5rem",
            }}
          >
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
                  Advertise your business
                </h1>
              </FadeIn>

              <FadeIn delay={100}>
                <p className={styles.headerText}>
                  We turn products and ideas into extraordinary digital
                  advertisements and sales.
                </p>
              </FadeIn>
              <FadeIn delay={150}>
                <Button style={{ maxWidth: "200px" }}>Start a Project</Button>
              </FadeIn>
            </div>
            <div className={styles.headerImgContainer}>
              <FadeIn>
                <img
                  src="https://static.dribbble.com/users/646089/screenshots/11359567/media/232cbfcf8bf0c30769bf212d7b7e1258.gif"
                  style={{ maxWidth: "100%" }}
                />
                {/*<video muted playsinline autoPlay loop className={styles.video}>
                <source
                  src="https://biteable.com/static-assets/marketing/commercial-hub.mp4"
                  type="video/mp4"
                />
            </video>*/}
              </FadeIn>
            </div>
          </Grid>
        </Container>
      </div>
      <section className={styles.section}>
        <Container>
          <div className={styles.aboutFlex}>
            <FadeIn>
              <div className={styles.aboutLeft}>
                <p className={styles.aboutP}>
                  As a full-service commercial agency, we work closely with our
                  clients to define, design and develop advertisements than can
                  be used across all platforms.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className={styles.aboutRight}>
                <div className={styles.aboutRightContainer}>
                  <div className={styles.aboutSpan}>
                    <CountUp end={20} />
                  </div>
                  <span>Animators and Designers</span>
                </div>
                <div>
                  <div className={styles.aboutSpan}>
                    <CountUp end={6} />
                  </div>
                  <span>years in business</span>
                </div>
              </div>
            </FadeIn>
          </div>
          <Link className={styles.link} to="/about">
            About Spark Medium
          </Link>
        </Container>
      </section>
      <section className={styles.section}>
        <Container>
          <h2 className={styles.sectionHeading}>Our Work</h2>

          <div>
            <Projects max={4} onClick={openPlayer} />
            <Link to="/work" className={styles.link}>
              View more work
            </Link>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <h2 className={styles.sectionHeading}>Trusted by</h2>
          <Companies max={10} cols={5} />

          <div className={styles.linkContainer} style={{ marginTop: "3rem" }}>
            <Link to="/about" className={styles.link}>
              View all clients
            </Link>
          </div>
        </Container>
      </section>

      <VideoPlayer src={url} onClose={() => setUrl("")} />
    </Layout>
  )
}

export default IndexPage
