import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "src/styles/Forgot.module.css";
import logo from "src/assets/images/Tickitz.png";
import Button from "components/Button";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import authAction from "src/redux/actions/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HidePassword from "components/HidePassword";

const Confirm = () => {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const [notSimiliar, setNotSimilar] = useState(false);
  const dispatch = useDispatch();
  const [body, setBody] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [showPassConf, setShowPassConf] = useState(false);

  const handleHidePwd = () => {
    setShowPass(!showPass);
  };
  const handleHidePwdConf = () => {
    setShowPassConf(!showPassConf);
  };

  const confirmSuccess = () => {
    toast.success("Your password successfully reset, Please Login!");
    router.push("/auth/login");
  };

  const confirmDenied = () =>
    toast.error(
      auth.err === undefined
        ? "Please complete your new password form"
        : `${auth.err}`
    );

  const changeHandler = (e) => {
    e.preventDefault();
    setBody({
      ...body,
      [e.target.name]: e.target.value,
      pincode: router.query.pin,
    });
  };

  const confirmHandler = (e) => {
    e.preventDefault();
    console.log(body);
    if (body.newPassword !== body.confirmPassword) return setNotSimilar(true);
    dispatch(authAction.confirmThunk(body, confirmSuccess, confirmDenied));
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
              <p>1</p>
              <p>Fill your additional details</p>
            </li>
            <li className={styles["content-list"]}>
              <p>2</p>
              <p>Active your email</p>
            </li>
            <li className={styles["content-list"]}>
              <p className={styles["first-content-list"]}>3</p>
              <p>Enter your new password</p>
            </li>
            <li className={styles["content-list"]}>
              <p>4</p>
              <p>Done</p>
            </li>
          </ul>
        </section>
        <section className={styles["right-side"]}>
          <h3>Set your new password</h3>
          <form className={styles["form"]} onSubmit={confirmHandler}>
            <span className={styles["input"]}>
              <label className={styles["label-email"]}>Pin Code</label>
              <input
                type="text"
                name="pincode"
                disabled
                value={router.query.pin}
                className={styles["email"]}
                placeholder="Input your pin code"
                onChange={changeHandler}
              />
            </span>
            <span className={styles["input"]}>
              <label className={styles["label-password"]}>New Password</label>
              <input
                type={showPass ? "text" : "password"}
                name="newPassword"
                className={styles["password"]}
                placeholder="Input your new password"
                onChange={changeHandler}
                onClick={() => setNotSimilar(false)}
              />
              <span
                onClick={handleHidePwd}
                className={styles["view-icon-section"]}
              >
                <HidePassword state={showPass} />
              </span>
            </span>
            <span className={styles["input"]}>
              <label className={styles["label-password"]}>
                Confirm New Password
              </label>
              <input
                type={showPassConf ? "text" : "password"}
                name="confirmPassword"
                className={styles["password"]}
                placeholder="Confirm your new password"
                onChange={changeHandler}
                onClick={() => setNotSimilar(false)}
              />
              <span
                onClick={handleHidePwdConf}
                className={styles["view-icon-section"]}
              >
                <HidePassword state={showPassConf} />
              </span>
            </span>
            <p
              className={`${styles["password-notif"]} ${
                notSimiliar ? styles["show"] : styles["hide"]
              }`}
            >
              Retyped password didn&apos;t match!
            </p>

            <Button initBtnSubmit={`Set Password`} />
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

export default Confirm;
