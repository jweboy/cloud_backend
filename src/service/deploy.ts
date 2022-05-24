import { get, post } from '@/utils/request';

export const postProject = <T>(data: T) => {
  return post({ url: '/project', data });
};

export const getProjectList = <T>(data: T) => {
  return get({ url: '/project/list', data });
};

export const getProjectDetail = <T>(params: T) => {
  return get({ url: '/project/detail', params });
};
