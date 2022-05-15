import { postPublicLogin } from '@/service/public';
import { showCustomModal } from '@/utils/interact';
import { IconKey, IconMail } from '@douyinfe/semi-icons';
import { Button, Card, Form, Toast, Typography } from '@douyinfe/semi-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = (props) => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    await postPublicLogin<User>(values);
    Toast.success('登录成功');
    navigate('/dashboard');
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        background:
          'url("https://assets.jweboy.com/cloud/call-of-duty-modern-warfare-1920x1080.jpeg")',
        backgroundSize: 'cover',
      }}
    >
      <Card className="w-1/3">
        <Form onSubmit={handleSubmit}>
          <Typography.Title heading={3}>登录</Typography.Title>
          <Form.Input
            label="用户名"
            field="email"
            size="large"
            placeholder="请输入邮箱地址"
            prefix={<IconMail />}
            rules={[{ required: true, message: '请输入邮箱地址' }]}
            initValue="admin"
          />
          <Form.Input
            label="密码"
            field="password"
            size="large"
            placeholder="请输入密码"
            prefix={<IconKey />}
            rules={[{ required: true, message: '请输入密码' }]}
            initValue="123456"
          />
          <Button
            htmlType="submit"
            type="primary"
            theme="solid"
            size="large"
            block
          >
            登录
          </Button>
          <div className="flex my-4">
            <Typography.Text type="tertiary">
              测试账号密码：admin / 123456
            </Typography.Text>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
