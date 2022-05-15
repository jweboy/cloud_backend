/*
 * @Author: jweboy
 * @Date: 2022-04-19 17:43:06
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 17:47:54
 */
module.exports = {
  path: '/assets',
  view: 'assets',
  routes: [
    {
      path: '/qiniu',
      view: 'qiniu',
      title: '资源',
      routes: [
        {
          path: '/detail',
          view: 'detail',
          title: '文件详情',
        },
        {
          path: '/form',
          view: 'form',
          title: '文件表单',
        },
      ],
    },
    { path: '/aliyun', view: 'aliyun' },
  ],
};
