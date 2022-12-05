import Axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/xazam/movie`;

const movies = (params) => Axios.get(`${BASE_URL}/?${params}`);
const moviedetail = (id) => Axios.get(`${BASE_URL}/movie-detail/${id}`);
const showtimes = () => Axios.get(`${BASE_URL}/showmovie`);
const showtime = (params) => Axios.get(`${BASE_URL}/showmovie${params}`);
const createmovie = (body) => Axios.post(`${BASE_URL}/create-movie`, body);
const deletemovie = (id) => Axios.delete(`${BASE_URL}/delete/${id}`);
const studios = () =>
  Axios.get(`
http://localhost:8080/api/xazam/movie/studio`);

export {
  movies,
  moviedetail,
  showtimes,
  showtime,
  createmovie,
  deletemovie,
  studios,
};
