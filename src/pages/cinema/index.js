import React from "react";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import styles from "../../styles/Cinema.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import movieAction from "src/redux/actions/movie";
import Title from "src/components/Title";

const Cinema = () => {
  const dispatch = useDispatch();
  const studio = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.studiosThunk());
  }, [dispatch]);
  return (
    <>
      <Title title={`Cinema`} />
      <Header />
      <main className={styles["main"]}>
        <span className={styles["tickets-section"]}>
          <ul className={styles["tickets-list"]}>
            {studio.studios?.length > 0 &&
              studio.studios.map((item, idx) => {
                return (
                  <>
                    <li className={styles["ticket"]} key={idx}>
                      <span className={styles["ticket__content"]}>
                        <span className={styles["ticket__content__header"]}>
                          <span className={styles["ticket-image-section"]}>
                            <Image
                              src={item.image}
                              alt={`image`}
                              width={500}
                              height={500}
                              className={styles["ticket-image"]}
                            />
                          </span>
                          <span className={styles["ticket-desc"]}>
                            <p className={styles["ticket-desc__title"]}>
                              {item.name}
                            </p>
                            <p className={styles["ticket-desc__location"]}>
                              {item.address}
                            </p>
                          </span>
                        </span>
                      </span>
                    </li>
                  </>
                );
              })}
          </ul>
        </span>
      </main>
      <Footer />
    </>
  );
};

export default Cinema;
