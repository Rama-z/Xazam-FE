import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-bootstrap";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import profile from "../../assets/images/profile.png";
import Search from "components/Search";
import styles from "../../styles/MovieDetail.module.css";
import movieAction from "src/redux/actions/movie";
import sample from "src/assets/images/avatar.webp";
const Detail = ({ datas }) => {
  const [clickText, setClickText] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);
  const auth = useSelector((state) => state.auth);
  const [body, setBody] = useState({});
  const [selectTime, setTime] = useState("");

  const handleClickText = () => {
    setClickText(!clickText);
  };

  useEffect(() => {
    setBody({
      ...body,
      tsm_id: selectTime,
      movie_id: movies.movieDetail?.id,
      token: auth.userData.token,
    });
  }, [selectTime, auth.userData.token]);

  useEffect(() => {
    dispatch(movieAction.movieDetailFulfilled(datas.data));
    dispatch(movieAction.studiosThunk());
  }, [dispatch, router]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(movieAction.payment(body));
    router.push("/orderpage");
  };

  return (
    <>
      <Header
        profileAndBtn={
          <>
            <Image src={profile} alt="/" />
          </>
        }
        propsOnclick={handleClickText}
      />
      <Search showInputText={clickText} />
      <main className={styles["main"]}>
        <section className={styles["section-first"]}>
          <span className={styles["desc-image"]}>
            <Image
              src={
                movies.movieDetail?.image ? movies.movieDetail.image : sample
              }
              alt={name}
              className={styles["image"]}
              width={500}
              height={500}
            />
          </span>
          <span className={styles["desc-main"]}>
            <span className={styles["desc-detail"]}>
              <h3 className={styles["h3-main"]}>{movies.movieDetail?.name}</h3>
              <span
                className={styles["catagory-content"]}
                style={{ display: "flex" }}
              >
                {movies.movieDetail?.category?.map((result, idx) => {
                  console.log(movies.movieDetail.category.length - 1);
                  console.log(idx === movies.movieDetail.category.length - 1);
                  if (idx !== movies.movieDetail.category.length - 1)
                    return <p key={idx}>{`${result},  `}</p>;
                  if (idx === movies.movieDetail.category.length - 1)
                    return <p key={idx}>{`${result}`}</p>;
                })}
              </span>
            </span>
            <span className={`row ${styles["desc-secondary"]}`}>
              <div className={`container ${styles["desc-container"]}`}>
                <div className={`row ${styles["firsttwo"]}`}>
                  <div className={`col ${styles["befor-rilis"]}`}>
                    <span className={`${styles["release"]}`}>
                      <p>Release Date</p>
                      <p className={`${styles["bef-rel"]}`}>
                        {movies.movieDetail?.relase_date}
                      </p>
                    </span>
                  </div>
                  <div className={`col ${styles["right-content"]}`}>
                    <span className={styles["ridrected-by"]}>
                      <p className={`${styles["release"]}`}>Directed by</p>

                      <p className={`${styles["bef-rel"]}`}>
                        {movies.movieDetail?.director}
                      </p>
                    </span>
                  </div>
                </div>

                <div className={`row ${styles["sectwo"]}`}>
                  <div class="col">
                    <span className={styles["duration"]}>
                      <p className={`${styles["release"]}`}>Duration</p>
                      <p className={`${styles["bef-rel"]}`}>
                        {movies.movieDetail?.duration}
                      </p>
                    </span>
                  </div>
                  <div class="col">
                    <span className={styles["casts"]}>
                      <p className={`${styles["release"]}`}>Casts</p>
                      <div className={styles["cast-content"]}>
                        {movies.movieDetail?.cast?.map((result, idx) => (
                          <li key={idx}>{result}</li>
                        ))}
                      </div>
                    </span>
                  </div>
                </div>
                <hr />
                <h3 className={styles["synop"]}>Synopsis</h3>
                <p className={styles["story"]}>
                  {movies.movieDetail?.synopsis}
                </p>
              </div>
            </span>
          </span>
        </section>
        <section className={styles["section-third"]}>
          <h1>Showtimes and Tickets</h1>
          <span className={styles["date-and-location"]}>
            <span className={styles["schedule"]}>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                className={styles["schedule-input"]}
              />
            </span>
            <span className={styles["location"]}>
              <select name="" id="" className={styles["select-location"]}>
                <option value="">Jakarta</option>
                <option value="">Surabaya</option>
                <option value="">Makassar</option>
              </select>
            </span>
          </span>
          <span className={styles["tickets-section"]}>
            <ul className={styles["tickets-list"]}>
              {movies.studios?.length > 0 &&
                movies.studios.map((item, idx) => {
                  return (
                    <li className={styles["ticket"]} key={idx}>
                      <span className={styles["ticket__content"]}>
                        <span className={styles["ticket__content__header"]}>
                          <span className={styles["ticket-image-section"]}>
                            <Image
                              src={item.image}
                              alt="logo"
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
                        <span className={styles.timecontainer}>
                          <ul className={styles["date"]}>
                            <div className={`row ${styles["timeset"]}`}>
                              <div
                                onClick={() => {
                                  setTime("");
                                  setTime(
                                    selectTime === "08:30" ? "" : "08:30"
                                  );
                                }}
                                class={
                                  selectTime === "08:30"
                                    ? `col ${styles.time2}`
                                    : `col ${styles.time}`
                                }
                              >{`08:30am`}</div>
                              <div
                                onClick={() => {
                                  setTime("");
                                  setTime(
                                    selectTime === "10:30" ? "" : "10:30"
                                  );
                                }}
                                class={
                                  selectTime === "10:30"
                                    ? `col ${styles.time2}`
                                    : `col ${styles.time}`
                                }
                              >{`10:30am`}</div>
                              <div
                                onClick={() => {
                                  setTime("");
                                  setTime(
                                    selectTime === "12:00" ? "" : "12:00"
                                  );
                                }}
                                class={
                                  selectTime === "12:00"
                                    ? `col ${styles.time2}`
                                    : `col ${styles.time}`
                                }
                              >{`12:00pm`}</div>
                            </div>
                            <div className={`row ${styles["timesets"]}`}>
                              <div
                                onClick={() => {
                                  setTime("");
                                  setTime(
                                    selectTime === "16:30" ? "" : "16:30"
                                  );
                                }}
                                class={
                                  selectTime === "16:30"
                                    ? `col ${styles.time2}`
                                    : `col ${styles.time}`
                                }
                              >{`04:30pm`}</div>
                              <div
                                onClick={() => {
                                  setTime("");
                                  setTime(
                                    selectTime === "19:00" ? "" : "19:00"
                                  );
                                }}
                                class={
                                  selectTime === "19:00"
                                    ? `col ${styles.time2}`
                                    : `col ${styles.time}`
                                }
                              >{`07:00pm`}</div>
                              <div
                                onClick={() => {
                                  setTime("");
                                  setTime(
                                    selectTime === "20:30" ? "" : "20:30"
                                  );
                                }}
                                class={
                                  selectTime === "20:30"
                                    ? `col ${styles.time2}`
                                    : `col ${styles.time}`
                                }
                              >{`08:30pm`}</div>
                            </div>
                          </ul>
                        </span>
                        <span className={styles["price"]}>
                          <p>Price</p>
                          <p>{`$10.00/seat`}</p>
                        </span>
                        <span className={styles["btn-tickets-section"]}>
                          <button
                            className={styles["btn-book"]}
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(
                                movieAction.payment({
                                  ...body,
                                  studio: item.name,
                                })
                              );
                              router.push("/orderpage");
                            }}
                          >
                            Book Now
                          </button>
                          <p>Add to cart</p>
                        </span>
                      </span>
                    </li>
                  );
                })}
            </ul>
          </span>
          {/* <section className={styles["pagination"]}>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
              </section> */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  try {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/xazam/movie/movie-detail/${id}`;
    const result = await fetch(baseUrl);
    const datas = await result.json();
    return {
      props: {
        datas,
      },
    };
  } catch (err) {
    return {
      props: {
        datas: { err },
      },
    };
  }
};

export default Detail;
