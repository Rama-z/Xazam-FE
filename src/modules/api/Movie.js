import axios from "axios";

// const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/movie`;
const baseUrl = `https://xazam-be.vercel.app/api/xazam/movie`;

export const moviedetail = (id) => axios.get(`${baseUrl}/movie-detail/${id}`);
