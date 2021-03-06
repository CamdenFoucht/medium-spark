import React, { useState } from "react"

import Grid from "../grid/grid"
import Project from "./Project"
import VideoPlayer from "./videoPlayer"

const Projects = props => {
  const [url, setUrl] = useState("")

  const openPlayer = src => {
    setUrl(src)
  }

  let projects = [
    {
      title: "Coca-Cola",
      poster:
        "https://s3.amazonaws.com/clay.global/static/img/projects/coca-cola.jpg",
      src:
        "https://s3.amazonaws.com/clay.global/static/img/projects/coca-cola.mp4",
      delay: 0,
      isOdd: false,
    },
    {
      title: "Earnin",
      poster:
        "https://s3.amazonaws.com/clay.global/static/img/projects/earnin.jpg",
      src:
        "https://s3.amazonaws.com/clay.global/static/img/projects/earnin.mp4",
      delay: 50,
      isOdd: true,
    },
    {
      title: "Facebook",
      poster:
        "https://s3.amazonaws.com/clay.global/static/img/projects/facebook.jpg",
      src:
        "https://s3.amazonaws.com/clay.global/static/img/projects/facebook.mp4",
      delay: 0,
      isOdd: false,
    },
    {
      title: "Google",
      poster:
        "https://s3.amazonaws.com/clay.global/static/img/projects/google.jpg",
      src:
        "https://s3.amazonaws.com/clay.global/static/img/projects/google.mp4",
      delay: 50,
      isOdd: true,
    },
    {
      title: "Coca-Cola",
      poster:
        "https://s3.amazonaws.com/clay.global/static/img/projects/coca-cola.jpg",
      src:
        "https://s3.amazonaws.com/clay.global/static/img/projects/coca-cola.mp4",
      delay: 0,
      isOdd: false,
    },
    {
      title: "Earnin",
      poster:
        "https://s3.amazonaws.com/clay.global/static/img/projects/earnin.jpg",
      src:
        "https://s3.amazonaws.com/clay.global/static/img/projects/earnin.mp4",
      delay: 50,
      isOdd: true,
    },
  ]

  if (props.max) {
    projects = projects.slice(0, props.max)
  }

  let items = projects.map((el, index) => (
    <Project onClick={openPlayer} {...el} />
  ))

  return (
    <>
      <Grid cols="2" style={{ gridColumnGap: "12rem" }}>
        {items}
      </Grid>
      <VideoPlayer src={url} onClose={() => setUrl("")} />
    </>
  )
}

export default Projects
