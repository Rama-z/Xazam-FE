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

const TicketResult = () => {
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
                  <div className={`col ${styles["img-wrap"]}`}>
                    <Image
                      className={`${styles["img"]}`}
                      src={tickitz}
                      alt="Tickitz"
                    />
                  </div>
                  <div className={`col-6 ${styles["admit"]}`}>Admit One</div>
                  <span className={`dot ${styles["dot"]}`}></span>
                  <hr className={`${styles["new1"]}`} />
                  <div className={`col ${styles["img-wrap2"]}`}>
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
                  <div className={`col-8 ${styles["sub-row8"]}`}>
                    <p className={`${styles["category-movie"]}`}>Movie</p>
                    <p className={`${styles["content"]}`}>
                      Spider-Man: Homecoming
                    </p>
                    <div class="row">
                      <div className={`col ${styles["col-1"]}`}>
                        <p className={`${styles["category"]}`}>Date</p>
                        <p className={`${styles["content2"]}`}>07 July</p>
                        <p className={`${styles["category"]}`}>Count</p>
                        <p className={`${styles["content2"]}`}>3 pieces</p>
                      </div>
                      <div className={`col-5 ${styles["col-2"]}`}>
                        <p className={`${styles["category"]}`}>Time</p>
                        <p className={`${styles["content2"]}`}>02:00pm</p>
                        <p className={`${styles["category"]}`}>Seats</p>
                        <p className={`${styles["content2"]}`}>C4, C5, C6</p>
                      </div>
                      <div className={`col ${styles["col-3"]}`}>
                        <p className={`${styles["category-cat"]}`}>Category</p>
                        <p className={`${styles["contentpg"]}`}>PG-13</p>
                        <p className={`${styles["category-price"]}`}>Price</p>
                        <p className={`${styles["price"]}`}>$30.00</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
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
                      Spider-Man: Home...
                    </p>
                    <div class="row">
                      <div className={`col ${styles["col-sub1"]}`}>
                        <p className={`${styles["category1"]}`}>Date</p>
                        <p className={`${styles["contentx"]}`}>07 Jul</p>
                        <p className={`${styles["category1"]}`}>Count</p>
                        <p className={`${styles["contentx"]}`}>3 pcs</p>
                      </div>
                      <div className={`col ${styles["col-sub2"]}`}>
                        <p className={`${styles["category1"]}`}>Time</p>
                        <p className={`${styles["contentx"]}`}>2:00pm</p>
                        <p className={`${styles["category1"]}`}>Seats</p>
                        <p className={`${styles["contentx"]}`}>C4, C5, C6</p>
                        <p className={`${styles["category1"]}`}>Category</p>
                        <p className={`${styles["contentx"]}`}>PG-13 </p>
                      </div>
                      <span className={`dot ${styles["dot2"]}`}></span>
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
