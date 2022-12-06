import Axios from "axios";

const config = (token) => {
  return {
    headers: {
<<<<<<< HEAD
      authorization: `Bearer ${token}`
    },
  }
}

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/xazam/transaction`;

const gethistory = (token) => Axios.get(`${BASE_URL}/history`, config(token));

export { gethistory };
=======
      authorization: `Bearer ${token}`,
    },
  };
};

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/XAZAM/transaction`;

const createTrans = (data, token) =>
  Axios.post(`${BASE_URL}/create`, data, config(token));
const gethistory = (token) => Axios.get(`${BASE_URL}/history`, config(token));

export { gethistory, createTrans };
>>>>>>> 43055339896278aee4cd635e89bcf7324ec28514
