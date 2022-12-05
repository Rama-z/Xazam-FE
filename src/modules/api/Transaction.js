import Axios from "axios";

const config = (token) => {
  return {
    headers: {
      authorization: `Bearer ${token}`
    },
  }
}

const BASE_URL = `NEXT_PUBLIC_BACKEND_URL/transaction`;

const gethistory = (token) => Axios.get(`${BASE_URL}/history`, config(token));

export { gethistory };