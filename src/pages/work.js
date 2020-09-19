import React, { useState } from "react"
import Grid from "../components/grid/grid"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import VideoPlayer from "../components/videoPlayer"

import styles from "./work.module.css"
import Projects from "../components/project/projects"

const WorkPage = () => {
  const [url, setUrl] = useState("")

  const openPlayer = src => {
    setUrl(src)
  }

  return (
    <Layout>
      <SEO title="work" />
      <div style={{ padding: "9rem 0 0 0" }}>
        <Container>
          <h1 className={styles.h1}>Our Work</h1>
          <div>
            <Projects onClick={openPlayer} />
          </div>
        </Container>
      </div>
      <VideoPlayer src={url} onClose={() => setUrl("")} />
    </Layout>
  )
}

export default WorkPage
