import React, { useState } from "react"
import FadeIn from "react-fade-in"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoPlayer from "../components/videoPlayer"
import Projects from "../components/project/projects"
import Section from "../components/UI/section"

import styles from "./work.module.css"

const WorkPage = () => {
  const [url, setUrl] = useState("")

  const openPlayer = src => {
    setUrl(src)
  }

  return (
    <Layout>
      <SEO title="work" />
      <Section padding="large">
        <FadeIn>
          <h1 className={styles.h1}>Our Work<span className="primary">.</span></h1>
        </FadeIn>
        <div>
          <Projects onClick={openPlayer} />
        </div>
      </Section>
      <VideoPlayer src={url} onClose={() => setUrl("")} />
    </Layout>
  )
}

export default WorkPage
