/*
 * @Author: jweboy
 * @Date: 2021-09-29 23:19:30
 * @LastEditors: jweboy
 * @LastEditTime: 2021-10-03 14:28:57
 */
type Menu = {
  title: string;
  icon: string;
  key: React.Key;
  children?: Menu[];
};

type Refs = PlainObject;

type RootState = {
  refs: Refs;
};
