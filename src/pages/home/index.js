import React from "react";
import Image from "next/image";

import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import spiderman from "../../assets/Images/spiderman-home.png";
import lion from "../../assets/Images/lion-home.png";
import movie from "../../assets/Images/movie-home.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className={styles["main"]}>
        <section className={`${styles["section"]} ${styles["section_one"]}`}>
          <span className={styles["title"]}>
            <p>Nearest Cinema, Newest Movie.</p>
            <h1>Find out now!</h1>
          </span>
          <span className={styles["title-image"]}>
            <ul className={styles["list-images-section"]}>
              <li className={styles["list-image"]}>
                <Image
                  src={spiderman}
                  alt={`spiderman`}
                  className={styles["content-list-image"]}
                />
              </li>
              <li className={styles["list-image"]}>
                <Image
                  src={lion}
                  alt={`lion`}
                  className={styles["content-list-image"]}
                />
              </li>
              <li className={styles["list-image"]}>
                <Image
                  src={movie}
                  alt={`movie`}
                  className={styles["content-list-image"]}
                />
              </li>
            </ul>
          </span>
        </section>
        <section className={`${styles["section"]} ${styles["section_two"]}`}>
          <span className={`${styles["section__header"]}`}>
            <h1>Now Showing</h1>
            <p>view all</p>
          </span>
          <ul className={`${styles["list-movies"]}`}>
            <li className={`${styles["moview-spesific-to-image"]}`}>
              <Image
                src={``}
                alt={`movie`}
                className={styles["moview-images"]}
              />
            </li>
          </ul>
        </section>
        <section className={`${styles["section"]} ${styles["section_tree"]}`}>
          <span className={`${styles["section__header"]}`}>
            <h1>Upcoming Showing</h1>
            <p>view all</p>
          </span>
          <ul className={`${styles["section__header__month"]}`}>
            <li>January</li>
            <li>February</li>
            <li>March</li>
            <li>April</li>
            <li>May</li>
            <li>June</li>
            <li>Juli</li>
            <li>August</li>
            <li>Sepetember</li>
            <li>October</li>
            <li>November</li>
            <li>December</li>
          </ul>
          <span className={`${styles["section__header__movie"]}`}>
            <ul className={`${styles["list-movies"]}`}>
              <li className={`${styles["moview"]}`}>
                <Image
                  src={``}
                  alt={`movie`}
                  className={styles["moview-images"]}
                />
                <h3 className={styles[`title`]}>{`title`}</h3>
                <p className={styles["description"]}> {`Deskripsi`}</p>
                <button className={styles["btn-movie"]}>{`Details`}</button>
              </li>
              <li className={`${styles["moview"]}`}>
                <Image
                  src={``}
                  alt={`movie`}
                  className={styles["moview-images"]}
                />
                <h3 className={styles[`title`]}>{`title`}</h3>
                <p className={styles["description"]}> {`Deskripsi`}</p>
                <button className={styles["btn-movie"]}>{`Details`}</button>
              </li>
              <li className={`${styles["moview"]}`}>
                <Image
                  src={``}
                  alt={`movie`}
                  className={styles["moview-images"]}
                />
                <h3 className={styles[`title`]}>{`title`}</h3>
                <p className={styles["description"]}> {`Deskripsi`}</p>
                <button className={styles["btn-movie"]}>{`Details`}</button>
              </li>
              <li className={`${styles["moview"]}`}>
                <Image
                  src={``}
                  alt={`movie`}
                  className={styles["moview-images"]}
                />
                <h3 className={styles[`title`]}>{`title`}</h3>
                <p className={styles["description"]}> {`Deskripsi`}</p>
                <button className={styles["btn-movie"]}>{`Details`}</button>
              </li>
            </ul>
          </span>
        </section>
        <section className={`${styles["section"]} ${styles["section_fourth"]}`}>
          <span className={styles["section_fourth_border"]}>
            <p>Be the vanguard of the</p>
            <h1>Moviegoers</h1>
            <span className={styles["btn-input-section"]}>
              <input type="text" placeholder="Type your email" />
              <button className={styles["btn-join"]}>Join now</button>
            </span>
            <description className={styles["decs"]}>
              By joining you as a Tickitz member, we will always send you the
              latest updates via email.
            </description>
          </span>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
