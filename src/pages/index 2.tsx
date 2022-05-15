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

const JuejinPage = () => {
  const { data } = useRequest({ request: getCheckinStatus });
  const { data: checkinList } = useRequest({ request: getCheckinList });
  const handleSubmit = async (values) => {
    await postCheckin();
    // Toast.success('签到成功');
  };
  const isSignin = data.status === SigninStatus.Ok;
  const current = SIGNIN_STATUS[data.status] || {};

  console.log(checkinList);

  return (
    <Space vertical>
      {data.status != null && (
        <Banner
          type={isSignin ? 'success' : 'warning'}
          description={
            <Space>
              {`今日${current.label}，${isSignin ? `新增 ${data.incr_point}积分，` : ''
                } 总计 ${data.sum_point}积分`}
            </Space>
          }
        />
      )}
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
      <Card title="签到记录">
        <Table
          columns={columns}
          dataSource={checkinList.list}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </Space>
  );
};

export default JuejinPage;
