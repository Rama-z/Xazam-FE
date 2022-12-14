import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/orderhistory.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import PrivateRoute from "src/helper/privateroute";

// Import React-Bootsrap
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

// Import Component
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardHistory from "../../components/CardHistory/Card";

// Import Image
import dot from "../../assets/images/dot.png";
import profile from "../../assets/images/jonas.png";
import card from "../../assets/images/card.png";
import star from "../../assets/images/star.png";
import Moviegoers from "../../assets/images/Moviegoers.png";
import points from "../../assets/images/points.png";
import tigaduanol from "../../assets/images/tigaduanol.png";
import loading from "../../assets/images/fill-loading.png";
import nonloading from "../../assets/images/nonloading.png";
import cineone from "../../assets/images/cineone.png";
import chevrondown from "../../assets/images/chevrondown.png";
import ebu from "../../assets/images/ebu.png";
import profileAction from "src/redux/actions/profile";
import transactionAction from "src/redux/actions/transaction";
import sample from "src/assets/images/avatar.webp";
import Title from "src/components/Title";

function Index() {
  // TODO: Private route
  PrivateRoute();
  
  const router = useRouter();

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const token = useSelector((state) => state.auth.userData.token);
  const transactions = useSelector((state) => state.transaction.history);
  console.log(transactions);

  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [imageUser, setImageUser] = useState(profile.image);

  const [movie, setMovie] = useState("");
  const [status, setStatus] = useState("");
  const [studio, setStudio] = useState("");
  const [time, setTime] = useState("");
  // const [image, setImage] = useState("");

  console.log(time);

  useEffect(() => {
    dispatch(transactionAction.getHistoryThunk(token));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(transactionAction.getHistoryThunk(token));
  }, [dispatch, token]);

  return (
    <div>
      <Title title={`Order History`} />
      <Navbar />
      <main className={` container-fluid ${styles["cont-fluid"]}`}>
        <div
          className={`container d-flex justify-content-between ${styles["cont-up"]} `}
        >
          <div className={` card col-md-5 col-lg-3 ${styles["card-profile"]}`}>
            <div className={`container px-4 `}>
              <div className={`d-flex justify-content-between pt-4`}>
                <p className={styles.info}>INFO </p>
                <Image src={dot} alt="/" />
              </div>
              <div
                className={` justify-content-center align-items-center pt-5 ${styles["cont-profile"]}`}
              >
                <Image
                  className={`mb-3 ${styles["cont-profile__image"]}`}
                  src={profile.profile.image ? profile.profile.image : sample}
                  alt="/"
                  width={100}
                  height={100}
                />
                <p className={`mb-0 ${styles.jonas}`}>{firstName}</p>
                <p className={`${styles.MoviegoersText}`}>Moviegoers </p>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="container px-4 pb-5">
              <p className={`${styles.loyalty}`}>Loyalty Points</p>
              <div>
                <Image className={`${styles["card"]}`} src={card} alt="/" />
                <Image className={`${styles["points"]}`} src={points} alt="/" />
                <Image
                  className={`${styles["Moviegoers"]}`}
                  src={Moviegoers}
                  alt="/"
                />
                <Image className={`${styles["star"]}`} src={star} alt="/" />
                <Image
                  className={`${styles["tigaduanol"]}`}
                  src={tigaduanol}
                  alt="/"
                />
              </div>
              <p className={`${styles.satulapan}`}>
                180 points become a master
              </p>
              <div className={`${styles.imgloads}`}>
                <Image
                  className={`${styles["non-loadings"]}`}
                  src={nonloading}
                  alt="/"
                />
                <Image
                  className={`${styles["loadings"]}`}
                  src={loading}
                  alt="/"
                />
              </div>
            </div>
          </div>
          <div className={`d-flex col-md-6 col-lg-8 ${styles.contRight} `}>
            <div
              className={` card  d-flex justify-content-center ${styles["bar"]}`}
            >
              <div
                className={` d-flex gap-5 ps-md-5 ps-lg-5 ${styles["nav-account-set"]}`}
              >
                <p
                  className={`mb-0 ${styles.account} ${styles.cursor}`}
                  onClick={() => router.push("/profile")}
                >
                  Account Settings{" "}
                </p>
                <p className={`mb-0 ${styles.order} ${styles.cursor}`}>
                  Order History{" "}
                </p>
              </div>
            </div>
            {/* <CardHistory date={time} /> */}

            <div className="container">
              {transactions?.length > 0 ? (
                transactions.map((data, index) => {
                  const weekday = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ];
                  console.log(data);
                  let month = "";
                  const DD = data.date_transaction?.split("/")[0];
                  const MM = data.date_transaction?.split("/")[1];
                  const YY = data.date_transaction?.split("/")[2];
                  const d = new Date(data.date_transaction);
                  let day = weekday[d.getDay()];
                  if (MM === "1") month = "January";
                  if (MM === "2") month = "February";
                  if (MM === "3") month = "March";
                  if (MM === "4") month = "April";
                  if (MM === "5") month = "Mei";
                  if (MM === "6") month = "June";
                  if (MM === "7") month = "July";
                  if (MM === "8") month = "Agustus";
                  if (MM === "9") month = "September";
                  if (MM === "10") month = "October";
                  if (MM === "11") month = "November";
                  if (MM === "12") month = "December";
                  let sendDate = `${day}, ${DD} ${month} ${YY} - ${data.time_transaction} WIB `;
                  return (
                    <CardHistory
                      key={index}
                      movie={data.name}
                      status={data.status}
                      studio={data.studio}
                      time={sendDate}
                      id={data.id}
                    />
                  );
                })
              ) : (
                <p> Loading</p>
              )}
            </div>

            {/* <div className={`card d-flex pt-4 justify-content-center ${styles["hist"]}`}>
              <div className={` d-flex px-5 ${styles["history-ticket"]}`}>
                <p className={`mb-0 ${styles.date}`}>Tuesday, 07 July 2020 - 04:30pm </p>
                <div className={`d-flex justify-content-between ${styles.div1}`}>
                  <p className={`mb-0 ${styles.homecoming}`}>Spider-Man: Homecoming </p>
                  <Image className={`${styles.logo1}`} src={cineone} alt="/" />
                </div>
              </div>
              <hr />
              <div className={`container d-flex justify-content-between ${styles.collapse}`}>
                <div className={` card ${styles.ticketz} ${styles.cursor} `}>Ticket in active</div>
                <div className={` ${styles.cursor}`} aria-controls="example-collapse-text" aria-expanded={open}>
                  <div className="d-flex gap-3 align-items-center">
                    <p className={` mb-0 ${styles.cursor}`} onClick={() => router.push("/ticketresult")}>
                      Show Ticket &nbsp; &#8250;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`card d-flex pt-4 justify-content-center ${styles["hist"]}`}>
              <div className={` d-flex px-5 ${styles["history-ticket"]}`}>
                <p className={`mb-0 ${styles.date}`}>Monday, 14 June 2020 - 02:00pm </p>
                <div className={`d-flex justify-content-between ${styles.div1}`}>
                  <p className={`mb-0 ${styles.homecoming}`}>Avengers: End Game </p>
                  <Image className={`${styles.logo}`} src={ebu} alt="/" />
                </div>
              </div>
              <hr />
              <div className={`container d-flex justify-content-between ${styles.collapse}`}>
                <div className={` card ${styles.ticketz} ${styles.cursor} ${styles.used} `}>Ticket used</div>
                <div className={` ${styles.cursor}`} aria-controls="example-collapse-text1" aria-expanded={open}>
                  <div className="d-flex gap-3 align-items-center">
                    <p className="mb-0" onClick={() => router.push("/ticketresult")}>
                      Show Ticket &nbsp; &#8250;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`card d-flex pt-4 justify-content-center ${styles["hist"]}`}>
              <div className={` d-flex px-5 ${styles["history-ticket"]}`}>
                <p className={`mb-0 ${styles.date}`}>Monday, 10 March 2020 - 04:00pm </p>
                <div className={`d-flex justify-content-between ${styles.div1}`}>
                  <p className={`mb-0 ${styles.homecoming} `}>Thor: Ragnarok</p>
                  <Image className={`${styles.logo}`} src={ebu} alt="/" />
                </div>
              </div>
              <hr />
              <div className={`container d-flex justify-content-between ${styles.collapse}`}>
                <div className={` card ${styles.ticketz} ${styles.cursor} ${styles.used}`}>Ticket used</div>
                <div className={` ${styles.cursor}`} aria-controls="example-collapse-text" aria-expanded={open}>
                  <div className="d-flex gap-3 align-items-center">
                    <p className="mb-0" onClick={() => router.push("/ticketresult")}>
                      Show Ticket &nbsp; &#8250;
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
