import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/xazam/auth`;
const baseUrl2 = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/xazam`;

const config = (token) => {
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
};
// const baseUrl = `http://localhost:8080/api/xazam/auth`;

export const register = (body) => axios.post(`${baseUrl}/register`, body);
export const login = (body) => axios.post(`${baseUrl}/login`, body);
export const logout = (token) => axios.delete(`${baseUrl}/logout`, config(token));
export const forgot = (body) => axios.post(`${baseUrl}/reset-password`, body);
export const confirm = (body) => axios.patch(`${baseUrl}/reset-password`, body);
export const reset = (body) => axios.patch(`${baseUrl}/reset-password`, body);
export const change = (body, token) => axios.patch(`${baseUrl2}/profile/change-password`, body, config(token));

export const profiles = (token) => axios.get(`${baseUrl2}/profile`, config(token));
export const editprofilesApi = (body, token) => axios.patch(`${baseUrl2}/profile/edit`, body, config(token));
