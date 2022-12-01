import React from "react";
// import Axios from "axios"
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "../../styles/Login.module.css";
import logo from "../../assets/Images/tickitz.png";
import googleIcon from "../../assets/Icons/google.png";
import facebook from "../../assets/Icons/facebook.png";

const Login = () => {
  const router = useRouter();
  return (
    <>
      <main className={styles["main"]}>
        <section className={styles["left-side"]}>
          <span className={styles["logo"]}>
            <Image src={logo} alt={`tickitz`} className={styles["img-logo"]} />
          </span>
          <h2 className={styles["title"]}>wait, watch, wow!</h2>
        </section>
        <section className={styles["right-side"]}>
          <h3>Sign In</h3>
          <p>
            Sign in with your data that you entered during your registration
          </p>
          <form className={styles["form"]}>
            <span className={styles["input"]}>
              <label className={styles["label-email"]}>Email</label>
              <input
                type="text"
                className={styles["email"]}
                placeholder="Write your email"
              />
            </span>
            <span className={styles["input"]}>
              <label className={styles["label-password"]}>Password</label>
              <input
                type="text"
                className={styles["password"]}
                placeholder="Write your password"
              />
            </span>
            <button className={styles["btn-submit"]}>Sign In</button>
          </form>
          <p className={styles["direct-to-reset"]}>
            Do you already have an account ?{" "}
            <span onClick={() => router.push("/auth/forgot")}>Reset now</span>
          </p>
          <span className={styles["social-btn-section"]}>
            <span className={styles["social-btn"]}>
              <Image
                src={googleIcon}
                alt={``}
                className={styles["social-btn-icon"]}
              />
              <p className={styles["social-btn-title"]}>Google</p>
            </span>
            <span className={styles["social-btn"]}>
              <Image
                src={facebook}
                alt={``}
                className={styles["social-btn-icon"]}
              />
              <p className={styles["social-btn-title"]}>Google</p>
            </span>
          </span>
        </section>
      </main>
    </>
  );
};

export default Login;
