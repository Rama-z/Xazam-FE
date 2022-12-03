import React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import styles from "../styles/HidePassword.module.css"

const HidePassword = ({state}) => {
  return (
    <>
      {state ? (
        <ViewIcon className={styles["view-icon"]} />
      ) : (
        <ViewOffIcon className={styles["view-icon"]} />
      )}
    </>
  );
};

export default HidePassword;
