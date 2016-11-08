import { Message } from 'element-ui';
import router from '../router';

// 判断登录状态
export default () => {
  if (!window.localStorage) {
    console.log('浏览器不支持localstorage');
    Message.error({
      showClose: true,
      message: '请升级浏览器，推荐使用现代浏览器',
    });
  } else {
    const storage = window.localStorage;
    if (!storage['Z-PROPERTY']) {
      Message.error({
        showClose: true,
        message: '对不起，请登录！',
      });
      router.push('/');
    }
  }
};
