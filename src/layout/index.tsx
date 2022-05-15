/*
 * @Author: jweboy
 * @Date: 2021-10-06 15:44:42
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-24 22:10:56
 */
import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import SystemNavbar from './Nav';
import SystemHeader from './Header';
import { Outlet } from 'react-router-dom';

const { Sider, Content } = Layout;

const SystemPrimaryLayout = React.memo(() => {
  return (
    <Layout className="h-screen overflow-hidden">
      <SystemHeader />
      <Layout>
        <Sider>
          <SystemNavbar />
        </Sider>
        <Content
          className="p-6"
          style={{
            backgroundColor: 'var(--semi-color-fill-0)',
            height: 'calc(100vh - 60px)',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
});

export default SystemPrimaryLayout;
