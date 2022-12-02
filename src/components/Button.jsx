import React from "react";

import styles from "src/styles/Button.module.css";

const Button = ({ initBtnSubmit }) => {
  return (
    <>
      <button className={styles["btn-submit"]} type="submit">
        {initBtnSubmit}
      </button>
    </>
  );
};

export default Button;
