import { get, post } from '@/utils/request';

export const getCheckinStatus = () => {
  return get({ url: '/juejin/checkin/status' });
};

export const postCheckin = () => {
  return post({ url: '/juejin/checkin' });
};

export const getCheckinList = () => {
  return get({ url: '/juejin/checkin/list' });
};
