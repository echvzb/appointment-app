import Axios from 'axios';

export const http = Axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token').replace(/"/g, '')}`,
  },
});

http.interceptors.response.use((response) => {
  return response.data;
});
