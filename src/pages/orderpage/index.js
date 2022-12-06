import React, { useState } from "react";
import styles from "../../styles/orderpage.module.css";
import Image from "next/image";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import PrivateRoute from "src/helper/privateroute";

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
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import movieAction from "src/redux/actions/movie";
import { useEffect } from "react";
import { movies } from "src/modules/api/Movie";
import Title from "src/components/Title";
import transactionAction from "src/redux/actions/transaction";

const Index = () => {
  // TODO: Private route
  PrivateRoute();
  const dispatch = useDispatch();
  const router = useRouter();
  const movies = useSelector((state) => state.movie);
  const payment = useSelector((state) => state);
  const [seat, setSeat] = useState([]);
  const bodys = useSelector((state) => state.movie.transfer_data);
  const [body, setBody] = useState(bodys);
  const totalPayment = 10 * seat.length;
  const token = useSelector((state) => state.auth.userData.token);

  useEffect(() => {
    dispatch(transactionAction.getSeatAllThunk(token));
    dispatch(transactionAction.getSeatTagThunk(``, token));
  }, [dispatch]);

  useEffect(() => {
    setBody({
      ...body,
      total_price: totalPayment,
      ticket_count: seat.length,
      seat_id: [
        seat.map((item, idx) => {
          return item.seat_id;
        }),
      ],
    });
  }, [seat]);

  const submitHandler = () => {
    dispatch(movieAction.payment(body));
    router.push("/payment");
  };
  return (
    <>
      <Title title={`Order Page`} />
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
                  {movies.movieDetail.name}
                </p>
                <button
                  className={`${styles.buttons}`}
                  onClick={() => {
                    router.push("/movies");
                  }}
                >
                  Change movie
                </button>
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
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 1 }]);
                            }}
                            type="checkbox"
                            value="A1"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 2 }]);
                            }}
                            type="checkbox"
                            value="A2"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 3 }]);
                            }}
                            type="checkbox"
                            value="A3"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 4 }]);
                            }}
                            type="checkbox"
                            value="A4"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 5 }]);
                            }}
                            type="checkbox"
                            value="A5"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 6 }]);
                            }}
                            type="checkbox"
                            value="A6"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 7 }]);
                            }}
                            type="checkbox"
                            value="A7"
                          />
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>B</p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 8 }]);
                            }}
                            type="checkbox"
                            value="B1"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 9 }]);
                            }}
                            type="checkbox"
                            value="B2"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 10 }]);
                            }}
                            type="checkbox"
                            value="B3"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 11 }]);
                            }}
                            type="checkbox"
                            value="B4"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 12 }]);
                            }}
                            type="checkbox"
                            value="B5"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 13 }]);
                            }}
                            type="checkbox"
                            value="B6"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 14 }]);
                            }}
                            type="checkbox"
                            value="B7"
                          />
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>C</p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 15 }]);
                            }}
                            type="checkbox"
                            value="C1"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 16 }]);
                            }}
                            type="checkbox"
                            value="C2"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 17 }]);
                            }}
                            type="checkbox"
                            value="C3"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 18 }]);
                            }}
                            type="checkbox"
                            value="C4"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 19 }]);
                            }}
                            type="checkbox"
                            value="C5"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 20 }]);
                            }}
                            type="checkbox"
                            value="C6"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 21 }]);
                            }}
                            type="checkbox"
                            value="C7"
                          />
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>D</p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 22 }]);
                            }}
                            type="checkbox"
                            value="D1"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 23 }]);
                            }}
                            type="checkbox"
                            value="D2"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 24 }]);
                            }}
                            type="checkbox"
                            value="D3"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 25 }]);
                            }}
                            type="checkbox"
                            value="D4"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 26 }]);
                            }}
                            type="checkbox"
                            value="D5"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 27 }]);
                            }}
                            type="checkbox"
                            value="D6"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 28 }]);
                            }}
                            type="checkbox"
                            value="D7"
                          />
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>E</p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 29 }]);
                            }}
                            type="checkbox"
                            value="E1"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 30 }]);
                            }}
                            type="checkbox"
                            value="E2"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 31 }]);
                            }}
                            type="checkbox"
                            value="E3"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 32 }]);
                            }}
                            type="checkbox"
                            value="E4"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 33 }]);
                            }}
                            type="checkbox"
                            value="E5"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 34 }]);
                            }}
                            type="checkbox"
                            value="E6"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 35 }]);
                            }}
                            type="checkbox"
                            value="E7"
                          />
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>F</p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 36 }]);
                            }}
                            type="checkbox"
                            value="F1"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 37 }]);
                            }}
                            type="checkbox"
                            value="F2"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 38 }]);
                            }}
                            type="checkbox"
                            value="F3"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 39 }]);
                            }}
                            type="checkbox"
                            value="F4"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 40 }]);
                            }}
                            type="checkbox"
                            value="F5"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 41 }]);
                            }}
                            type="checkbox"
                            value="F6"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 42 }]);
                            }}
                            type="checkbox"
                            value="F7"
                          />
                        </div>
                      </div>
                      <div className="d-flex gap-3 align-items-center">
                        <p className={`mb-0 col-1 ${styles["seat-font"]}`}>G</p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 43 }]);
                            }}
                            type="checkbox"
                            value="G1"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 44 }]);
                            }}
                            type="checkbox"
                            value="G2"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 45 }]);
                            }}
                            type="checkbox"
                            value="G3"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 46 }]);
                            }}
                            type="checkbox"
                            value="G4"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 47 }]);
                            }}
                            type="checkbox"
                            value="G5"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 48 }]);
                            }}
                            type="checkbox"
                            value="G6"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 49 }]);
                            }}
                            type="checkbox"
                            value="G7"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 50 }]);
                            }}
                            type="checkbox"
                            value="A8"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 51 }]);
                            }}
                            type="checkbox"
                            value="A9"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 52 }]);
                            }}
                            type="checkbox"
                            value="A10"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 53 }]);
                            }}
                            type="checkbox"
                            value="A11"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 54 }]);
                            }}
                            type="checkbox"
                            value="A12"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 55 }]);
                            }}
                            type="checkbox"
                            value="A13"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 56 }]);
                            }}
                            type="checkbox"
                            value="A14"
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 57 }]);
                            }}
                            type="checkbox"
                            value="B8"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 58 }]);
                            }}
                            type="checkbox"
                            value="B9"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 59 }]);
                            }}
                            type="checkbox"
                            value="B10"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 60 }]);
                            }}
                            type="checkbox"
                            value="B11"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 61 }]);
                            }}
                            type="checkbox"
                            value="B12"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 62 }]);
                            }}
                            type="checkbox"
                            value="B13"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 63 }]);
                            }}
                            type="checkbox"
                            value="B14"
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 64 }]);
                            }}
                            type="checkbox"
                            value="C8"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 65 }]);
                            }}
                            type="checkbox"
                            value="C9"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 66 }]);
                            }}
                            type="checkbox"
                            value="C10"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 67 }]);
                            }}
                            type="checkbox"
                            value="C11"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 68 }]);
                            }}
                            type="checkbox"
                            value="C12"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 69 }]);
                            }}
                            type="checkbox"
                            value="C13"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 70 }]);
                            }}
                            type="checkbox"
                            value="C14"
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 71 }]);
                            }}
                            type="checkbox"
                            value="D8"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 72 }]);
                            }}
                            type="checkbox"
                            value="D9"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 73 }]);
                            }}
                            type="checkbox"
                            value="D10"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 74 }]);
                            }}
                            type="checkbox"
                            value="D11"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 75 }]);
                            }}
                            type="checkbox"
                            value="D12"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 76 }]);
                            }}
                            type="checkbox"
                            value="D13"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 77 }]);
                            }}
                            type="checkbox"
                            value="D14"
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 78 }]);
                            }}
                            type="checkbox"
                            value="E8"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 79 }]);
                            }}
                            type="checkbox"
                            value="E9"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 80 }]);
                            }}
                            type="checkbox"
                            value="E10"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 81 }]);
                            }}
                            type="checkbox"
                            value="E11"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 82 }]);
                            }}
                            type="checkbox"
                            value="E12"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 83 }]);
                            }}
                            type="checkbox"
                            value="E13"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 84 }]);
                            }}
                            type="checkbox"
                            value="E14"
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 85 }]);
                            }}
                            type="checkbox"
                            value="F8"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 86 }]);
                            }}
                            type="checkbox"
                            value="F9"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 87 }]);
                            }}
                            type="checkbox"
                            value="F10"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 88 }]);
                            }}
                            type="checkbox"
                            value="F11"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 89 }]);
                            }}
                            type="checkbox"
                            value="F12"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 90 }]);
                            }}
                            type="checkbox"
                            value="F13"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 91 }]);
                            }}
                            type="checkbox"
                            value="F14"
                          />
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className={`mb-0 col-1 ${styles.heightseat}`}></p>
                        <div className="d-flex gap-2">
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 92 }]);
                            }}
                            type="checkbox"
                            value="G8"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 93 }]);
                            }}
                            type="checkbox"
                            value="G9"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 94 }]);
                            }}
                            type="checkbox"
                            value="G10"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 95 }]);
                            }}
                            type="checkbox"
                            value="G11"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 96 }]);
                            }}
                            type="checkbox"
                            value="G12"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 97 }]);
                            }}
                            type="checkbox"
                            value="G13"
                          />
                          <input
                            onClick={(e) => {
                              setSeat([...seat, { seat_id: 98 }]);
                            }}
                            type="checkbox"
                            value="G14"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.number} d-flex `}>
                    <div className={`d-flex ${styles.gaps1} `}>
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>4</p>
                      <p>5</p>
                      <p>6</p>
                      <p>7</p>
                    </div>
                    <div className={`d-flex ${styles.gaps2} `}>
                      <p>8</p>
                      <p>9</p>
                      <p>10</p>
                      <p>11</p>
                      <p>12</p>
                      <p>13</p>
                      <p>14</p>
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
              <div
                className={` card ${styles.changebtn}`}
                onClick={() => {
                  router.push("/movies");
                }}
              >
                Change your movie
              </div>
              <div
                className={` card ${styles.checkoutbtn}`}
                onClick={submitHandler}
              >
                Checkout now
              </div>
            </div>
          </div>
          <div className={` d-flex col-md-12 col-lg-4 ${styles["cont-up"]} `}>
            <p className={`${styles["movie-selected"]}`}>Order Info</p>
            <div className={`card ${styles.cardpayment} `}>
              <div className={` d-flex  ${styles.img}`}>
                <Image src={cineone} alt="/" width={160} height={30} />
                <p className={`${styles["title-payment"]}`}>CineOne21 Cinema</p>
              </div>
              <div className="d-flex justify-content-between px-4">
                <p className={`${styles["left-text"]}`}>Movie selected</p>
                <p className={`${styles["right-text"]}`}>
                  {movies.movieDetail.name}
                </p>
              </div>
              <div className="d-flex justify-content-between px-4">
                <p className={`${styles["left-text"]}`}>
                  {" "}
                  Tuesday, 07 July 2020
                </p>
                <p className={`${styles["right-text"]}`}>{bodys.tsm_id}</p>
              </div>
              <div className="d-flex justify-content-between px-4">
                <p className={`${styles["left-text"]}`}>One ticket price</p>
                <p className={`${styles["right-text"]}`}> $10</p>
              </div>
              <div className="d-flex px-4">
                <p className={`${styles["left-text"]}`}>Seat choosed</p>
                {seat?.map((item, idx) => {
                  return (
                    <div className={`${styles["seat-urgent"]}`} key={idx}>
                      <p className={`${styles["right-text"]}`}>
                        {item.seat_id}
                      </p>
                    </div>
                  );
                })}
              </div>
              <hr />
              <div className="d-flex justify-content-between px-4">
                <p className={`${styles["title-payment"]}`}>Total Payment</p>
                <p className={`${styles["prices"]}`}>${totalPayment}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
