/*
 * @Author: jweboy
 * @Date: 2021-10-05 12:39:34
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-22 18:31:00
 */
import { AxiosRequestConfig } from 'axios';
import qs from 'qs';

export interface CustomConfig {
  contentType: 'json' | 'form' | 'file';
  customError?: boolean;
}

export const BASE_URL = 'http://localhost:5001/api';
// export const BASE_URL = 'http://jweboy.com:5001/api';

// console.log(process.env.REACT_APP_API_URL);

export const config = {
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: BASE_URL,
  responseType: 'json',
  timeout: 3000, // 3s超时
  withCredentials: false, // 是否允许携带cookie
  transformRequest: [
    function transformRequest(data, headers) {
      if (headers['Content-Type'] === 'application/json') {
        return JSON.stringify(data);
      }
      if (headers['Content-Type'] === 'multipart/form-data') {
        return data;
      }
      return qs.stringify(data);
    },
  ],
};

export const getContentType = (type?: CustomConfig['contentType']) => {
  switch (type) {
    case 'json':
      return 'application/json';
    case 'form':
      return 'application/x-www-form-urlencoded';
    case 'file':
      return 'multipart/form-data';
    default:
      return 'application/json';
  }
};
