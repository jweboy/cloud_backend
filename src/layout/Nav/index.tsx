/*
 * @Author: jweboy
 * @Date: 2022-04-19 19:05:37
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 10:34:39
 */
import { Nav } from '@douyinfe/semi-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SystemNavbar = React.memo(() => {
  const navigate = useNavigate();
  const handleSelect = (data) => {
    navigate(`/${data.itemKey}`);
  };
  return (
    <Nav
      className="h-full"
      defaultOpenKeys={['tools']}
      items={[
        // {
        //   text: '资源管理',
        //   itemKey: 'assets',
        //   items: [
        //     { itemKey: 'assets/qiniu', text: '七牛云' },
        //     { itemKey: 'assets/aliyun', text: '阿里云' },
        //   ],
        // },
        {
          text: '工具集',
          itemKey: 'tools',
          items: [
            { itemKey: 'tools/color', text: '颜色转换' },
            { itemKey: 'tools/download', text: '文件下载' },
          ],
        },
        {
          itemKey: 'schedule',
          text: '定时任务',
          items: [{ itemKey: 'schedule/juejin', text: '掘金签到' }],
        },
      ]}
      onSelect={handleSelect}
    />
  );
});

export default SystemNavbar;
