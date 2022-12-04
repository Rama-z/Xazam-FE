import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import profile from "../../assets/images/profile.png";
import Search from "components/Search";
import movieAction from "src/redux/actions/movie";

import styles from "../../styles/MovieDetail.module.css";

// const myLoader = { src, width, quality };
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Detail = ({ datas }) => {
  const [clickText, setClickText] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const moviesDetail = useSelector((state) => state.movie);
  // dispatch(movieAction.moviedetailFulfilled(datas));

  useEffect(() => {
    dispatch(movieAction.moviedetailFulfilled(datas));
  }, [router.query.id, dispatch, datas]);

  const handleClickText = () => {
    setClickText(!clickText);
  };

  // useEffect(() => {
  //   dispatch(movieAction.movieDetailThunk(router.query.detail,setName, setImage, setDirector,
  //   setRelasedate, setDuration, setSynopsis
  //     ));
  // }, [dispatch, router.query.detail]);

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
              loader={myLoader}
              src={moviesDetail.data.image}
              width={90}
              height={90}
              alt={``}
              className={styles["image"]}
            />
          </span>
          <span className={styles["desc-main"]}>
            <span className={styles["desc-detail"]}>
              <h3>{``}</h3>
              <p>{``}</p>
            </span>
            <span className={styles["desc-secondary"]}>
              <span className={styles["release"]}>
                <p>Release</p>
                <p>{``}</p>
              </span>
              <span className={styles["ridrected-by"]}>
                <p>Directed by</p>
                <p>{``}</p>
              </span>
              <span className={styles["duration"]}>
                <p>Duration</p>
                <p>{``}</p>
              </span>
              <span className={styles["casts"]}>
                <p>Casts</p>
                <ul className={styles["cast-content"]}>
                  <li>{``}</li>
                </ul>
              </span>
            </span>
          </span>
        </section>
        <section className={styles["section-second"]}>
          <span className={styles["synopsis"]}>
            <h3>Synopsis</h3>
            <p>
              Thrilled by his experience with the Avengers, Peter returns home,
              where he lives with his Aunt May, under the watchful eye of his
              new mentor Tony Stark, Peter tries to fall back into his normal
              daily routine - distracted by thoughts of proving himself to be
              more than just your friendly neighborhood Spider-Man - but when
              the Vulture emerges as a new villain, everything that Peter holds
              most important will be threatened.
            </p>
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
              <li className={styles["ticket"]}>
                <span className={styles["ticket__content"]}>
                  <span className={styles["ticket__content__header"]}>
                    <span className={styles["ticket-image-section"]}>
                      <Image
                        src={``}
                        alt={`Image`}
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
                  <span>
                    <ul className={styles["date"]}>
                      <li>{`08:30am`}</li>
                    </ul>
                  </span>
                  <span className={styles["price"]}>
                    <p>Price</p>
                    <p>{`$10.00/seat`}</p>
                  </span>
                  <span className={styles["btn-tickets-section"]}>
                    <button
                      className={styles["btn-book"]}
                      onClick={() => {
                        router.push("/orderpage");
                      }}
                    >
                      Book Now
                    </button>
                    <p>Add to cart</p>
                  </span>
                </span>
              </li>
              <li className={styles["ticket"]}>
                <span className={styles["ticket__content"]}>
                  <span className={styles["ticket__content__header"]}>
                    <span className={styles["ticket-image-section"]}>
                      <Image
                        src={``}
                        alt={`Image`}
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
                  <span>
                    <ul className={styles["date"]}>
                      <li>{`08:30am`}</li>
                    </ul>
                  </span>
                  <span className={styles["price"]}>
                    <p>Price</p>
                    <p>{`$10.00/seat`}</p>
                  </span>
                  <span className={styles["btn-tickets-section"]}>
                    <button className={styles["btn-book"]}>Book Now</button>
                    <p>Add to cart</p>
                  </span>
                </span>
              </li>
              <li className={styles["ticket"]}>
                <span className={styles["ticket__content"]}>
                  <span className={styles["ticket__content__header"]}>
                    <span className={styles["ticket-image-section"]}>
                      <Image
                        src={``}
                        alt={`Image`}
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
                  <span>
                    <ul className={styles["date"]}>
                      <li>{`08:30am`}</li>
                    </ul>
                  </span>
                  <span className={styles["price"]}>
                    <p>Price</p>
                    <p>{`$10.00/seat`}</p>
                  </span>
                  <span className={styles["btn-tickets-section"]}>
                    <button className={styles["btn-book"]}>Book Now</button>
                    <p>Add to cart</p>
                  </span>
                </span>
              </li>
            </ul>
          </span>
        </section>
        <section className={styles["pagination"]}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const baseUrl = `https://xazam-be.vercel.app/api/xazam/movie/movie-detail/${context.params.id}`;

    const result = await fetch(baseUrl);
    const datas = await result.json();
    return {
      props: {
        datas,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: err,
      },
    };
  }
};

export default Detail;
