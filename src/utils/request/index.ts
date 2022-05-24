import { Toast } from '@douyinfe/semi-ui';
import * as axios from 'axios';
import { config, getContentType } from './config';

// 创建请求实例
const instance = axios.default.create(config);

// 请求错误的业务场景
// const errorScenes = [LOGIN_EXPIRED, NOT_LOGGED_IN, INVALID_TOKEN, NO_TOKEN];

// 请求拦截器
instance.interceptors.request.use(
  function request(config: RequestConfig) {
    // 获取最新的 user 数据
    // const user = storage.get('user');

    // 请求 token
    config.headers.token = 'token';
    // config.headers['X-B3-TraceId'] = hashGenerator(32);
    config.headers['Content-Type'] = getContentType(config.contentType);

    // 文件类型请求需要将文件内容拼接到form表单里
    // if (config.contentType === 'file') {
    //   const formData = new FormData();
    //   formData.append('file', config.data);
    //   config.data = formData;
    // }

    return config;
  },
  function response(err: Error) {
    return Promise.reject(err);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  async function request(res: AxiosResponse) {
    const { code, msg, success, type } = res.data;
    const { responseType } = res.config;
    const isBlob = responseType === 'blob';
    const isJson = type === 'application/json';

    // 登录过期、token过期、token无效、未登录
    // if (!isBlob && !success) {
    //   if (errorScenes.includes(code)) {
    //     history.push('/login');
    //     throw Error('登录失效');
    //   }
    //   throw Error(msg);
    // }

    // 请求错误，如 rpc 调用异常等
    // if (isBlob && !success && isJson) {
    //   throw Error(msg || '导出失败');
    // } else {

    // }

    // success
    if (code === 0) {
      return res.data;
    }

    Toast.error(msg);
    return Promise.reject(msg);
  },
  function respHander(err: AxiosError) {
    const { status } = err.response || {};
    console.log('err =>', err.response);

    let msg = '';
    const isTimeout = err.code === 'ECONNABORTED';

    // switch (status) {
    //   case REQUEST_SERVER_ERROR:
    //     msg = '服务器错误';
    //     break;
    //   case REQUEST_NOT_FOUND:
    //     msg = '请求地址不存在';
    //     break;
    //   default:
    //     msg = err.message;
    //     break;
    // }

    if (err.message === 'Network Error') {
      msg = '网络错误，请稍候重试';
    }
    if (isTimeout) {
      msg = '请求超时，请稍候重试';
    }
    // message.error(msg);
    throw Error(msg);
  },
);

const request = <T, R = Response<T>>(config: RequestConfig) => {
  // 规避空请求引发的错误
  if (!config.url) {
    return;
  }
  return instance.request<T, R>(config).catch((err) => {
    // 如果不存在自定义错误提示就通用处理，否则就放行错误自行处理
    if (!config.customError) {
      // 统一抛出错误信息
      // message.error(err.message);
    }

    // return Promise.reject(err);
    // pending 状态可以中断原 Promise 执行链，从而不再控制台抛出错误
    return new Promise(() => {});
  });
};

// get 请求函数
export const get = <T, R = Response<T>>(
  config: axios.AxiosRequestConfig = {},
) => {
  const { contentType = 'json', ...restProps } = config;

  return request<T, R>({
    ...restProps,
    contentType,
    method: 'GET',
  });
};

// post 请求函数
export const post = async <T, R = Response<T>>(config: RequestConfig = {}) => {
  const { contentType = 'json', ...restProps } = config;

  return request<T, R>({
    ...restProps,
    contentType,
    method: 'POST',
  });
};

export default request;
