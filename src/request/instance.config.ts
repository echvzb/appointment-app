import Axios from 'axios';

export const http = Axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
});

http.interceptors.response.use((response) => {
  return response.data;
});
