import React from "react";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import styles from "../../styles/Cinema.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieAction from "src/redux/actions/movie";

const Cinema = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.studiosThunk());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main className={styles["main"]}>
        <span className={styles["tickets-section"]}>
          <ul className={styles["tickets-list"]}>
            <li className={styles["ticket"]}>
              <span className={styles["ticket__content"]}>
                <span className={styles["ticket__content__header"]}>
                  <span className={styles["ticket-image-section"]}>
                    <Image
                      src={``}
                      alt={``}
                      className={styles["ticket-image"]}
                    />
                  </span>
                  <span className={styles["ticket-desc"]}>
                    <p className={styles["ticket-desc__title"]}>{`ebv.id`}</p>
                    <p
                      className={styles["ticket-desc__location"]}
                    >{`Whatever street No.12, South Purwokerto`}</p>
                  </span>
                </span>
              </span>
            </li>
          </ul>
        </span>
      </main>
      <Footer />
    </>
  );
};

export default Cinema;
