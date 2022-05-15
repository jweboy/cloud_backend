/*
 * @Author: jweboy
 * @Date: 2021-10-05 17:59:30
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-24 22:09:12
 */
import * as React from 'react';
import * as axios from 'axios';
import { isFunction, isPromise } from '@/utils/lodash';

interface Options {
  request: Promise<T> | Function;
  data?: Q;
  depends?: any[];
  /** 是否需要手动触发 */
  manual?: boolean;
  onRequest?: (data: any) => void;
}

const initData = { items: [], data: {} };

export const useRequest = <T, Q>(options: Options) => {
  const { request, depends = [], manual, data } = options;
  const [loading, setLoading] = React.useState(false);
  // @ts-ignore
  const [result, setResult] = React.useState<T>(initData);

  const handleRequest = (query = {}) => {
    setLoading(true);
    let handler;
    const body = { ...data, ...query };

    if (isPromise(request)) {
      handler = request;
    }

    if (isFunction(request)) {
      handler = (request as Function)(body);
    }

    (handler as axios.AxiosPromise<T>)
      .then((resp) => {
        const { data } = resp;
        let result = initData;
        result = data.items ? data : { data };
        setLoading(false);
        setResult(result);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    handleRequest();
  }, depends);

  // console.log(333, result);

  return {
    loading,
    ...result,
    ...(manual && { onRequest: handleRequest }),
  } as const;
};
