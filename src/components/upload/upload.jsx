import React, { useEffect, useRef, useState } from "react";
import styles from "../upload/upload.module.css";
import Image from "next/image";

const Upload = ({ img, ...rest }) => {
  return (
    <div className={`${styles["upload"]}`}>
      {img && (
        <Image className={`${styles["img-preview"]}`} src={img} alt="preview" />
      )}{" "}
      <br />
      <label for="file-upload" className={`${styles["custom-file-upload"]}`}>
        <i className={`${styles["theButton"]}`}>✎</i>
      </label>
      <input
        name="image"
        className={`${styles["upload-button"]}`}
        type="file"
        id="file-upload"
        {...rest}
      />
    </div>
  );
};

export default Upload;
