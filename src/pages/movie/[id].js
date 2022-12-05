import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import profile from "../../assets/images/profile.png";
import ebv from "../../assets/images/ebu.png";
import cineone from "../../assets/images/cineone.png";
import hiflix from "../../assets/images/hiflix.png";
import spider from "../../assets/images/spiderman.png";
import Search from "components/Search";
import styles from "../../styles/MovieDetail.module.css";
import movieAction from "src/redux/actions/movie";
import sample from "src/assets/images/avatar.webp";
const Detail = () => {
  const [clickText, setClickText] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);

  const handleClickText = () => {
    setClickText(!clickText);
  };

  useEffect(() => {
    dispatch(movieAction.movieDetailThunk(router.query.id));
  }, [dispatch, router.query.id]);

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
                // spider
              }
              alt={name}
              className={styles["image"]}
              width={500}
              height={500}
            />
          </span>
          <span className={styles["desc-main"]}>
            <span className={styles["desc-detail"]}>
              <h3 className={styles["h3-main"]}>
                {movies.movieDetail?.name}
                Spider-Man: Homecoming
              </h3>
              <span className={styles["catagory-content"]}>
                Adventure, Action, Sci-Fi
                {movies.movieDetail?.category?.map((result, idx) => (
                  <p key={idx}>{result}</p>
                ))}
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
                        June 28, 2017
                      </p>
                    </span>
                  </div>
                  <div className={`col ${styles["right-content"]}`}>
                    <span className={styles["ridrected-by"]}>
                      <p className={`${styles["release"]}`}>Directed by</p>

                      <p className={`${styles["bef-rel"]}`}>
                        Jon Watss
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
                        2 hours 13 minutes
                        {movies.movieDetail?.duration}
                      </p>
                    </span>
                  </div>
                  <div class="col">
                    <span className={styles["casts"]}>
                      <p className={`${styles["release"]}`}>Casts</p>
                      <p className={styles["cast-content"]}>
                        Tom Holland, Michael Keaton, Robert Downey Jr., ...
                        {movies.movieDetail?.cast?.map((result, idx) => (
                          <li key={idx}>{result}</li>
                        ))}
                      </p>
                    </span>
                  </div>
                </div>
                <hr />
                <h3 className={styles["synop"]}>Synopsis</h3>
                <p className={styles["story"]}>
                  Thrilled by his experience with the Avengers, Peter returns
                  home, where he lives with his Aunt May, under the watchful eye
                  of his new mentor Tony Stark, Peter tries to fall back into
                  his normal daily routine - distracted by thoughts of proving
                  himself to be more than just your friendly neighborhood
                  Spider-Man - but when the Vulture emerges as a new villain,
                  everything that Peter holds most important will be threatened.
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
              <li className={styles["ticket"]}>
                <span className={styles["ticket__content"]}>
                  <span className={styles["ticket__content__header"]}>
                    <span className={styles["ticket-image-section"]}>
                      <Image
                        src={cineone}
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
                      <div className={`row ${styles["timeset"]}`}>
                        <div class="col">{`08:30am`}</div>
                        <div class="col">{`10:30pm`}</div>
                        <div class="col">{`12:00pm`}</div>
                        <div class="col">{`02:00pm`}</div>
                      </div>
                      <div className={`row ${styles["timesets"]}`}>
                        <div class="col">{`04:30pm`}</div>
                        <div class="col">{`07:00pm`}</div>
                        <div class="col">{`08:00pm`}</div>
                        <div class="col"></div>
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
                        src={ebv}
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
                      <div className={`row ${styles["timeset"]}`}>
                        <div class="col">{`08:30am`}</div>
                        <div class="col">{`10:30pm`}</div>
                        <div class="col">{`12:00pm`}</div>
                        <div class="col">{`02:00pm`}</div>
                      </div>
                      <div className={`row ${styles["timesets"]}`}>
                        <div class="col">{`04:30pm`}</div>
                        <div class="col">{`07:00pm`}</div>
                        <div class="col">{`08:00pm`}</div>
                        <div class="col"></div>
                      </div>
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
                        src={hiflix}
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
                      <div className={`row ${styles["timeset"]}`}>
                        <div class="col">{`08:30am`}</div>
                        <div class="col">{`10:30pm`}</div>
                        <div class="col">{`12:00pm`}</div>
                        <div class="col">{`02:00pm`}</div>
                      </div>
                      <div className={`row ${styles["timesets"]}`}>
                        <div class="col">{`04:30pm`}</div>
                        <div class="col">{`07:00pm`}</div>
                        <div class="col">{`08:00pm`}</div>
                        <div class="col"></div>
                      </div>
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
          <section className={styles["pagination"]}>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Detail;
