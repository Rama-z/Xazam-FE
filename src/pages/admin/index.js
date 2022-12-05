import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

// React-Bootsrap
import Form from "react-bootstrap/Form";

// Import Image
import spiderman from "../../assets/images/spiderman.png";
import ebu from "../../assets/images/ebu.png";
import hiflix from "../../assets/images/hiflix.png";
import cineone from "../../assets/images/cineone.png";
import chart from "src/assets/images/Chart.png";
import plus from "../../assets/images/plus.png";

function index() {
  const inputNumber = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <>
      <Navbar />
      <main className={` container-fluid ${styles["cont-fluid"]}`}>
        <div className={`container ${styles["cont-up"]} `}>
          <div
            className={` ${styles["cont-up"]} container d-flex p-0 justify-content-between `}
          >
            <div className={`container  ${styles["cont1-left"]}`}>
              <p className={`${styles["movie-description"]}`}>
                Movie Description
              </p>
              <div
                className={`container card col-md-12 col-lg-12  p-0 m-0 ${styles["card1-left"]}`}
              >
                <div className={` px-5 px-md-2 ${styles.patdualiama}`}>
                  <div
                    className={`container d-flex justify-content-between p-5 ${styles.spaces} `}
                  >
                    <div
                      className={`d-flex col-lg-5 col-md-6 ${styles["cont-image"]}`}
                    >
                      <div className={` card ${styles["card-spider"]}`}>
                        <Image
                          className={` p-4 ${styles["img-spider"]} `}
                          src={spiderman}
                          alt="/"
                        />
                      </div>
                      <form>
                        <p className={`${styles["name-director"]}`}>Director</p>
                        <div className={`card ${styles["director-card"]}`}>
                          <input className={`px-3 ${styles.inputs}`} />
                        </div>
                      </form>
                    </div>
                    <div
                      className={`col-lg-7 col-md-6 ${styles["cont-desc-movie"]}`}
                    >
                      <div className="mb-3">
                        <p className={`${styles["title-desc"]}`}>Movie Name</p>
                        <form className={`card ${styles["desc-card"]}`}>
                          <input
                            className={`ps-4 ps-md-2 mb-0 ${styles.inputs} ${styles["font-md"]} `}
                          />
                        </form>
                      </div>
                      <div className="mb-3">
                        <p className={`${styles["title-desc"]}`}>Category</p>
                        <form className={`card ${styles["desc-card"]}`}>
                          <input
                            className={`ps-4 ps-md-2 mb-0 ${styles.inputs} ${styles["font-md"]} `}
                          />
                        </form>
                      </div>
                      <div className={`mb-4 ${styles["realise-cont"]}`}>
                        <div className="col-5">
                          <p
                            className={`${styles["title-desc"]} ${styles["title-desc-md"]}`}
                          >
                            Release date
                          </p>
                          <form className={`card ${styles["desc-card"]}`}>
                            <input
                              className={`ps-4 ps-md-2 mb-0 ${styles.inputs} ${styles["font-md"]} `}
                            />
                          </form>
                        </div>
                        <form className={`${styles.formduration}`}>
                          <p
                            className={`${styles["title-desc"]} ${styles["title-desc-md"]} ${styles.duration}`}
                          >
                            {" "}
                            Duration (hour / minute)
                          </p>
                          <div
                            className={` d-flex justify-content-around ${styles.tigatujuhlima}`}
                          >
                            <div
                              className={`card col-5 col-md-3 ${styles["desc-card"]} ${styles["position"]} ${styles["cols"]}`}
                            >
                              <input
                                className={` mb-0 d-flex justify-content-center ${styles.inputs}`}
                                maxLength="2"
                                onKeyPress={inputNumber}
                              />
                            </div>
                            <div
                              className={`card col-5 col-md-3  ${styles["desc-card"]} ${styles["position-2"]} ${styles["cols"]}`}
                            >
                              <input
                                className={` mb-0 d-flex justify-content-center ${styles.inputs}`}
                                maxLength="2"
                                onKeyPress={inputNumber}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className={`${styles.divcast}`}>
                        <p
                          className={`${styles["title-desc"]} ${styles["margins"]}`}
                        >
                          Casts{" "}
                        </p>
                        <form className={`card ${styles["desc-card"]}`}>
                          <input
                            className={` px-2 mb-0 ${styles.tom} ${styles.inputs}`}
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="container px-0 mb-5">
                    <div
                      className={`${styles["synopsis"]} container col-12 p-5 pb-0`}
                    >
                      <p className={`${styles["name-director"]}`}>Synopsis</p>
                      <form
                        className={`card p-4 col-12 ${styles["Synopsis-card"]}`}
                      >
                        <textarea
                          className={` mb-0 ${styles.textsynopsis} ${styles.inputs} ${styles.textarea}`}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={` d-flex col-md-12 col-lg-4  ${styles["card2-left"]} `}
            >
              <div className={`col-md-6 col-lg-12 ${styles.tujuhenamlapan}`}>
                <p className={`${styles["movie-description"]}`}>
                  Premiere Location{" "}
                </p>
                <div
                  className={` ${styles["cont-purwokerto"]} container card col-12 p-0 m-0 `}
                >
                  {/* <Form.Select disabled className={`${styles["form"]}`} aria-label="Default select example">
                    <option className={`${styles["purwokerto"]}`}>Purwokerto</option>
                    <option value="1">Jakarta</option>
                    <option value="2">Bali</option>
                    <option value="3">Semarang</option>
                  </Form.Select> */}
                  <div
                    className={`d-flex justify-content-around align-items-center ${styles["margin"]}`}
                  >
                    <Image
                      className={`${styles["ebu"]} ${styles["cursor"]}`}
                      src={ebu}
                      alt="/"
                    />
                    <Image
                      className={`${styles["hiflix"]} ${styles["cursor"]} `}
                      src={hiflix}
                      alt="/"
                    />
                    <Image
                      className={`${styles["cineone"]} ${styles["cursor"]}`}
                      src={cineone}
                      alt="/"
                    />
                  </div>
                  <div
                    className={`d-flex justify-content-around align-items-center ${styles["margin"]}`}
                  >
                    <Image
                      className={`${styles["ebu"]} ${styles["cursor"]}`}
                      src={ebu}
                      alt="/"
                    />
                    <Image
                      className={`${styles["hiflix"]} ${styles["cursor"]}`}
                      src={hiflix}
                      alt="/"
                    />
                    <Image
                      className={`${styles["cineone"]} ${styles["cursor"]}`}
                      src={cineone}
                      alt="/"
                    />
                  </div>
                  <div
                    className={`d-flex justify-content-around align-items-center ${styles["margin-3"]}`}
                  >
                    <Image
                      className={`${styles["ebu"]} ${styles["cursor"]}`}
                      src={ebu}
                      alt="/"
                    />
                    <Image
                      className={`${styles["hiflix"]} ${styles["cursor"]}`}
                      src={hiflix}
                      alt="/"
                    />
                    <Image
                      className={`${styles["cineone"]} ${styles["cursor"]}`}
                      src={cineone}
                      alt="/"
                    />
                  </div>
                </div>
              </div>
              <div className={`col-md-5  col-lg-12 ${styles.tujuhenamlapan}`}>
                <p className={`${styles["movie-description"]}`}> Showtimes </p>
                <div
                  className={`${styles["date"]} container card col-12 p-0 m-0 `}
                >
                  {/* <Form.Select className={`${styles["form"]} ${styles["form-up"]}`} aria-label="Default select example">
                    <option className={`${styles["purwokerto"]}`}>Set a date</option>
                  </Form.Select> */}
                  <div className={` d-flex pb-5 px-2 ${styles.padtuj} `}>
                    <div
                      className={` container pt-2 d-flex ${styles.inputdates}`}
                    >
                      <label className={` py-1 ${styles.set}`}>
                        {" "}
                        Start Date :{" "}
                      </label>
                      <input
                        className={`${styles.dates} ${styles["cursor"]}`}
                        type="date"
                        placeholder="DD/MM/YYYY"
                      />
                    </div>
                    <div
                      className={` container pt-2 d-flex  ${styles.inputdates}`}
                    >
                      <label className={` py-1 ${styles.set}`}>
                        {" "}
                        End Date :{" "}
                      </label>
                      <input
                        className={`${styles.dates} ${styles["cursor"]}`}
                        type="date"
                        placeholder="DD/MM/YYYY"
                      />
                    </div>
                  </div>

                  {/* <Form.Select className={`${styles["form"]} ${styles["form-down"]}`} aria-label="Default select example">
                    <option className={`${styles["purwokerto"]}`}>Set a date</option>
                  </Form.Select> */}
                  <div
                    className={`${styles.jam} d-flex justify-content-around gap-1 mb-4 px-1 `}
                  >
                    <div className={`card ${styles.add}`}>
                      <Image
                        className={`${styles["cursor"]}`}
                        src={plus}
                        alt="/"
                      />
                    </div>
                    <p className={`${styles.time} ${styles["cursor"]}`}>
                      {" "}
                      08:30 am{" "}
                    </p>
                    <p className={`${styles.time} ${styles["cursor"]}`}>
                      {" "}
                      08:30 am{" "}
                    </p>
                    <p className={`${styles.time} ${styles["cursor"]}`}>
                      {" "}
                      08:30 am{" "}
                    </p>
                  </div>
                  <div
                    className={`${styles.jam2} ${styles["cursor"]} d-flex justify-content-around gap-1 mb-4 px-1 `}
                  >
                    <p className={`${styles.time} ${styles["cursor"]}`}>
                      {" "}
                      08:30 am{" "}
                    </p>
                    <p className={`${styles.time} ${styles["cursor"]}`}>
                      {" "}
                      08:30 am{" "}
                    </p>
                    <p className={`${styles.time} ${styles["cursor"]}`}>
                      {" "}
                      08:30 am{" "}
                    </p>
                    <p className={`${styles.time} ${styles["cursor"]}`}>
                      {" "}
                      08:30 am{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${styles["cont-down"]} `}>
          <div className={`d-flex justify-content-between px-2`}>
            <p className={`${styles["movie-description"]} ${styles.sales}`}>
              Sales Charts{" "}
            </p>
            <div className={`${styles["time"]}`}>
              <p>08:30am</p>
              <p>10:30pm</p>
              <p>12:00pm</p>
            </div>
          </div>

          <div className=" card col-12">
            <ul className={` nav gap-5 pt-5 ps-3 ${styles.navschart}`}>
              <li className="nav-item">
                <p className="my-0">Based on Movie</p>
              </li>
              <li className="nav-item">
                <p className="my-0">Based on Location</p>
              </li>
            </ul>
            <hr className="container mt-3 mb-5" />
            <div className="container d-flex">
              <Image
                className={`col-4 ${styles.imgcharts}`}
                src={chart}
                alt="/"
              />
              <Image
                className={`col-4 ${styles.imgcharts}`}
                src={chart}
                alt="/"
              />
              <Image
                className={`col-4 ${styles.imgcharts}`}
                src={chart}
                alt="/"
              />
            </div>
            <div className="container d-flex">
              <Image
                className={`col-4 ${styles.imgcharts}`}
                src={chart}
                alt="/"
              />
              <Image
                className={`col-4 ${styles.imgcharts}`}
                src={chart}
                alt="/"
              />
              <Image
                className={`col-4 ${styles.imgcharts}`}
                src={chart}
                alt="/"
              />
            </div>

            <div className="d-flex justify-content-center gap-3 my-5">
              <div className={`card ${styles["pagination-1"]}`}>1</div>
              <div className={`card ${styles["pagination"]}`}>2</div>
              <div className={`card ${styles["pagination"]}`}>3</div>
              <div className={`card ${styles["pagination"]}`}>4</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default index;
