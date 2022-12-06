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

export { gethistory, createTrans };
