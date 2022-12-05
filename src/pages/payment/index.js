import React, { useEffect, useState } from "react";
import styles from "../payment/payment.module.css";
import { useRouter } from "next/router";
import warn from "../../assets/images/warn.png";
import pay1 from "../../assets/images/bca.png";
import pay2 from "../../assets/images/bri.png";
import pay3 from "../../assets/images/Gpay.png";
import pay4 from "../../assets/images/paypal.png";
import pay5 from "../../assets/images/gopay.png";
import pay6 from "../../assets/images/dana.png";
import pay7 from "../../assets/images/visa.png";
import pay8 from "../../assets/images/ovo.png";
import Image from "next/image";
import BasicExample from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import PrivateRoute from "src/helper/privateroute";

const Payment = () => {
  const movies = useSelector((state) => state.movie);
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  PrivateRoute();
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isPwdShown1, setIsPwdShown1] = useState(false);
  const [formState, setFormState] = useState({
    pw1: "",
    pw2: "",
  });

  const handleInputChange = function (e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const router = useRouter();
  const as = () => {
    router.push("/");
  };

  return (
    <>
      <BasicExample />
      <main className={styles.main}>
        <div class="container">
          <div className={`row ${styles["row"]}`}>
            <div className={`col-sm-8 ${styles["main-sec"]}`}>
              <div class="row">
                <div class="col">
                  {" "}
                  <p className={` ${styles["list-cat"]}`}>Date & time</p>{" "}
                </div>
                <div class="col">
                  <p className={` ${styles["content-cat"]}`}>
                    Tuesday, 07 July 2020 at 02:00pm
                  </p>
                </div>
                <hr />
                <div class="col">
                  {" "}
                  <p className={` ${styles["list-cat"]}`}>Movie title</p>{" "}
                </div>
                <div class="col">
                  <p className={` ${styles["content-cat"]}`}>
                    {movies.movieDetail.name}
                  </p>
                </div>
                <hr />
                <div class="col">
                  {" "}
                  <p className={` ${styles["list-cat"]}`}>Cinema name</p>{" "}
                </div>
                <div class="col">
                  <p className={` ${styles["content-cat"]}`}>
                    {movies.transfer_data.studio}
                  </p>
                </div>
                <hr />
                <div class="col">
                  {" "}
                  <p className={` ${styles["list-cat"]}`}>
                    Number of tickets
                  </p>{" "}
                </div>
                <div class="col">
                  <p className={` ${styles["content-cat"]}`}>
                    {movies.transfer_data.ticket_count} pieces
                  </p>
                </div>
                <hr />
                <div class="col">
                  {" "}
                  <p className={` ${styles["list-cat"]}`}>Total payment</p>{" "}
                </div>
                <div class="col">
                  <p className={` ${styles["content-cat"]}`}>
                    ${movies.transfer_data.total_price}
                  </p>
                </div>
              </div>
            </div>
            <section className={`col-sm-4 ${styles["sect-2"]}`}>
              <div className={` ${styles["sectwrap"]}`}>
                <div class="row">
                  <div class="col">
                    <p className={` ${styles["category"]}`}>Full Name</p>
                    <input
                      className={` ${styles["input"]}`}
                      type="text"
                      placeholder={`${profile.profile.firstName} ${profile.profile.lastName}`}
                    />
                    <p className={` ${styles["category"]}`}>E-mail</p>
                    <input
                      className={` ${styles["input"]}`}
                      type="text"
                      placeholder={auth.userData.email}
                    />
                    <p className={` ${styles["category"]}`}>Phone Number</p>
                    <input
                      className={` ${styles["input"]}`}
                      type="text"
                      placeholder={profile.profile.noTelp}
                    />
                  </div>
                </div>
                <div className={` ${styles["fill-wrap"]}`}>
                  <Image
                    className={` ${styles["warn"]}`}
                    src={warn}
                    alt="warning"
                  />
                  <p className={` ${styles["fill"]}`}>
                    Fill your data correctly.
                  </p>
                </div>
              </div>
            </section>

            <div className={` ${styles["sectwrap2"]}`}>
              <div className={` ${styles["pay-wrap"]}`}>
                <div class="row">
                  <div class="col">
                    <Image
                      className={` ${styles["paymethod"]}`}
                      src={pay1}
                      alt="payment"
                    />
                  </div>
                  <div class="col">
                    <Image
                      className={` ${styles["paymethod"]}`}
                      src={pay2}
                      alt="payment"
                    />
                  </div>
                  <div class="col">
                    <Image
                      className={` ${styles["paymethod"]}`}
                      src={pay3}
                      alt="payment"
                    />
                  </div>
                  <div class="col">
                    <Image
                      className={` ${styles["paymethod"]}`}
                      src={pay4}
                      alt="payment"
                    />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col">
                    <Image
                      className={` ${styles["paymethod"]}`}
                      src={pay5}
                      alt="payment"
                    />
                  </div>
                  <div class="col">
                    <Image
                      className={` ${styles["paymethod"]}`}
                      src={pay6}
                      alt="payment"
                    />
                  </div>
                  <div class="col">
                    <Image
                      className={` ${styles["paymethod"]}`}
                      src={pay7}
                      alt="payment"
                    />
                  </div>
                  <div class="col">
                    <Image
                      className={` ${styles["paymethod"]}`}
                      src={pay8}
                      alt="payment"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`row justify-content-sm-center ${styles["dash-wrap"]}`}
              >
                <div className={` col-sm-2 ${styles["dash1"]}`}>
                  <hr className={` ${styles["hr"]}`} />
                </div>
                <div className={`col-sm-auto ${styles["or"]}`}>or</div>
                <div className={`col-sm-2 ${styles["dash2"]}`}>
                  <hr className={` ${styles["hr"]}`} />
                </div>
              </div>
              <p className={` ${styles["cash"]}`}>
                Pay via cash.{" "}
                <span className={` ${styles["see"]}`}>See how it work</span>{" "}
              </p>
            </div>
            <button className={` ${styles["btn-prev"]}`}>Previous step</button>
            <button className={` ${styles["btn-pay"]}`}>Pay your order</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Payment;
