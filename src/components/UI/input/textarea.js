import React from "react"

import styles from "./input.module.css"

const Textarea = React.forwardRef((props, ref) => {
  return (
    <div className={styles.group}>
      <div className={styles.labelRow}>
        <label for={props.name} className={styles.label}>
          {props.name}
        </label>
        <span className={styles.error}>
          {props.errors.name && props.errors.name.message}
        </span>
      </div>
      <textarea
        id={props.name}
        className={[
          styles.textarea,
          props.errors.name ? styles.inputError : "",
        ].join(" ")}
        type={props.type}
        name={props.name}
        ref={ref}
        placeholder={props.placeholder}
      />
    </div>
  )
})

export default Textarea
