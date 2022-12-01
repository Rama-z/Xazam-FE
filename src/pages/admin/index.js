import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../styles/admin.module.css";
import Image from "next/image";

// React-Bootsrap
import Form from "react-bootstrap/Form";

// Import Image
import spiderman from "../../assets/images/spiderman.png";
import ebu from "../../assets/images/ebu.png";
import hiflix from "../../assets/images/hiflix.png";
import cineone from "../../assets/images/cineone.png";
import chart from "../../assets/images/chart.png";

function index() {
  return (
    <>
      <Navbar />
      <main className={` container-fluid ${styles["cont-fluid"]}`}>
        <div className={`container ${styles["cont-up"]} `}>
          <div className={` ${styles["cont-up"]} container d-flex p-0 justify-content-between `}>
            <div className={`container  ${styles["cont1-left"]}`}>
              <p className={`${styles["movie-description"]}`}>Movie Description</p>
              <div className={`container card col-12 p-0 m-0 ${styles["card1-left"]}`}>
                <div className=" px-5 px-md-2">
                  <div className="container d-flex justify-content-between p-5 ">
                    <div className={`d-flex col-lg-5 col-md-6 ${styles["cont-image"]}`}>
                      <div className={` card ${styles["card-spider"]}`}>
                        <Image className={` p-4 ${styles["img-spider"]} `} src={spiderman} alt="/" />
                      </div>
                      <div>
                        <p className={`${styles["name-director"]}`}>Director</p>
                        <div className={`card ${styles["director-card"]}`}>
                          <p className="ps-4 mb-0">Jon Watts</p>
                        </div>
                      </div>
                    </div>
                    <div className={`col-lg-7 col-md-6 ${styles["cont-desc-movie"]}`}>
                      <div className="mb-3">
                        <p className={`${styles["title-desc"]}`}>Movie Name</p>
                        <div className={`card ${styles["desc-card"]}`}>
                          <p className={`ps-4 ps-md-2 mb-0 ${styles["font-md"]} `}>Spider-Man: Homecoming</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <p className={`${styles["title-desc"]}`}>Category</p>
                        <div className={`card ${styles["desc-card"]}`}>
                          <p className={`ps-4 ps-md-2 mb-0 ${styles["font-md"]} `}>Action, Adventure, Sci-Fi</p>
                        </div>
                      </div>
                      <div className={`mb-4 ${styles["realise-cont"]}`}>
                        <div className="col-5">
                          <p className={`${styles["title-desc"]} ${styles["title-desc-md"]}`}>Release date</p>
                          <div className={`card ${styles["desc-card"]}`}>
                            <p className={`ps-4 ps-md-2 mb-0 ${styles["font-md"]} `}>07/05/2020</p>
                          </div>
                        </div>
                        <div>
                          <p className={`${styles["title-desc"]} ${styles["title-desc-md"]}`}> Duration (hour / minute)</p>
                          <div className={` d-flex justify-content-around`}>
                            <div className={`card col-5 col-md-3 ${styles["desc-card"]} ${styles["position"]}`}>
                              <p className=" mb-0 d-flex justify-content-center ">2</p>
                            </div>
                            <div className={`card col-5 col-md-3  ${styles["desc-card"]} ${styles["position-2"]}`}>
                              <p className=" mb-0 d-flex justify-content-center ">13</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <p className={`${styles["title-desc"]} ${styles["margins"]}`}>Casts </p>
                        <div className={`card ${styles["desc-card"]}`}>
                          <p className="px-2 mb-0">Tom Holland, Michael Keaton, Robert Dow.. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container px-0 mb-5">
                    <div className={` container col-12 p-5 pb-0`}>
                      <p className={`${styles["name-director"]}`}>Synopsis</p>
                      <div className={`card p-4 col-12 ${styles["Synopsis-card"]}`}>
                        <p className=" mb-0">Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, | </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={` d-flex col-4  ${styles["card2-left"]} `}>
              <p className={`${styles["movie-description"]}`}>Premiere Location </p>
              <div className={` ${styles["cont-purwokerto"]} container card col-12 p-0 m-0 `}>
                <Form.Select disabled className={`${styles["form"]}`} aria-label="Default select example">
                  <option className={`${styles["purwokerto"]}`}>Purwokerto</option>
                  <option value="1">Jakarta</option>
                  <option value="2">Bali</option>
                  <option value="3">Semarang</option>
                </Form.Select>
                <div className={`d-flex justify-content-around align-items-center ${styles["margin"]}`}>
                  <Image className={`${styles["ebu"]}`} src={ebu} alt="/" />
                  <Image className={`${styles["hiflix"]}`} src={hiflix} alt="/" />
                  <Image className={`${styles["cineone"]}`} src={cineone} alt="/" />
                </div>
                <div className={`d-flex justify-content-around align-items-center ${styles["margin"]}`}>
                  <Image className={`${styles["ebu"]}`} src={ebu} alt="/" />
                  <Image className={`${styles["hiflix"]}`} src={hiflix} alt="/" />
                  <Image className={`${styles["cineone"]}`} src={cineone} alt="/" />
                </div>
                <div className={`d-flex justify-content-around align-items-center ${styles["margin-3"]}`}>
                  <Image className={`${styles["ebu"]}`} src={ebu} alt="/" />
                  <Image className={`${styles["hiflix"]}`} src={hiflix} alt="/" />
                  <Image className={`${styles["cineone"]}`} src={cineone} alt="/" />
                </div>
              </div>
              <p className={`${styles["movie-description"]}`}> Showtimes </p>
              <div className={`${styles["date"]} container card col-12 p-0 m-0 `}>
                <Form.Select disabled className={`${styles["form"]}`} aria-label="Default select example">
                  <option className={`${styles["purwokerto"]}`}>Set a date</option>
                </Form.Select>
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${styles["cont-down"]} `}>
          <div className={`d-flex justify-content-between px-2`}>
            <p className={`${styles["movie-description"]}`}>Sales Charts </p>
            <div className={`${styles["time"]}`}>
              <p>08:30am</p>
              <p>10:30pm</p>
              <p>12:00pm</p>
            </div>
          </div>

          <div className=" card col-12">
            <ul className="nav gap-5 pt-5 ps-3">
              <li className="nav-item">
                <p className="my-0">Based on Movie</p>
              </li>
              <li className="nav-item">
                <p className="my-0">Based on Location</p>
              </li>
            </ul>
            <hr className="container mt-3 mb-5" />
            <div className="container d-flex">
              <Image className="col-4" src={chart} alt="/" />
              <Image className="col-4" src={chart} alt="/" />
              <Image className="col-4" src={chart} alt="/" />
            </div>
            <div className="container d-flex">
              <Image className="col-4" src={chart} alt="/" />
              <Image className="col-4" src={chart} alt="/" />
              <Image className="col-4" src={chart} alt="/" />
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
