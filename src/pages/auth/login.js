import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

import HidePassword from "../../components/HidePassword";

import styles from "src/styles/Login.module.css";
import logo from "src/assets/images/Tickitz.png";
import googleIcon from "src/assets/Icons/google.png";
import facebook from "src/assets/Icons/facebook.png";
import { useDispatch, useSelector } from "react-redux";
import authAction from "src/redux/actions/auth";
import Button from "src/components/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [body, setbody] = useState({});
  const [showPass, setShowPass] = useState(false);

  const handleHidePwd = () => {
    setShowPass(!showPass);
  };

  const changeHandler = (e) =>
    setbody({
      ...body,
      [e.target.name]: e.target.value,
    });

  const loginSucces = () => {
    toast.success("Login Success! Enjoy the movies");
    router.push("/home");
  };

  const loginDenied = () => {
    toast.error(`Login failed, ${auth.err}`);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authAction.loginThunk(body, loginSucces, loginDenied));
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
              <span
                className={styles["view-icon-section"]}
                onClick={handleHidePwd}
              >
                <HidePassword state={showPass}/>
              </span>
            </span>
            <Button initBtnSubmit={`Sign In`} />
          </form>
          <p className={styles["direct-to-reset"]}>
            Forgot your password ?{" "}
            <span onClick={() => router.push("/auth/forgot")}>Reset now</span>
          </p>
          <p className={styles["or"]}>Or</p>
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
