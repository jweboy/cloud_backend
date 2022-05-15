import request, { get } from '../utils/request';

/*
 * @Author: jweboy
 * @Date: 2021-10-05 12:44:23
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-24 14:26:21
 */
export const getFiles = <Q>(query?: Q) => {
  return get({ url: '/files', params: query });
};

export const getFileInfo = <Q>(query?: Q) => {
  return get({ url: '/file/info', params: query });
};

export const deleteFile = <Q>(data: Q) => {
  return request({ method: 'DELETE', url: '/file/delete', data });
};

export const getBuckets = () => {
  return get({ url: '/buckets' });
};
