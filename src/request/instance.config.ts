import Axios from 'axios';

const token = localStorage.getItem('token');

export const http = Axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: `Bearer ${token ? token.replace(/"/g, '') : ''}`,
  },
});

http.interceptors.response.use((response) => {
  return response.data;
});
