/*
 * @Author: jweboy
 * @Date: 2022-04-22 12:34:02
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-22 13:02:49
 */
import React from 'react';
import byteSize from 'byte-size';
import { Space } from '@douyinfe/semi-ui';

const Speed = (props: { speed: number | null; peak: number | null }) => {
  const render = (name: string, value: number) => (
    <Space>
      <span>{name}</span>
      <span>{byteSize(value || 0, { precision: 2 }).toString()}/s</span>
    </Space>
  );

  return (
    <Space style={{ marginRight: 8 }}>
      {render('最大上传速度', props.peak || 0)}
      {render('实时平均速度', props.speed || 0)}
    </Space>
  );
};

export default Speed;
