/*
 * @Author: jweboy
 * @Date: 2022-04-20 17:25:59
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-24 22:11:21
 */
import { useRequest } from '@/hooks/useRequest';
import { getFileInfo } from '@/service/file';
import { Card, Descriptions } from '@douyinfe/semi-ui';
import dayjs from 'dayjs';
import React from 'react';
import { useLocation } from 'react-router-dom';

const FileDetail = () => {
  const { state } = useLocation();
  const { data } = useRequest({
    request: getFileInfo,
    data: {
      bucket: 'assets',
      fileName: state,
    },
  });

  return (
    <Card title="文件信息">
      <Descriptions>
        <Descriptions.Item itemKey="名称">{data.hash}</Descriptions.Item>
        <Descriptions.Item itemKey="大小">{data.fsize}</Descriptions.Item>
        <Descriptions.Item itemKey="类型">{data.mimeType}</Descriptions.Item>
        <Descriptions.Item itemKey="上传时间">
          {dayjs(data.putTime).format('YYYY-MM-DD HH:mm:ss')}
        </Descriptions.Item>
        <Descriptions.Item itemKey="预览">
          <img src={data.url} className="border border-gray-200" width={300} />
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default FileDetail;
