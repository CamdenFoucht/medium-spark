import React, { useState, useRef } from "react"
import styles from "./Project.module.css"
import Fade from "react-reveal/Fade"
import FadeIn from "react-fade-in"
import Reveal from "react-reveal/Reveal"

const Project = props => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef()

  const enterHandler = () => {
    setIsHovered(true)
  }

  const leaveHandler = () => {
    setIsHovered(false)
  }

  return (
    <Fade bottom delay={props.delay} duration={600}>
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
