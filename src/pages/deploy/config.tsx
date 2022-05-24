import { DEPLOY_FORM_PATH, DEPLOY_PUBLISH_PATH } from '@/constants/path';
import { serializateUrlWithQuery } from '@/utils/location';
import { Space, Typography } from '@douyinfe/semi-ui';
import React from 'react';
import { Link } from 'react-router-dom';

export const columns = [
  {
    dataIndex: 'application',
    title: '应用名',
  },
  {
    dataIndex: 'repo_url',
    title: 'git仓库',
  },
  {
    dataIndex: 'create_date',
    title: '创建时间',
  },
  {
    dataIndex: 'update_date',
    title: '更新时间',
  },
];

export const useColumns = () => {
  const fields = React.useMemo(() => {
    return [
      ...columns,
      {
        dataIndex: 'id',
        title: '操作',
        render(id, record) {
          const editState = { id };
          const publishState = {
            repo_url: record.repo_url,
            application: record.application,
          };
          const editUrl = serializateUrlWithQuery(DEPLOY_FORM_PATH, editState);
          const publishUrl = serializateUrlWithQuery(
            DEPLOY_PUBLISH_PATH,
            publishState,
          );

          return (
            <Space>
              <Link to={publishUrl} state={publishState}>
                <Typography.Text link>发布</Typography.Text>
              </Link>
              <Link to={editUrl} state={editState}>
                <Typography.Text link>编辑</Typography.Text>
              </Link>
              <Typography.Text link>删除</Typography.Text>
            </Space>
          );
        },
      },
    ];
  }, []);
  return fields;
};
