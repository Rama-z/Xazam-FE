import React, { useState } from "react";
// import Axios from "axios"
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "../../styles/Login.module.css";
import logo from "../../assets/Images/tickitz.png";
import googleIcon from "../../assets/Icons/google.png";
import facebook from "../../assets/Icons/facebook.png";
import { useDispatch } from "react-redux";
import authAction from "../../redux/actions/auth";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [body, setbody] = useState({});
  const [showPass, setShowPass] = useState(false);
  const changeHandler = (e) =>
    setbody({
      ...body,
      [e.target.name]: e.target.value,
    });
  const togglePass = () => setShowPass(!showPass);
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authAction.loginThunk(body));
    console.log(body);
  };

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
          <form className={styles["form"]} onSubmit={loginHandler}>
            <span className={styles["input"]}>
              <label className={styles["label-email"]}>Email</label>
              <input
                type="text"
                name="email"
                className={styles["email"]}
                placeholder="Write your email"
                onChange={changeHandler}
                required
              />
            </span>
            <span className={styles["input"]}>
              <label className={styles["label-password"]}>Password</label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className={styles["password"]}
                placeholder="Write your password"
                onChange={changeHandler}
                required
              />
              <i
                className={`bi ${showPass ? `bi-eye-slash` : `bi-eye`} ${
                  styles["toggle-password"]
                }`}
                onClick={togglePass}
              ></i>
            </span>
            <button className={styles["btn-submit"]} type="submit">
              Sign In
            </button>
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
