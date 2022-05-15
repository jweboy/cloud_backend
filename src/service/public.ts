import { post } from '@/utils/request';

export const postPublicLogin = <T>(data: T) => {
  return post({ url: '/public/login', data });
};
