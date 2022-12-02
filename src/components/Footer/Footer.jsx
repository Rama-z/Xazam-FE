import React from "react";
import styles from "src/styles/Footer.module.css";
import Image from "next/image";

// Import Image
import Tickitz from "../../assets/images/Tickitz-purple.png";
import cineone from "../../assets/images/cineone.png";
import hiflix from "../../assets/images/hiflix.png";
import ebu from "../../assets/images/ebu.png";
import fb from "../../assets/images/fb.png";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";
import ig from "../../assets/images/ig.png";

function Footer() {
  return (
    <div>
      <footer className=" text-center text-lg-start bg-light text-muted">
        <section className="p-4 pb-4 bg-white">
          <div className="container text-center text-md-start mt-5">
            <div className="row justify-content-evenly mt-3">
              <div
                className={` col-md-3 col-lg-5 col-xl-3 ms-0 mb-4 ${styles["cont-logo"]} `}
              >
                <Image
                  className={`mb-3 ${styles["componay__logo"]}`}
                  src={Tickitz}
                  alt="/"
                />
                <p className={`${styles["desc-footer"]}`}>
                  Stop waiting in line. Buy tickets conveniently, watch movies
                  quietly.
                </p>
              </div>
              <div
                className={`col-md-3 col-lg-1 col-xl-1 p-0 ${styles["cont-explore"]} `}
              >
                <h6
                  className={`text-uppercase fw-bold mb-4 ${styles["title-footer"]}`}
                >
                  Explore
                </h6>
                <p className={`mb-md-2 mb-4`}>
                  <a
                    href="#!"
                    className={`text-reset text-decoration-none ${styles["li"]}`}
                  >
                    Cinemas
                  </a>
                </p>
                <p className={` mb-md-2 mb-4`}>
                  <a
                    href="#!"
                    className={`text-reset text-decoration-none ${styles["li"]}`}
                  >
                    Movies List
                  </a>
                </p>
                <p className={` mb-md-2 mb-4`}>
                  <a
                    href="#!"
                    className={`text-reset text-decoration-none ${styles["li"]}`}
                  >
                    My Ticket
                  </a>
                </p>
                <p className={` mb-md-2 mb-4`}>
                  <a
                    href="#!"
                    className={`text-reset text-decoration-none ${styles["li"]}`}
                  >
                    Notification
                  </a>
                </p>
              </div>
              <div
                className={`col-md-3 col-lg-2 col-xl-2  mx-md-0 px-md-0 mx-auto mb-4 ${styles["cont-spons"]} `}
              >
                <h6
                  className={`text-uppercase fw-bold mb-4 ${styles["title-footer"]}`}
                >
                  Our Sponsor
                </h6>
                <div className={`${styles["cont-sponsor"]}`}>
                  <Image
                    className={`mb-4 ${styles["cont-sponsor__image"]}`}
                    src={ebu}
                    alt="/"
                  />
                  <Image
                    className={`mb-4 ${styles["cont-sponsor__image"]}`}
                    src={cineone}
                    alt="/"
                  />
                  <Image
                    className={`mb-4 ${styles["cont-sponsor__image"]}`}
                    src={hiflix}
                    alt="/"
                  />
                </div>
              </div>
              <div className="   col-md-12 col-lg-2 col-xl-2 mx-lg-0 p-lg-0 mt-lg-0 ms-md-5 ps-md-4 mt-md-0 mx-auto mb-md-5 mb-4 ">
                <h6
                  className={`text-uppercase fw-bold mb-4 ${styles["title-footer"]}`}
                >
                  Follow us
                </h6>
                <div className={` ${styles["cont-social-media"]}`}>
                  <div className={`${styles["tickits-1"]}`}>
                    <div className="d-flex gap-2 pb-1">
                      <Image src={fb} alt="/" />
                      <p className={`${styles["social-media"]}`}>
                        Tickitz Cinema id
                      </p>
                    </div>
                    <div className="d-flex gap-2 pb-1 ">
                      <Image src={ig} alt="/" />
                      <p className={`${styles["social-media"]}`}>tickitz.id</p>
                    </div>
                  </div>
                  <div className={`${styles["tickits"]}`}>
                    <div className="d-flex gap-2 pb-1 ">
                      <Image src={twitter} alt="/" />
                      <p className={`${styles["social-media"]}`}>tickitz.id</p>
                    </div>
                    <div className="d-flex gap-2 pb-1 ">
                      <Image src={youtube} alt="/" />
                      <p className={`${styles["social-media"]}`}>
                        Tickitz Cinema id
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`text-center pt-4 ${styles["text-copyright"]}`}>
            © 2020 Tickitz. All Rights Reserved.
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
