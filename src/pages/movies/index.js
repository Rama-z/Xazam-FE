import React, { useState } from "react";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import styles from "../../styles/Movies.module.css";
import sample from "src/assets/images/avatar.webp";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import movieAction from "src/redux/actions/movie";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import Title from "src/components/Title";

const Movies = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const search = router.query.search || "";
  const [disable, setDisable] = useState(true);
  const [disable2, setDisable2] = useState(false);
  const [page, setPage] = useState(1);
  const movies = useSelector((state) => state.movie.movies?.data);
  const next = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(
      movieAction.moviesThunk(
        `search=${router.query.search || ""}&limit=10&page=${page}`
      )
    );
  }, [search, page, dispatch, router]);

  return (
    <>
      <Title title={`Movies`} />
      <Header />
      <main className={styles["main"]}>
        <span className={`${styles["section__header__movie"]}`}>
          <ul className={`${styles["list-movies"]}`}>
            {movies?.map((movie, idx) => {
              return (
                <li className={`${styles["movie"]}`} key={idx}>
                  <Image
                    src={movie.image ? movie.image : sample}
                    alt={`movie`}
                    className={styles["movie-images"]}
                    width={500}
                    height={500}
                  />
                  <h3 className={styles[`title`]}>{movie.name}</h3>
                  <p className={styles["description"]}>{movie.category}</p>
                  <button
                    className={styles["btn-movie"]}
                    onClick={() => router.push(`/movie/${movie.id}`)}
                  >{`Details`}</button>
                </li>
              );
            })}
          </ul>
        </span>
        <div className={styles.button}>
          <Button
            disabled={page !== 1 ? false : true}
            className={`btn btn-primary ${styles.btn}`}
            onClick={(e) => {
              e.preventDefault();
              setPage(page - 1);
              router.push(
                `movies?search=${router.query.search || ""}&limit=10&page=${
                  page - 1
                }`
              );
            }}
          >
            Previous
          </Button>
          <Button
            disabled={page !== next.movies?.totalPage ? false : true}
            className={`btn btn-primary ${styles.btn}`}
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
              router.push(
                `movies?search=${router.query.search || ""}&limit=10&page=${
                  page + 1
                }`
              );
            }}
          >
            Next
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
