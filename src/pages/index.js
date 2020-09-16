import React from "react"
import { Grid } from "../components/grid"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className={styles.hero}>
      <Container>
        <Grid cols={2} style={{ height: "100%" }}>
          <div
            style={{
              background: "#fff",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p className={styles.headerText}>
              We turn ideas into extraordinary <br />
              digital advertisements and sales
            </p>
          </div>
          <div>
            <video muted playsinline autoPlay loop className={styles.video}>
              <source
                src="https://biteable.com/static-assets/marketing/commercial-hub.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </Grid>
      </Container>
    </div>

    <section>
      <h2>Our Work</h2>
    </section>

    <section>
      <h2>Our Clients</h2>
    </section>
  </Layout>
)

export default IndexPage
