import React from "react";
import Image from "next/image";

import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from "../../styles/UpComing.module.css";

const upcoming = () => {
  return (
    <>
      <Header />
      <main className={styles["main"]}>
        <section className={styles["section"]}>
          <span className={`${styles["section__header"]}`}>
            <h1>Upcoming Showing</h1>
            <p> view less</p>
          </span>
          <span className={`${styles["section__header__movie"]}`}>
            <ul className={`${styles["list-movies"]}`}>
              <li className={`${styles["movie"]}`}>
                <Image
                  src={``}
                  alt={`movie`}
                  className={styles["movie-images"]}
                  width={500}
                  height={500}
                />
                <h3 className={styles["title"]}>{`Putri Duyung`}</h3>
                <p className={styles["description"]}>{`Animal`}</p>
                <button className={styles["btn-movie"]}>{`Details`}</button>
              </li>
            </ul>
          </span>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default upcoming;
