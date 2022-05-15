import BlockSpace from '@/components/BlockSpace';
import { SigninStatus, SIGNIN_STATUS } from '@/constants/schedule';
import { useRequest } from '@/hooks/useRequest';
import {
  getCheckinList,
  getCheckinStatus,
  postCheckin,
} from '@/service/juejin';
import {
  Banner,
  Button,
  Card,
  Form,
  Space,
  Table,
  Toast,
  Typography,
} from '@douyinfe/semi-ui';
import React from 'react';
import { columns } from './columns';

// TODO: 多次更新合并，request合并

const JuejinPage = React.memo(() => {
  const { data } = useRequest({ request: getCheckinStatus });
  const { data: checkinList } = useRequest({ request: getCheckinList });
  const handleSubmit = async (values) => {
    await postCheckin();
    // Toast.success('签到成功');
  };
  const isSignin = data.status === SigninStatus.Ok;
  const current = SIGNIN_STATUS[data.status] || {};

  console.log('render: ', data);

  return (
    <React.Fragment>
      {data.status != null && (
        <Banner
          className="mb-4"
          type={isSignin ? 'success' : 'warning'}
          closeIcon={null}
          description={
            <Space>
              {`今日${current.label}，${isSignin ? `新增 ${data.incr_point}积分，` : ''
                } 总计 ${data.sum_point}积分`}
            </Space>
          }
        />
      )}
      <div className="mb-4">
        <Card title="掘金签到">
          <Form onSubmit={handleSubmit}>
            <Form.TextArea
              label="cookie"
              field="cookie"
              placeholder="请输入cookie"
            />
            <Button htmlType="submit" type="primary" size="large" theme="solid">
              签到
            </Button>
          </Form>
        </Card>
      </div>
      <Card title="签到记录">
        <Table
          columns={columns}
          dataSource={checkinList.list}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </React.Fragment>
  );
});

export default JuejinPage;
