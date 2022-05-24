import { get, post } from '@/utils/request';

export const getCheckinStatus = () => {
  return get({ url: '/juejin/checkin/status' });
};

export const postCheckin = <T>(data: T) => {
  return post({ url: '/juejin/checkin', data });
};

export const getCheckinList = () => {
  return get({ url: '/juejin/checkin/list' });
};
