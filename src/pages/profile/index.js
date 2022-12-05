import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/Profile.module.css";
import { useRouter } from "next/router";
import PrivateRoute from "src/helper/privateroute";
import dot from "../../assets/images/dot.png";
import scrl from "../../assets/images/scroll.png";
import eye from "../../assets/images/eye.png";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import profileAction from "src/redux/actions/profile";
import sample from "src/assets/images/avatar.webp";
import Upload from "components/upload/upload";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authAction from "src/redux/actions/auth";

const Profile = () => {
  // TODO: Private route
  PrivateRoute();

  const target = useRef(null);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const token = useSelector((state) => state.auth.userData.token);
  const emailUser = useSelector((state) => state.auth.userData.email);

  const [isCorrect, setIsCorrect] = useState(false);
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isPwdShown1, setIsPwdShown1] = useState(false);
  const [firstName, setFirstName] = useState(
    profile.length > 0 && profile.firstName
  );
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);
  const [phoneNum, setPhoneNum] = useState(profile.notelp);
  const [imageUser, setImageUser] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState("");

  const [disableButton, setDisableButton] = useState(true);
  const [disableButtonPw, setDisableButtonPw] = useState(true);

  const [body, setBody] = useState();

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

  const changePwdHandler = function (e) {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(body);
  }, [body]);

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

  // console.log(body);
  //  console.log(formState);
  useEffect(() => {
    dispatch(profileAction.getProfileThunk(token, setImageUser));
    setEmail(emailUser);
  }, [dispatch, emailUser, token]);

  const changePwdSubmitHandler = () => {};

  const submitHandler = () => {
    if (!body) return;
    setDisableButton(true);
    setDisableButtonPw(true);
    const data = new FormData();
    if (body?.image) {
      data.append("image", body.image);
    }
    if (body?.lastname && body.lastname.length > 0) {
      data.append("lastname", body.lastname);
    }
    if (body?.firstname && body.firstname.length > 0) {
      data.append("image", body.firstname);
    }
    if (body?.notelp && body.notelp.length >= 11) {
      data.append("notelp", body.notelp);
    }
    if (body?.password && body?.new_password && body?.confirm_password) {
      if (body?.new_password !== body?.confirm_password) {
        return toast.error("New Password and Confirm Password Doesn't Match", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
      dispatch(authAction.changeThunk(body, token, success, doesntMatch));
    }
    dispatch(
      profileAction.editProfileThunk(data, token, setImageUser, success, error)
    );
  };

  const success = () => {
    toast.success("Profile Data Updated!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  const error = () => {
    toast.error("Failed Data Updated!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  const doesntMatch = () => {
    toast.error("Old Password Wrong!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  const editProfileSubmit = () => {
    dispatch(profileAction.editProfileThunk(body));
  };

  const changeHandlerInput = (e) => {
    e.preventDefault();
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const changeHandlerInputImage = (e) => {
    const files = e.target.files[0];
    setImage(files);
    setImagePreview(URL.createObjectURL(files));
    setFormState({ ...formState, image: e.target.files[0] });
    setImageUser(e.target.files[0]);
    setBody({
      ...body,
      image: files,
    });
  };

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
                  onChange={(e) => {
                    changeHandlerInputImage(e);
                  }}
                  // img={profile.profile.image ? profile.profile.image : sample}
                  img={
                    imagePreview !== null ? imagePreview : profile.profile.image
                  }
                  name="image"
                  objectFit="cover"
                  width={100}
                  height={100}
                />
              </div>
              <p className={`${styles["name"]}`}>
                {!profile.profile.firstName
                  ? "Your Name is.."
                  : `${profile.profile.firstName} ${profile.profile.lastName}`}
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
                <hr className={` ${styles["hr"]}`} />
                <p className={` ${styles["details"]}`}>Details Information</p>
                <p onClick={handleChange} className={` ${styles["edit"]}`}>
                  ✎ Edit
                </p>
                <form class="row" onSubmit={editProfileSubmit}>
                  <div class="col">
                    <p className={` ${styles["category"]}`}>First Name</p>
                    <input
                      onChange={changeHandlerInput}
                      className={
                        disableButton
                          ? `${styles["input"]}`
                          : `${styles["inputs"]}`
                      }
                      type="text"
                      placeholder={
                        profile.profile.firstName
                          ? profile.profile.firstName
                          : "Input Here..."
                      }
                      name="firstname"
                      disabled={disableButton}
                    />
                    <p className={` ${styles["category"]}`}>E-mail</p>
                    <input
                      onChange={changeHandlerInput}
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
                  </div>
                  <div class="col">
                    <p className={` ${styles["category"]}`}>Last Name</p>
                    <input
                      onChange={changeHandlerInput}
                      value={lastName === null ? "" : lastName}
                      className={
                        disableButton
                          ? `${styles["input"]}`
                          : `${styles["inputs"]}`
                      }
                      type="text"
                      placeholder={
                        profile.profile.lastName
                          ? profile.profile.lastName
                          : "Input Here..."
                      }
                      name="lastname"
                      disabled={disableButton}
                    />
                    <p className={` ${styles["category"]}`}>Phone Number</p>
                    <input
                      onChange={changeHandlerInput}
                      value={phoneNum === null ? "" : phoneNum}
                      className={
                        disableButton
                          ? `${styles["input"]}`
                          : `${styles["inputs"]}`
                      }
                      type="text"
                      placeholder={
                        profile.profile.noTelp
                          ? profile.profile.noTelp
                          : "Input Here..."
                      }
                      name="notelp"
                      disabled={disableButton}
                    />
                  </div>
                </form>
                <p className={` ${styles["privacy"]}`}>Account and Privacy</p>
                <hr className={` ${styles["hr"]}`} />
                <form className="col" onSubmit={changePwdSubmitHandler}>
                  <div className="col">
                    <div>
                      {/* <hr className={` ${styles["hr-2"]}`} /> */}
                      <p className={` ${styles["confirm-pw"]}`}>Old Password</p>
                      <input
                        onChange={changePwdHandler}
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
                  </div>
                  <div className="row">
                    <div className="col">
                      {/* <hr className={` ${styles["hr-1"]}`} /> */}
                      <p className={` ${styles["pass"]}`}>New Password</p>
                      <p
                        onClick={handleChange2}
                        className={` ${styles["edit2"]}`}
                      >
                        ✎ Edit
                      </p>
                      <input
                        onChange={changePwdHandler}
                        className={
                          disableButtonPw
                            ? `${styles["input"]}`
                            : `${styles["inputs"]}`
                        }
                        type={isPwdShown ? "text" : "password"}
                        placeholder="Write your password"
                        name="new_password"
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
                    <div className="col">
                      {/* <hr className={` ${styles["hr-2"]}`} /> */}
                      <p className={` ${styles["confirm-pw"]}`}>
                        Confirm Password
                      </p>
                      <input
                        onChange={changePwdHandler}
                        className={
                          disableButtonPw
                            ? `${styles["input"]}`
                            : `${styles["inputs"]}`
                        }
                        type={isPwdShown1 ? "text" : "password"}
                        placeholder="Confirm your password"
                        name="confirm_password"
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
                  </div>
                </form>
                <button
                  onClick={submitHandler}
                  className={
                    !formState.firstName &&
                    !formState.lastName &&
                    !formState.notelp &&
                    (!formState.pw1 || !formState.password) &&
                    !body
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
                <button
                  className={`btn btn-danger ${styles["btn-changes"]}`}
                  onClick={() => {
                    dispatch(authAction.logoutThunk(token));
                    router.push("/home");
                  }}
                >
                  Logout
                </button>
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
