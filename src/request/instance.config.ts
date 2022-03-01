import Axios from 'axios';

export const http = Axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  withCredentials: true,
});

http.interceptors.response.use((response) => {
  return response.data;
});
