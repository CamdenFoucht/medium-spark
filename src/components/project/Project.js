import React, { useState, useRef } from "react"
import { Fade } from "react-awesome-reveal"

import styles from "./Project.module.css"

const Project = props => {
  const ref = useRef()

  return (
    <Fade triggerOnce direction="up" delay={props.delay} duration={600}>
      <div
        onClick={() => props.onClick(props.src)}
        className={[styles.workProject, props.isOdd ? styles.isOdd : ""].join(
          " "
        )}
        onMouseEnter={event => {
          ref.current.play()
        }}
        onMouseLeave={event => {
          ref.current.src = props.src
        }}
      >
        <div className={styles.workCard}>
          <video
            ref={ref}
            muted
            loop
            preload
            poster={props.poster}
            src={props.src}
            className={styles.workVideo}
            data-video="0"
          ></video>
        </div>
        <div className={styles.workCompany}>{props.title}</div>
      </div>
    </Fade>
  )
}

export default Project
