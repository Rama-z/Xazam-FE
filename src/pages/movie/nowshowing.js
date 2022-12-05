import React from "react";
import Image from "next/image";

import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from "../../styles/NowShowing.module.css";

const nowshowing = () => {
  return (
    <>
      <Header />
      <main className={styles["main"]}>
        <section className={styles["section"]}>
          <span className={`${styles["section__header"]}`}>
            <h1>Now Showing</h1>
            <p>view less</p>
          </span>
          <ul className={`${styles["list-movies"]}`}>
            <li className={styles["movie-spesific-to-image"]}>
              <Image
                src={``}
                alt={``}
                className={styles["movie-images"]}
                width={500}
                height={500}
              />
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default nowshowing;
