import React, { useState } from "react";
import Image from "next/image";

import styles from "src/styles/Forgot.module.css";
import logo from "src/assets/images/tickitz.png";
import Button from "src/components/Button";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import authAction from "src/redux/actions/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgot = () => {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [body, setBody] = useState({
    linkDirect: `http://localhost:3000/auth/confirm`,
  });
  const forgotSuccess = () => {
    toast.success("Please check your email to reset your password");
  };
  const forgotDenied = () => toast.error(`${auth.error}`);
  const changeHandler = (e) => {
    e.preventDefault();
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };
  const forgotHandler = (e) => {
    e.preventDefault();
    console.log(body);
    dispatch(authAction.forgotThunk(body, forgotSuccess, forgotDenied));
  };
  return (
    <>
      <main className={styles["main"]}>
        <section className={styles["left-side"]}>
          <span
            className={styles["logo"]}
            onClick={() => {
              router.push("/");
            }}
          >
            <Image src={logo} alt={`tickitz`} className={styles["img-logo"]} />
          </span>
          <span className={styles["desc"]}>
            <h3 className={styles["title"]}>Lets reset your password</h3>
            <p>
              To be able to use your account again, please complete the
              following steps.
            </p>
          </span>
          <ul className={styles["list"]}>
            <li className={styles["content-list"]}>
              <p className={styles["first-content-list"]}>1</p>
              <p>Fill your additional details</p>
            </li>
            <li className={styles["content-list"]}>
              <p>2</p>
              <p>Active your email</p>
            </li>
            <li className={styles["content-list"]}>
              <p>3</p>
              <p>Enter your new password</p>
            </li>
            <li className={styles["content-list"]}>
              <p>4</p>
              <p>Done</p>
            </li>
          </ul>
        </section>
        <section className={styles["right-side"]}>
          <h3>Fill your complete email</h3>
          <p>we{`'`}ll send a link to your email shortly</p>
          <form className={styles["form"]} onSubmit={forgotHandler}>
            <span className={styles["input"]}>
              <label className={styles["label-email"]}>Email</label>
              <input
                type="text"
                name="email"
                className={styles["email"]}
                placeholder="Write your email"
                onChange={changeHandler}
              />
            </span>
            {/* <span className={styles["input"]}>
              <label className={styles["label-password"]}>Password</label>
              <input
                type="text"
                className={styles["password"]}
                placeholder="Write your password"
              />
            </span> */}
            {/* <span className={styles["input"]}>
              <label className={styles["label-checkbox"]}>
                I aggree to terms & conditions
              </label>
              <input type="checkbox" className={styles["checkbox"]} />
            </span> */}
            <Button initBtnSubmit={`Activate Now`} />
          </form>
          {/* <p className={styles["direct-to-login"]}>
            Do you already have an account ?{" "}
            <span onClick={() => router.push("/auth/login")}>Log in</span>
          </p> */}
          {/* <span className={styles["social-btn-section"]}>
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
            </span> */}
        </section>
      </main>
    </>
  );
};

export default Forgot;
