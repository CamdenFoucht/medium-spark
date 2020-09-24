import React, { useState } from "react"
import FadeIn from "react-fade-in"
import axios from "axios"
import { Link } from "gatsby"
import { useForm } from "react-hook-form"
import { Row, Col } from "react-flexbox-grid"
import Spinner from "react-spinner-material"
import { AiFillHome, AiFillPhone, AiTwotoneMail } from "react-icons/ai"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/UI/section"
import Input from "../components/UI/input/input"
import Textarea from "../components/UI/input/textarea"
import { Button } from "../components/UI/Buttons"

import styles from "./contact.module.css"
import Sent from "../images/sent.svg"

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { handleSubmit, register, errors, reset } = useForm()
  const onSubmit = values => {
    setLoading(true)
    axios
      .post("https://formspree.io/xnqoqnqy", {
        name: values.name,
        message: values.message,
        email: values.email,
        company: values.company,
      })
      .then(res => {
        setSubmitted(true)
        setLoading(false)
        reset()
      })
      .catch(err => {
        setLoading(false)
      })
  }
  return (
    <Layout hideBanner>
      <SEO title="Contact" />
      <Section background="#fff">
        <FadeIn>
          <h1 className={styles.h1}>Get In Touch</h1>
          <p className={styles.p}>
            {`We're here for you, and we're wearing our thinking caps. Have a question about our services? Or just want to send us a message?
        Feel free to use the contact form, or email us at
        `}
            <a href="#">mail@mediumspark.com</a>
          </p>
          <div className={styles.wrapper2}>
            <Row className={styles.row}>
              <Col xs={12} sm={12} md={8} lg={7}>
                <div className={styles.left}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                      name="name"
                      ref={register({
                        required: "Required",
                        minLength: 6,
                        maxLength: 50,
                      })}
                      errors={errors}
                      placeholder="John Doe"
                      type="text"
                    />
                    <Input
                      name="company"
                      ref={register({
                        required: "Required",
                        minLength: 3,
                        maxLength: 50,
                      })}
                      errors={errors}
                      placeholder="Widgets Inc"
                      type="text"
                    />

                    <Input
                      type="email"
                      name="email"
                      errors={errors}
                      ref={register({
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="johndoe@gmail.com"
                    />

                    <Textarea
                      name="message"
                      type="text"
                      errors={errors}
                      ref={register({
                        required: "Required",
                        minLength: 3,
                      })}
                      placeholder="Write us a message"
                    />

                    <Button
                      type="submit"
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {loading ? (
                        <Spinner
                          radius={20}
                          color={"#fff"}
                          stroke={2}
                          visible={true}
                        />
                      ) : (
                        "Send Message"
                      )}
                    </Button>

                    <div
                      className={[
                        styles.blur,
                        submitted ? styles.active : "",
                      ].join(" ")}
                    >
                      <div className={styles.blurBG}></div>
                      <div className={styles.sentSvgContainer}>
                        <Sent />
                      </div>
                      <p className={styles.blurThanks}>Thanks!</p>
                      <p
                        className={styles.blurP}
                      >{`We'll be in touch soon. In the meantime, why not take a look at some of our recent work.`}</p>
                      <Link to="/work" className={styles.blurBtn}>
                        Recent Work
                      </Link>
                    </div>
                  </form>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4} lg={5}>
                <div className={styles.right}>
                  <h4 className={styles.contactInfo}>Contact Information</h4>
                  <p className={styles.conctactP}>
                    {`We're located in the heart of California in down town Los Angeles. Feel free to step into our office anytime, or contact us at any of the links below.`}
                  </p>
                  <div className={styles.blurb}>
                    <p className={styles.address}>
                      <AiFillHome />
                      <a
                        className={styles.contactLink}
                        href={`http://maps.google.com/?q=555 W 5th St, 35th Floor, Los Angeles, CA, 980013`}
                      >
                        555 W 5th St, 35th Floor
                        <br /> Los Angeles, CA 90013, US
                      </a>
                    </p>
                  </div>
                  <div className={styles.blurb}>
                    <a className={styles.contactLink} href="tel:1-222-222-2222">
                      <AiFillPhone />
                      222 222 222
                    </a>
                  </div>
                  <div className={styles.blurb}>
                    <a
                      className={styles.contactLink}
                      href="mailto:sparkmedium@gmail.com"
                    >
                      <AiTwotoneMail />
                      sparkmedium@gmail.com
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </FadeIn>
      </Section>
    </Layout>
  )
}

export default ContactPage
