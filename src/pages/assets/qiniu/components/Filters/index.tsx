/*
 * @Author: jweboy
 * @Date: 2022-04-23 00:03:49
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-24 13:17:09
 */
import { Button, Card, Form, Select, Space } from '@douyinfe/semi-ui';
import React from 'react';

const directory = [
  { label: '图片', value: 'image' },
  { label: '小程序', value: 'coupon-miniprogram' },
  { label: '宠物小程序', value: 'pet-miniprogram' },
  { label: '项目展示', value: 'project_showcase' },
];

export interface FiltersProps<T> {
  onChange?: (data: T) => void;
}

const Filters = React.memo<FiltersProps<{}>>((props) => {
  return (
    <Card className="w-full">
      <Form onSubmit={props.onChange}>
        <Form.Select
          initValue="project_showcase"
          field="directory"
          label="存储目录"
          optionList={directory}
        />
        <Space className="flex justify-end w-full">
          <Button type="tertiary" theme="solid">
            重置
          </Button>
          <Button type="primary" htmlType="submit" theme="solid">
            搜索
          </Button>
        </Space>
      </Form>
    </Card>
  );
});

export default Filters;
