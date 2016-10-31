import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080'
});

export default (uri, method, data) => {

  if (method === 'get') {
    return axiosInstance.get(uri, {
        params: data
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (method === 'post') {
    return axiosInstance.get(uri, data)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  }

}