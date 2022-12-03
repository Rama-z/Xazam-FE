import React from "react";
import styles from "../../styles/orderpage.module.css";
import Image from "next/image";
import Table from "react-bootstrap/Table";

// Import Component
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// Import Image
import cineone from "../../assets/images/cineone.png";
import available from "../../assets/images/available.png";
import selected from "../../assets/images/selected.png";
import lovenest from "../../assets/images/lovenest.png";
import sold from "../../assets/images/sold.png";
import screen from "../../assets/images/screen.png";

function index() {
  return (
    <div>
      <Navbar />
      <main className={` container-fluid ${styles["cont-fluid"]}`}>
        <div
          className={` d-flex container justify-content-between ${styles["cont-tujuh"]}`}
        >
          <div className={` d-flex col-md-12 col-lg-7 ${styles["cont-up"]}  `}>
            <p className={`${styles["movie-selected"]}`}>Movie Selected</p>
            <div className={` card ${styles.cardmovie}`}>
              <div className="d-flex justify-content-between align-items-center">
                <p className={`${styles.titlemovie} ${styles.spiders}`}>
                  Spider-Man: Homecoming
                </p>
                <button className={`${styles.buttons}`}>Change movie</button>
              </div>
            </div>
            <p
              className={`${styles.titlemovie} ${styles.choose} ${styles.pads}`}
            >
              Choose Your Seat
            </p>
            <div className={` card ${styles.chair}`}>
              <form>
                <div className="card-seat">
                  <div
                    className={` d-flex justify-content-center ${styles.pads2}`}
                  >
                    <h5>Screen</h5>
                  </div>

                  <Image
                    className={`${styles.imgscreen}`}
                    src={screen}
                    alt="/"
                  />
                  <div
                    className={` d-flex justify-content-around ${styles.seat}`}
                  >
                    <div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>A</p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>B</p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>C</p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>D</p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>E</p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>F</p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>G</p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                          <input type="checkbox" value="A1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.number} d-flex `}>
                    <div className={`d-flex ${styles.gaps} `}>
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>4</p>
                      <p>5</p>
                      <p>6</p>
                      <p>7</p>
                    </div>
                    <div className={`d-flex ${styles.gaps} `}>
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>4</p>
                      <p>5</p>
                      <p>6</p>
                      <p>7</p>
                    </div>
                  </div>
                </div>
                <div className={` container ${styles.keyseat}`}>
                  <p>Seating key</p>
                </div>
                <div className={` d-flex gap-4 ${styles.availables} `}>
                  <div className="d-flex gap-2 align-items-center">
                    <Image
                      className={`${styles.imgseat}`}
                      src={available}
                      alt="/"
                    />
                    <p className="mb-0">Available</p>
                  </div>
                  <div className="d-flex gap-2 align-items-center ">
                    <Image
                      className={`${styles.imgseat}`}
                      src={selected}
                      alt="/"
                    />
                    <p className="mb-0">Selected</p>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <Image
                      className={`${styles.imgseat}`}
                      src={lovenest}
                      alt="/"
                    />
                    <p className="mb-0">Love nest</p>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <Image className={`${styles.imgseat}`} src={sold} alt="/" />
                    <p className="mb-0">Sold</p>
                  </div>
                </div>
              </form>
            </div>
            <div
              className={` d-flex justify-content-between ${styles.changes}`}
            >
              <div className={` card ${styles.changebtn}`} onClick>
                Change your movie
              </div>
              <div
                className={` card ${styles.checkoutbtn}`}
                onClick={() => {
                  router.push("/payment");
                }}
              >
                Checkout now
              </div>
            </div>
          </div>
          <div className={` d-flex col-md-12 col-lg-4 ${styles["cont-up"]} `}>
            <p className={`${styles["movie-selected"]}`}>Order Info</p>
            <div className={`card ${styles.cardpayment} `}>
              <div className={` d-flex  ${styles.img}`}>
                <Image src={cineone} alt="/" />
                <p className={`${styles["title-payment"]}`}>CineOne21 Cinema</p>
              </div>
              <div className="d-flex justify-content-between px-4">
                <p className={`${styles["left-text"]}`}>Movie selected</p>
                <p className={`${styles["right-text"]}`}>
                  {" "}
                  Spider-Man: Homecoming
                </p>
              </div>
              <div className="d-flex justify-content-between px-4">
                <p className={`${styles["left-text"]}`}>
                  {" "}
                  Tuesday, 07 July 2020
                </p>
                <p className={`${styles["right-text"]}`}> 02:00pm</p>
              </div>
              <div className="d-flex justify-content-between px-4">
                <p className={`${styles["left-text"]}`}>One ticket price</p>
                <p className={`${styles["right-text"]}`}> $10</p>
              </div>
              <div className="d-flex justify-content-between px-4">
                <p className={`${styles["left-text"]}`}>Seat choosed</p>
                <p className={`${styles["right-text"]}`}>C4, C5, C6</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between px-4">
                <p className={`${styles["title-payment"]}`}>Total Payment</p>
                <p className={`${styles["prices"]}`}>$30</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default index;
