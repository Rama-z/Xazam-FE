import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/Profile.module.css";
import { useRouter } from "next/router";
import dot from "../../assets/images/dot.png";
import scrl from "../../assets/images/scroll.png";
import eye from "../../assets/images/eye.png";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import profileAction from "src/redux/actions/profile";

import Upload from "components/upload/upload";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const target = useRef(null);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.userData);
  const token = useSelector((state) => state.auth.userData.token);
  const emailUser = useSelector((state) => state.auth.userData.email);

  const [isCorrect, setIsCorrect] = useState(false);
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isPwdShown1, setIsPwdShown1] = useState(false);
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);
  const [phoneNum, setPhoneNum] = useState(profile.notelp);
  const [imageUser, setImageUser] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState("");

  const [disableButton, setDisableButton] = useState(true);
  const [disableButtonPw, setDisableButtonPw] = useState(true);

  const handleChange = () => {
    setDisableButton(!disableButton);
  };
  const handleChange2 = () => {
    setDisableButtonPw(!disableButtonPw);
  };

  const [formState, setFormState] = useState({
    pw1: "",
    pw2: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
  });
  const router = useRouter();
  const nav = () => {
    router.push("/");
  };

  const onImageUpload = (e) => {
    const files = e.target.files[0];
    setImage(files);
    setImagePreview(URL.createObjectURL(files));
    setFormState({ ...formState, image: e.target.files[0] });
    setImageUser(e.target.files[0]);
  };

  const handleInputChange = function (e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChangePw1 = function (e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChangePw2 = function (e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputValue = function (e) {
    setFirstName(e.target.value);
  };
  const handleInputValueEmail = function (e) {
    setEmail(e.target.value);
  };
  const handleInputValuePhoneNum = function (e) {
    setPhoneNum(e.target.value);
  };
  const handleInputValueLastName = function (e) {
    setLastName(e.target.value);
  };

  const data = new FormData();
  if (formState.firstname !== undefined) {
    data.append("firstname", formState.firstname);
  }
  if (formState.lastname !== undefined) {
    data.append("lastname", formState.lastname);
  }
  if (formState.image !== undefined) {
    data.append("image", formState.image);
  }
  if (formState.notelp !== undefined) {
    data.append("notelp", formState.notelp);
  }
  if (formState.pw1 !== undefined && formState.password !== undefined) {
    if (formState.pw1 !== formState.password) {
      console.log(`password salah`);
    } else {
      data.append("password", formState.password);
    }
  }

  useEffect(() => {
    dispatch(
      profileAction.getProfileThunk(
        token,
        setFirstName,
        setPhoneNum,
        setLastName,
        setImageUser
      )
    );
    setEmail(emailUser);
  }, [dispatch, setEmail, emailUser, token]);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div class="container">
          <div className={`row ${styles["row"]}`}>
            <div className={`col-sm-4 ${styles["main-sec"]}`}>
              <div class="row">
                <div class="col">
                  <p className={`${styles["info"]}`}>INFO</p>
                </div>
                <div class="col">
                  <Image className={`${styles["dot"]}`} src={dot} alt="dot" />
                </div>
              </div>
              <div className={`${styles["man-wrap"]}`}>
                <Upload
                  ref={target}
                  onChange={(e) => onImageUpload(e)}
                  img={imagePreview !== null ? imagePreview : imageUser}
                  name="image"
                />
              </div>
              <p className={`${styles["name"]}`}>
                {firstName === null ? "Your Name is.." : firstName}
              </p>
              <p className={`${styles["tag"]}`}>Moviegoers</p>
              <hr />
              <p className={`${styles["point"]}`}>Loyalty Points</p>
              <div className={`${styles["box"]}`}>
                <div className={`row ${styles["card"]}`}>
                  <div class="col-sm-8">
                    <p className={`${styles["tag2"]}`}>Moviegoers</p>
                    <span className={`${styles["num"]}`}>320</span>
                    <span className={`${styles["poi"]}`}>Point</span>
                  </div>
                  <div class="col-sm-4">
                    <div className={`${styles["five-pointed-star"]}`}></div>
                  </div>
                </div>
                <p className={`${styles["master"]}`}>
                  180 points become a master
                </p>
                <Image
                  className={`${styles["scrlll"]}`}
                  width={260}
                  height={20}
                  src={scrl}
                  alt="scroll"
                />
              </div>
            </div>
            <section className={`col-sm-8 ${styles["sect-2"]}`}>
              <div className={` ${styles["sectwrap"]}`}>
                <div class="row">
                  <div class="col">
                    <p className={` ${styles["account"]}`}>Account Settings</p>
                  </div>
                  <div class="col-6">
                    <p className={` ${styles["account"]}`}>Order History</p>
                  </div>
                  <div class="col"></div>
                </div>
                <hr />
                <p className={` ${styles["details"]}`}>Details Information</p>
                <p onClick={handleChange} className={` ${styles["edit"]}`}>
                  ✎ Edit
                </p>

                <form class="row">
                  <div class="col">
                    <p className={` ${styles["category"]}`}>First Name</p>
                    <input
                      onChange={(e) => {
                        handleInputChange(e);
                        handleInputValue(e);
                      }}
                      className={
                        disableButton
                          ? `${styles["input"]}`
                          : `${styles["inputs"]}`
                      }
                      type="text"
                      placeholder="Input Here..."
                      value={firstName === null ? "" : firstName}
                      name="firstname"
                      disabled={disableButton}
                    />
                    <p className={` ${styles["category"]}`}>E-mail</p>
                    <input
                      onChange={(e) => {
                        handleInputChange(e);
                        handleInputValueEmail(e);
                      }}
                      className={
                        disableButton
                          ? `${styles["input"]}`
                          : `${styles["input"]}`
                      }
                      type="text"
                      placeholder={email}
                      name="email"
                      disabled="yes"
                    />
                    <p className={` ${styles["privacy"]}`}>
                      Account and Privacy
                    </p>
                    <hr className={` ${styles["hr-1"]}`} />
                    <p className={` ${styles["pass"]}`}>New Password</p>
                    <p
                      onClick={handleChange2}
                      className={` ${styles["edit2"]}`}
                    >
                      ✎ Edit
                    </p>
                    <input
                      onChange={handleInputChangePw1}
                      className={
                        disableButtonPw
                          ? `${styles["input"]}`
                          : `${styles["inputs"]}`
                      }
                      type={isPwdShown ? "text" : "password"}
                      placeholder="Write your password"
                      name="pw1"
                      disabled={disableButtonPw}
                    />
                    <Image
                      className={` ${styles["eye"]}`}
                      width={20}
                      src={eye}
                      alt="eye"
                      onClick={() => setIsPwdShown(!isPwdShown)}
                    />
                  </div>
                  <div class="col">
                    <p className={` ${styles["category"]}`}>Last Name</p>
                    <input
                      onChange={(e) => {
                        handleInputChange(e);
                        handleInputValueLastName(e);
                      }}
                      value={lastName === null ? "" : lastName}
                      className={
                        disableButton
                          ? `${styles["input"]}`
                          : `${styles["inputs"]}`
                      }
                      type="text"
                      placeholder="Input Here..."
                      name="lastname"
                      disabled={disableButton}
                    />
                    <p className={` ${styles["category"]}`}>Phone Number</p>
                    <input
                      onChange={(e) => {
                        handleInputChange(e);
                        handleInputValuePhoneNum(e);
                      }}
                      value={phoneNum === null ? "" : phoneNum}
                      className={
                        disableButton
                          ? `${styles["input"]}`
                          : `${styles["inputs"]}`
                      }
                      type="text"
                      placeholder="Input Here..."
                      name="notelp"
                      disabled={disableButton}
                    />

                    <hr className={` ${styles["hr-2"]}`} />
                    <p className={` ${styles["confirm-pw"]}`}>
                      Confirm Password
                    </p>
                    <input
                      onChange={handleInputChangePw2}
                      className={
                        disableButtonPw
                          ? `${styles["input"]}`
                          : `${styles["inputs"]}`
                      }
                      type={isPwdShown1 ? "text" : "password"}
                      placeholder="Confirm your password"
                      name="password"
                      disabled={disableButtonPw}
                    />
                    <Image
                      className={` ${styles["eye"]}`}
                      width={20}
                      src={eye}
                      alt="eye"
                      onClick={() => setIsPwdShown1(!isPwdShown1)}
                    />
                  </div>
                </form>
                <button
                  onClick={() => {
                    dispatch(
                      profileAction.editProfileThunk(data, token, formState)
                    );
                    toast.success("Profile Data Updated!", {
                      position: toast.POSITION.TOP_CENTER,
                      autoClose: 2000,
                    });
                  }}
                  className={
                    !formState.firstname &&
                    !formState.lastname &&
                    !formState.notelp &&
                    (!formState.pw1 || !formState.password)
                      ? `${styles["btn-changes"]}`
                      : `${styles["btn-change"]}`
                  }
                >
                  Update changes
                </button>
                <ToastContainer />
                {isCorrect ? (
                  <div className={styles["ui-fail"]}>Password isn`t match!</div>
                ) : (
                  ""
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
