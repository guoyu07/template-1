import { Message } from 'element-ui';
import router from '../router';

// 判断是否选择社区
export default () => {
  if (!window.localStorage) {
    console.log('浏览器不支持localstorage');
    Message.error({
      showClose: true,
      message: '请升级浏览器，推荐使用现代浏览器',
    });
  } else {
    const storage = window.localStorage;
    if (!storage.communitySelected) {
      Message.error({
        showClose: true,
        message: '请先选择社区！',
      });
      router.push('/home');
    }
  }
};
