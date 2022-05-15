/*
 * @Author: jweboy
 * @Date: 2022-04-20 14:09:18
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 14:09:18
 */
import React from 'react';

export const useMount = (callback) => {
  React.useEffect(() => {
    callback();
  }, []);
};
