import React from "react";
// import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import spiderman from "../../assets/images/spiderman.png"
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Input } from "@chakra-ui/react";
import profile from "../../assets/images/profile.png";
import Search from "components/Search";

import styles from "../../styles/MovieDetail.module.css";

const Detail = () => {
  const [clickText, setClickText] = useState(false);

  const handleClickText = () => {
    setClickText(!clickText);
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
            <Image src={spiderman} alt={`movie cover`} className={styles["image"]} />
          </span>
          <span className={styles["desc-main"]}>
            <span className={styles["desc-detail"]}>
              <h3>{`Spider-Mans: Homecoming`}</h3>
              <p>{`Advanture, Action, Sci-Fi`}</p>
            </span>
            <span className={styles["desc-secondary"]}>
              <span className={styles["release"]}>
                <p>Release</p>
                <p>{`June 28, 2017`}</p>
              </span>
              <span className={styles["ridrected-by"]}>
                <p>Directed by</p>
                <p>{`Jon Watss`}</p>
              </span>
              <span className={styles["duration"]}>
                <p>Duration</p>
                <p>{`2 hours 13 minutes `}</p>
              </span>
              <span className={styles["costs"]}>
                <p>Costs</p>
                <p>{`Tom Holland, Michael Keaton, Robert Downey Jr., ...`}</p>
              </span>
            <p>asdjavsdvasjhdassaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadsadasdassssssssssssssssssssssssssssssssssssdadasdsadqwdqwdqwjhquwgduyqwjbuywqud</p>
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

export default Detail;
