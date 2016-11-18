import axios from 'axios';
import { Toast } from 'mint-ui';
import router from '../router';

const ROOTURL = '';

const axiosInstance = axios.create({
  baseURL: ROOTURL,
});

export default (method, uri, data) => {
  let response = '';

  if (method === 'get') {
    response = axiosInstance.get(uri, {
      params: data,
    });
  }

  if (method === 'post') {
    response = axiosInstance.post(uri, data, {
    });
  }

  if (method === 'put') {
    response = axiosInstance.put(uri, data, {
    });
  }

  if (method === 'delete') {
    response = axiosInstance.delete(uri, {
      params: data,
    });
  }

  if (response === '') {
    return;
  }

  return response.then((res) => {
      return res;
  })
  .catch((error) => {
    console.log(error);
  });
};
