import Axios from 'axios';

const http = Axios.create({
  baseURL: 'https://appointment-api-thaunze.herokuapp.com/api/v1',
});

http.interceptors.response.use((response) => {
  return response.data;
});

export default http;
