import Axios from "axios";

const config = (token) => {
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
};

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/XAZAM/transaction`;

const createTrans = (data, token) =>
  Axios.post(`${BASE_URL}/create`, data, config(token));
const gethistory = (token) => Axios.get(`${BASE_URL}/history`, config(token));
const getSeatAll = (token) => Axios.get(`${BASE_URL}/allseat`, config(token));
const getSeatTag = (params) => Axios.get(`${BASE_URL}/selectseat?${params}`);

export { gethistory, createTrans, getSeatAll, getSeatTag };
