import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Button from "../components/UI/Buttons"
import { useForm } from "react-hook-form"

import styles from "./contact.module.css"
import FadeIn from "react-fade-in"

const ContactPage = () => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => console.log(values)
  return (
    <Layout>
      <SEO title="contact" />
      <div style={{ padding: "9rem 0 0 0" }}>
        <FadeIn>
          <Container>
            <div
              className={styles.container}
              style={{
                background:
                  "url(https://www.invisionapp.com/assets/img/team/contact_bg.png?1576862309) center 200px no-repeat",
              }}
            >
              <div className={styles.wrapper}>
                <h1 className={styles.h1}>Get In Touch</h1>
                <p className={styles.p}>
                  {`We're here for you, and we're wearing our thinking caps. Have a question about our services? Or just want to send us a message?
              Feel free to use the contact form, or email us at
              `}
                  <a href="#">mail@mediumspark.com</a>
                </p>
                <div className={styles.contactForm}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.group}>
                      <div className={styles.labelRow}>
                        <label className={styles.label}>Name</label>
                        <span className={styles.error}>
                          {errors.name && errors.name.message}
                        </span>
                      </div>
                      <input
                        className={styles.input}
                        type="text"
                        name="name"
                        ref={register({
                          required: "Required",
                          minLength: 6,
                          maxLength: 50,
                        })}
                        style={{
                          borderColor: errors.name ? "#bf1515" : "#e1e2eb",
                        }}
                      />
                    </div>
                    <div className={styles.group}>
                      <div className={styles.labelRow}>
                        <label className={styles.label}>Email</label>
                        <span className={styles.error}>
                          {errors.email && errors.email.message}
                        </span>
                      </div>
                      <input
                        className={styles.input}
                        type="email"
                        name="email"
                        style={{
                          borderColor: errors.email ? "#bf1515" : "#e1e2eb",
                        }}
                        ref={register({
                          required: "Required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                    </div>
                    <div className={styles.group}>
                      <div className={styles.labelRow}>
                        <label className={styles.label}>Message</label>
                        <span className={styles.error}>
                          {errors.message && errors.message.message}
                        </span>
                      </div>
                      <textarea
                        className={styles.textarea}
                        type="text"
                        name="message"
                        ref={register({
                          required: "Required",
                          minLength: 5,
                        })}
                        style={{
                          borderColor: errors.message ? "#bf1515" : "#e1e2eb",
                        }}
                      />
                    </div>
                    <Button type="submit" style={{ width: "100%" }}>
                      Send Message
                    </Button>
                  </form>

                  <h4 className={styles.contactInfo}>Contact Information</h4>
                  <div className={styles.blurb}>
                    <p className={styles.address}>
                      555 W 5th St, 35th Floor
                      <br /> Los Angeles, CA 90013, US
                    </p>
                  </div>
                  <div className={styles.blurb}>
                    <a className={styles.contactLink} href="#">
                      222 222 222
                    </a>
                  </div>
                  <div className={styles.blurb}>
                    <a className={styles.contactLink} href="#">
                      sparkmedium@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </FadeIn>
      </div>
    </Layout>
  )
}

export default ContactPage
