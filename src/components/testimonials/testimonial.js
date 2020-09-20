import React, { useState, useEffect } from "react"
import { Fade } from "react-awesome-reveal"

import Container from "../container"

import styles from "./testimonials.module.css"
import LeftArrow from "../../images/left-arrow.svg"
import RightArrow from "../../images/right-arrow.svg"

const Testimonials = props => {
  const [activeQuote, setActiveQuote] = useState(0)

  const quotes = [
    {
      text:
        "“Clay functioned as part of our team, helping to crystalize our vision and delivering incredible results in a record time.”",
      name: "Steve jobs",
      position: "CEO, APPLE",
    },
    {
      text:
        "“Shortly after launching Clay’s designs, we were featured in the App Store and on Google Play”",
      name: "Bill Gates",
      position: "CEO, Microsoft",
    },
    {
      text:
        "“Since 2010 we’ve been working with amazing organisations to create meaningful impact and compelling experiences that deliver results.”",
      name: "Tom Hardy",
      position: "Actor, Batman Origins",
    },
  ]

  const nextSlide = () => {
    if (activeQuote + 1 >= quotes.length) {
      setActiveQuote(0)
    } else {
      setActiveQuote(prev => prev + 1)
    }
  }

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
    <div
      style={{ position: "relative", background: "#15141a", padding: "3rem 0" }}
    >
      <Container bottom>
        <Fade direction="up" triggerOnce>
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
      </Container>
    </div>
  )
}

export default Testimonials
