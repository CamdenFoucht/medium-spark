import React, { useState, useEffect } from "react"
import { Fade } from "react-awesome-reveal"

import Container from "../container"

import styles from "./testimonials.module.css"
import LeftArrow from "../../images/left-arrow.svg"
import RightArrow from "../../images/right-arrow.svg"
import Section from "../UI/section"

const Testimonials = props => {
  const [activeQuote, setActiveQuote] = useState(0)

  const quotes = [
    {
      text:
        "Spark Medium functioned as part of our team, helping to crystalize our vision and delivering incredible advertisements in a record time.”",
      name: "Steve jobs",
      position: "CEO, Apple",
    },
    {
      text:
        "“Shortly after launching Spark Medium's commercials, we received nearly double the downloads on the app store.”",
      name: "Bill Gates",
      position: "CEO, Microsoft",
    },
    {
      text:
        "“Since 2016 we’ve been working with Spark Medium, and they have continually impressed us with each advertisement.”",
      name: "Tom Hardy",
      position: "Actor, Batman Origins",
    },
  ]
  const slideHandler = index => {
    if (index >= quotes.length) {
      index = 0
    } else if (index < 0) {
      index = quotes.length - 1
    }
    setActiveQuote(index)
  }

  let arr = quotes.map((el, index) => {
    let items = []

    for (let i = 0; i < el.text.length; i++) {
      let time = Math.floor(Math.random() * 400) + 50
      items.push(
        <span className={styles.char} style={{ transitionDelay: `${time}ms` }}>
          {el.text[i]}
        </span>
      )
    }

    return (
      <div
        aria-label={el.text}
        className={
          activeQuote == index
            ? styles.quoteContainer
            : styles.quoteContainerHidden
        }
      >
        {items}
        <div className={styles.about}>
          <p className={styles.info}>{el.name}</p>
          <p className={styles.info}>{el.position}</p>
        </div>
      </div>
    )
  })

  let dashes = quotes.map((el, index) => {
    return (
      <span
        onClick={() => setActiveQuote(index)}
        className={styles.line}
        style={{ opacity: index == activeQuote ? 0.2 : 1 }}
      ></span>
    )
  })

  return (
    <Fade direction="up" triggerOnce duration={250}>
      <div className={styles.flexContainer}>
        <div className={styles.quoteWrapper}>{arr}</div>
        <div>
          <div className={styles.arrowWrapper}>
            <button
              className={styles.arrowBtn}
              onClick={() => slideHandler(activeQuote - 1)}
            >
              <LeftArrow />
            </button>
            <div className={styles.lineWrapper}>{dashes}</div>
            <button
              className={styles.arrowBtn}
              onClick={() => slideHandler(activeQuote + 1)}
            >
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Testimonials
