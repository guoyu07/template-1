import axios from 'axios';
import {
  Message,
} from 'element-ui';
import router from '../router';

const ZUSER = () => {
  let user = '';
  if (!window.localStorage) {
    console.log('浏览器不支持localstorage');
    this.$message.error({
      showClose: true,
      message: '请升级浏览器，推荐使用现代浏览器',
    });
  } else {
    const storage = window.localStorage;
    user = storage['Z-PROPERTY'];
  }
  return user;
};

export default (method, uri, data) => {
  let resData = '';
  if (method === 'get') {
    return axios.get(uri, {
      baseURL: 'https://api.zhiliaoteam.com',
      headers: {
        'Z-APPKEY': '69ca112fb0837ec7d1e95cea394b14e6',
        'Z-USER': ZUSER(),
      },
      params: data,
    })
    .then((res) => {
      if (res.data.code === -2) {
        Message.error({
          showClose: true,
          message: res.data.msg,
        });
        router.push('/');
        return;
      }

      if (res.data.code !== 0) {
        Message.error({
          showClose: true,
          message: res.data.msg,
        });
        return;
      }

      if (res.data.code === 0) {
        resData = res;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  if (method === 'post') {
    return axios.post(uri, data, {
      baseURL: 'https://api.zhiliaoteam.com',
      headers: {
        'Z-APPKEY': '69ca112fb0837ec7d1e95cea394b14e6',
        'Z-USER': ZUSER(),
      },
    })
    .then((res) => {
      if (res.data.code === -2) {
        Message.error({
          showClose: true,
          message: '对不起，请登录！',
        });
        router.push('/');
        return;
      }

      if (res.data.code !== 0) {
        Message.error({
          showClose: true,
          message: res.data.msg,
        });
        return;
      }

      if (res.data.code === 0) {
        resData = res;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return resData;
};
