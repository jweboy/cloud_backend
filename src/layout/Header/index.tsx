/*
 * @Author: jweboy
 * @Date: 2021-10-01 11:35:24
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 15:46:37
 */
import { IconBell, IconHelpCircle, IconMoon } from '@douyinfe/semi-icons';
import { Avatar, Button, Layout, Nav, Space } from '@douyinfe/semi-ui';
import React from 'react';

const SystemHeader = React.memo(() => {
  const body = document.body;
  const switchMode = () => {
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    } else {
      body.setAttribute('theme-mode', 'dark');
    }
  };

  React.useEffect(() => {
    // body.setAttribute('theme-mode', 'dark');
  }, []);

  return (
    <Layout.Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        mode="horizontal"
        footer={
          <React.Fragment>
            <Button
              theme="borderless"
              icon={<IconBell size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
              }}
            />
            <Button
              theme="borderless"
              icon={<IconMoon size="large" />}
              onClick={switchMode}
              style={{
                color: 'var(--semi-color-text-2)',
              }}
            />
            <Button
              theme="borderless"
              icon={
                <Avatar color="orange" size="extra-small">
                  user
                </Avatar>
              }
            />
          </React.Fragment>
        }
      />
    </Layout.Header>
  );
});

export default SystemHeader;
