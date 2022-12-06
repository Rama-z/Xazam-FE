import React, { useEffect, useState } from "react";
import styles from "../../styles/TicketResult.module.css";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import tickitz from "../../assets/images/Picture3.png";
import tickitzs from "../../assets/images/Picture4.png";
import down from "../../assets/images/downloads.png";
import print from "../../assets/images/print.png";
import barcode2 from "../../assets/images/barcode2.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import ticketAction from "src/redux/actions/ticket";

const TicketResult = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userData.token);
  const ticket = useSelector((state) => state.ticket.ticket);
  const [title, setTitle] = useState(ticket.title_movie);
  const [studio, setStudio] = useState(ticket.studio);
  const [ticketCount, setTicketCount] = useState(ticket.ticket_count);
  const [seat, setSeat] = useState(ticket.seats);
  const [price, setPrice] = useState(ticket.price);
  const [date, setDate] = useState(ticket.date);
  const [month, setMonth] = useState(ticket.month);
  const [time, setTime] = useState(ticket.time);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  useEffect(() => {
    dispatch(ticketAction.getTicketThunk(token));
  }, [dispatch, token]);

  return (
    <>
      <Navbar />
      <Container>
        <main className={`${styles["main"]}`}>
          <div className={`${styles["sub-main"]}`}>
            <section className={`${styles["sec"]}`}>
              <p className={`${styles["proof"]}`}>Proof of Payment</p>
              <aside className={`${styles["aside"]}`}>
                <div class="row">
                  <div className={`col-sm ${styles["img-wrap"]}`}>
                    <Image
                      className={`${styles["img"]}`}
                      src={tickitz}
                      alt="Tickitz"
                    />
                  </div>
                  <div className={`col-sm-6 ${styles["admit"]}`}>Admit One</div>
                  <span className={`dot ${styles["dot"]}`}></span>
                  <hr className={`${styles["new1"]}`} />
                  <div className={`col-sm ${styles["img-wrap2"]}`}>
                    <Image
                      className={`${styles["img"]}`}
                      src={tickitz}
                      alt="Tickitz"
                    />
                  </div>
                </div>
              </aside>
              <section className={`${styles["main-con"]}`}>
                <div className={`row ${styles["main-row"]}`}>
                  <div className={`col-sm-8 ${styles["sub-row8"]}`}>
                    <p className={`${styles["category-movie"]}`}>Movie</p>
                    <p className={`${styles["content"]}`}>
                      {title}
                      {/* Spider-Man: Homecoming */}
                    </p>
                    <div class="row">
                      <div className={`col ${styles["col-1"]}`}>
                        <p className={`${styles["category"]}`}>Date</p>
                        <p className={`${styles["content2"]}`}>
                          {/* 07 July */}
                          {date}
                        </p>
                        <p className={`${styles["category"]}`}>Count</p>
                        <p className={`${styles["content2"]}`}>
                          {/* 3 pieces */}
                          {ticketCount + ` pcs`}
                        </p>
                      </div>
                      <div className={`col-sm-5 ${styles["col-2"]}`}>
                        <p className={`${styles["category"]}`}>Time</p>
                        <p className={`${styles["content2"]}`}>
                          {/* 02:00pm */}
                          {time}
                        </p>
                        <p className={`${styles["category"]}`}>Seats</p>
                        <p className={`${styles["content2"]}`}>
                          {/* C4, C5, C6 */}
                          {seat}
                        </p>
                      </div>
                      <div className={`col ${styles["col-3"]}`}>
                        <p className={`${styles["category-cat"]}`}>Studio</p>
                        <p className={`${styles["contentpg"]}`}>{studio}</p>
                        <p className={`${styles["category-price"]}`}>Price</p>
                        <p className={`${styles["price"]}`}>
                          {rupiah(Number(price))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <Image
                      className={`${styles["barcode"]}`}
                      src={barcode2}
                      alt="barcode"
                    />
                    <Image
                      className={`${styles["barcode2"]}`}
                      src={barcode2}
                      alt="barcode"
                    />
                    <p className={`${styles["category-mov2"]}`}>Movie</p>
                    <p className={`${styles["content1"]}`}>
                      {title}
                      {/* Spider-Man: Home... */}
                    </p>
                    <div class="row">
                      <div className={`col ${styles["col-sub1"]}`}>
                        <p className={`${styles["category1"]}`}>Date</p>
                        <p className={`${styles["contentx"]}`}>{date}</p>
                        <p className={`${styles["category1"]}`}>Count</p>
                        <p className={`${styles["contentx"]}`}>
                          {ticketCount + ` pcs`}
                        </p>
                      </div>
                      <div className={`col ${styles["col-sub2"]}`}>
                        <p className={`${styles["category1"]}`}>Time</p>
                        <p className={`${styles["contentx"]}`}>{time}</p>
                        <p className={`${styles["category1"]}`}>Seats</p>
                        <p className={`${styles["contentx"]}`}>{seat}</p>
                        <p className={`${styles["category1"]}`}>Studio</p>
                        <p className={`${styles["contentx"]}`}>{studio}</p>
                      </div>
                      <span className={`dot ${styles["dot2"]}`}></span>
                      <span className={`dot ${styles["dot3"]}`}></span>
                    </div>
                  </div>
                </div>
              </section>
              <div class="row">
                <div className={`col ${styles["dl-btn"]}`}>
                  <button className={`${styles["dl"]}`}>
                    <Image
                      className={`${styles["img-btn"]}`}
                      src={down}
                      alt="dl"
                    />{" "}
                    Download
                  </button>
                </div>
                <div className={`col ${styles["pr-btn"]}`}>
                  <button className={`${styles["print"]}`}>
                    <Image
                      className={`${styles["img-btn"]}`}
                      src={print}
                      alt="print"
                    />{" "}
                    Print
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default TicketResult;
