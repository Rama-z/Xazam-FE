import React, { useState } from "react";
import Axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "src/styles/Register.module.css";
import logo from "src/assets/Images/Tickitz.png";
import googleIcon from "src/assets/Icons/google.png";
import facebook from "src/assets/Icons/facebook.png";
import Button from "src/components/Button";
import { useDispatch, useSelector } from "react-redux";
import authAction from "src/redux/actions/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [body, setBody] = useState({});

  const changeHandler = (e) =>
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  const registerSucces = () => {
    toast.success("Register Success! Please Check Your Email");
    router.push("/auth/login");
  };

  const registerDenied = () => {
    toast.error(`Register Failed, ${auth.err}`);
  };

  const submithandler = (e) => {
    e.preventDefault();
    dispatch(authAction.registerThunk(body, registerSucces, registerDenied));
  };

  return (
    <>
      <main className={styles["main"]}>
        <section className={styles["left-side"]}>
          <span className={styles["logo"]}>
            <Image src={logo} alt={`tickitz`} className={styles["img-logo"]} />
          </span>
          <span className={styles["desc"]}>
            <h3 className={styles["title"]}>Lets build your account</h3>
            <p>
              To be a loyal moviegoer and access all of features, your details
              are required.
            </p>
          </span>
          <ul className={styles["list"]}>
            <li className={styles["content-list"]}>
              <p className={styles["first-content-list"]}>1</p>
              <p>Fill your additional details</p>
            </li>
            <li className={styles["content-list"]}>
              <p>2</p>
              <p>Active your account</p>
            </li>
            <li className={styles["content-list"]}>
              <p>3</p>
              <p>Done</p>
            </li>
          </ul>
        </section>
        <section className={styles["right-side"]}>
          <h3>Fill your additional details</h3>
          <form className={styles["form"]} onSubmit={submithandler}>
            <span className={styles["input"]}>
              <label className={styles["label-name"]}>Firstname</label>
              <input
                type="text"
                name="firstName"
                className={styles["name"]}
                placeholder="Write your firstname"
                onChange={changeHandler}
              />
            </span>
            <span className={styles["input"]}>
              <label className={styles["label-name"]}>Lastname</label>
              <input
                type="text"
                name="lastName"
                className={styles["name"]}
                placeholder="Write your lastname"
                onChange={changeHandler}
              />
            </span>
            <span className={styles["input"]}>
              <label className={styles["label-email"]}>Email</label>
              <input
                type="text"
                name="email"
                className={styles["email"]}
                placeholder="Write your email"
                required
                onChange={changeHandler}
              />
            </span>
            <span className={styles["input"]}>
              <label className={styles["label-password"]}>Password</label>
              <input
                type="text"
                name="password"
                className={styles["password"]}
                placeholder="Write your password"
                required
                onChange={changeHandler}
              />
            </span>
            <span className={styles["input"]}>
              <label className={styles["label-checkbox"]}>
                I aggree to terms & conditions
              </label>
              <input type="checkbox" className={styles["checkbox"]} />
            </span>
            <Button initBtnSubmit={`Join for free Now`} />
          </form>
          <p className={styles["direct-to-login"]}>
            Do you already have an account ?{" "}
            <span onClick={() => router.push("/auth/login")}>Log in</span>
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

export default Register;
