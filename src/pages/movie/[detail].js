import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from "../../styles/MovieDetail.module.css";

const Detail = () => {
  return (
    <>
      <Header />
      <main className={styles["main"]}>
        <section className={styles["section-first"]}>
          <span className={styles["decs-image"]}>
            <Image src={``} alt={``} className={styles["image"]}/>
          </span>
          <span className={styles["decs"]}>
            <span className={styles["decs-detail"]}>
              <h3>{`Spider-Man: Homecoming`}</h3>
              <p>{`Advanture, Action, Sci-Fi`}</p>
            </span>
            <span className={styles["desc"]}>
              <span>
                <p>Release</p>
                <p>{``}</p>
              </span>
              <span>
                <p>Directed by</p>
                <p>{``}</p>
              </span>
            </span>
            <span className={styles["desc"]}>
              <span>
                <p>Duration</p>
                <p>{``}</p>
              </span>
              <span>
                <p>Costs</p>
                <p>{``}</p>
              </span>
            </span>
          </span>
          <span className={styles["synopsis"]}>
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.
          </span>
        </section>
        <section className={styles["section-second"]}>
          <h1>Showtimes and Tickets</h1>
          <span className={styles["date-and-location"]}>

          </span>
          <span className={styles["tickets-section"]}>
            <uk>
              <li>
                <span>
                  <h1>{``}</h1>
                  <span>
                    <p></p>
                    <p></p>
                  </span>
                  <span>
                    <ul className={styles["date"]}>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </span>
                  <span>
                    <p>Price</p>
                    <p>{``}</p>
                  </span>
                  <span>
                    <button>Book Now</button>
                    <p>Add to cart</p>
                  </span>
                </span>
              </li>
            </uk>
          </span>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Detail;
