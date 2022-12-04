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

const Movies = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const search = router.query.search || "";
  const [page, setPage] = useState(1);
  const movies = useSelector((state) => state.movie.movies?.data);

  useEffect(() => {
    dispatch(
      movieAction.moviesThunk(
        `search=${router.query.search || ""}&limit=10&page=${page}`
      )
    );
  }, [search, page]);

  return (
    <>
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
                    // onClick={() =>
                    //   router.push({
                    //     pathname: "/movie/[id]",
                    //     query: { id: `${movie.id}` },
                    //   })
                    // }
                  >{`Details`}</button>
                </li>
              );
            })}
          </ul>
        </span>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
