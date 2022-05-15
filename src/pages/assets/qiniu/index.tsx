/*
 * @Author: jweboy
 * @Date: 2022-04-19 20:07:45
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-24 22:08:51
 */
import FileCard from '@/components/FileCard';
import { qiniuAssetDetailPath } from '@/constants/path';
import { useRequest } from '@/hooks/useRequest';
import { getBuckets, getFiles } from '@/service/file';
import {
  Avatar,
  Button,
  Card,
  Col,
  Dropdown,
  Row,
  Space,
  Typography,
} from '@douyinfe/semi-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Filters from './components/Filters';

const Qiniu = () => {
  // const { data } = useRequest<File.Base[], {}>(getBuckets);
  const { items, onRequest } = useRequest<File.Base[], {}>({
    request: getFiles,
    data: {
      prefix: 'project_showcase',
      size: 10,
    },
    manual: true,
  });
  const navigate = useNavigate();

  const handleDeleteFile = async (data) => {
    console.log(data);
  };

  const handleCreateRecord = () => {
    navigate('/assets/qiniu/form');
  };

  const handleCardClick = (id) => {
    navigate(qiniuAssetDetailPath, { state: id });
  };

  const handleFilterChange = (data) => {
    console.log(data);
    onRequest({ prefix: data.directory });
  };

  return (
    <Space vertical spacing="medium" align="start" className="w-full">
      <Filters onChange={handleFilterChange} />
      <Button type="primary" theme="solid" onClick={handleCreateRecord}>
        新建
      </Button>
      <Row gutter={[16, 16]} style={{ height: 400, overflowY: 'auto' }}>
        {items.map((item, index) => {
          const names = item.key.split('/').filter((item) => item !== '');
          let result: any[] = names;
          if (names.length === 1) {
            result = ['-', ...names];
          }
          const [folder, fileName] = result;
          return (
            <Col span={8} key={item.key}>
              <FileCard
                id={item.key}
                folder={folder}
                file={fileName}
                mimeType={item.mimeType}
                onDelete={handleDeleteFile}
                onClick={handleCardClick}
              />
            </Col>
          );
        })}
      </Row>
    </Space>
  );
};

export default Qiniu;
