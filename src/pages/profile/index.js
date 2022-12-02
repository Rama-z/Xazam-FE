import React, { useEffect, useState } from "react";
import styles from "../profile/profile.module.css";
import { useRouter } from "next/router";
import dot from "../../assets/images/dot.png";
import man from "../../assets/images/man.png";
import star from "../../assets/images/star.png";
import scrl from "../../assets/images/scroll.png";
import eye from "../../assets/images/eye.png";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Profile = () => {
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isPwdShown1, setIsPwdShown1] = useState(false);
  const [formState, setFormState] = useState({
    pw1: "",
    pw2: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: ""

  });
  const router = useRouter();
  const as = () => {
    router.push("/");
  };

  const handleInputChange = function (e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
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
                <Image className={`${styles["man"]}`} src={man} alt="man" />
              </div>
              <p className={`${styles["name"]}`}>Jonas El Rodriguez</p>
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

                <form class="row">
                  <div class="col">
                    <p className={` ${styles["category"]}`}>First Name</p>
                    <input
                    onChange={handleInputChange}
                      className={` ${styles["input"]}`}
                      type="text"
                      placeholder="Jonas"
                      name="firstName"
                    />
                    <p className={` ${styles["category"]}`}>E-mail</p>
                    <input
                    onChange={handleInputChange}
                      className={` ${styles["input"]}`}
                      type="text"
                      placeholder="jonasrodrigu123@gmail.com"
                      name="email"
                    />
                    <p className={` ${styles["privacy"]}`}>
                      Account and Privacy
                    </p>
                    <hr className={` ${styles["hr-1"]}`} />
                    <p className={` ${styles["pass"]}`}>New Password</p>
                    <input
                      onChange={handleInputChange}
                      className={` ${styles["input"]}`}
                      type={isPwdShown ? "text" : "password"}
                      placeholder="Write your password"
                      name="pw1"
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
                    onChange={handleInputChange}
                      className={` ${styles["input"]}`}
                      type="text"
                      placeholder="El Rodriguez"
                      name="lastName"
                    />
                    <p className={` ${styles["category"]}`}>Phone Number</p>
                    <input
                    onChange={handleInputChange}
                      className={` ${styles["input"]}`}
                      type="text"
                      placeholder="081445687121"
                      name="phoneNum"
                    />

                    <hr className={` ${styles["hr-2"]}`} />
                    <p className={` ${styles["confirm-pw"]}`}>
                      Confirm Password
                    </p>
                    <input
                      onChange={handleInputChange}
                      className={` ${styles["input"]}`}
                      // className={}
                      type={isPwdShown1 ? "text" : "password"}
                      placeholder="Confirm your password"
                      name="pw2"
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
                  className={
                    !formState.firstName || !formState.lastName ||  !formState.email || !formState.phoneNum 
                      ? `${styles["btn-changes"]}`
                      : `${styles["btn-change"]}`
                  }
                >
                  Update changes
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
