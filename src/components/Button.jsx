import React from 'react'

import styles from "../styles/Button.module.css"

const Button = ({initBtnSubmit}) => {
  return (
    <>
      <button className={styles["btn-submit"]}>{initBtnSubmit}</button>
    </>
  );
}

export default Button