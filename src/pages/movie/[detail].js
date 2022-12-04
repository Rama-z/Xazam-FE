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
import styles from "../../styles/MovieDetail.module.css";
import movieAction from "src/redux/actions/movie";

const Detail = () => {
  const [clickText, setClickText] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movieDetail);
  const casts = useSelector((state) => state.movie.movieDetail.cast);
  const catagories = useSelector((state) => state.movie.movieDetail.category);

  const [name, setName] = useState(movies.name);
  const [image, setImage] = useState(movies.image);
  const [director, setDirector] = useState(movies.director);
  const [relasedate, setRelasedate] = useState(movies.relase_date);
  const [duration, setDuration] = useState(movies.duration);
  const [synopsis, setSynopsis] = useState(movies.synopsis);

  const handleClickText = () => {
    setClickText(!clickText);
  };

  useEffect(() => {
    dispatch(
      movieAction.movieDetailThunk(router.query.detail),
      setName,
      setImage,
      setDirector,
      setRelasedate,
      setDuration,
      setSynopsis
    );
  }, [dispatch, router.query.detail]);

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
              src={image}
              alt={name}
              className={styles["image"]}
              width={500}
              height={500}
            />
          </span>
          <span className={styles["desc-main"]}>
            <span className={styles["desc-detail"]}>
              <h3>{name}</h3>
              <span className={styles["catagory-content"]}>
                {catagories.map((result, idx) => (
                  <p key={idx}>{result}</p>
                ))}
              </span>
            </span>
            <span className={styles["desc-secondary"]}>
              <span className={styles["release"]}>
                <p>Release</p>
                <p>{relasedate}</p>
              </span>
              <span className={styles["ridrected-by"]}>
                <p>Directed by</p>
                <p>{director}</p>
              </span>
              <span className={styles["duration"]}>
                <p>Duration</p>
                <p>{duration}</p>
              </span>
              <span className={styles["casts"]}>
                <p>Casts</p>
                <ul className={styles["cast-content"]}>
                  {casts.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </span>
            </span>
          </span>
        </section>
        <section className={styles["section-second"]}>
          <span className={styles["synopsis"]}>
            <h3>Synopsis</h3>
            <p>{synopsis}</p>
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

export default Detail;
