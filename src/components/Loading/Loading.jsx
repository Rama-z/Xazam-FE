import React from "react";
import styles from "components/Loading/Loading.module.css";

function Loading() {
  return (
    <div className={`${styles["lds-spinner"]} ${styles["pos-loader"]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
