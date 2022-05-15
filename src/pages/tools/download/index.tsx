import { download } from '@/utils';
import { Button, Card, Form } from '@douyinfe/semi-ui';
import React from 'react';

const DownloadPage = () => {
  const formRef = React.useRef(null);
  const handleSubmit = async (values) => {
    const { fileUrl, filename } = values;
    await download(fileUrl, filename);
  };

  const handleValidator = (_, value) => {
    const isUrl = /http(s):\/\//.test(value);
    if (!value) {
      return Promise.reject('请输入请输入文件地址');
    }
    if (!isUrl) {
      return Promise.reject('文件地址无效');
    }
    return Promise.resolve();
  };

  const handleFilenameChange = (value) => {
    const links = value.split('/');
    const filename = links.at(-1);
    // @ts-ignore
    formRef.current?.setValue('filename', filename);
  };

  const getFormApi = (formApi) => {
    formRef.current = formApi;
  };

  return (
    <Card title="文件下载">
      <Form onSubmit={handleSubmit} getFormApi={getFormApi}>
        <Form.Input
          label="文件名"
          field="filename"
          placeholder="请输入文件名"
        />
        <Form.TextArea
          label="文件地址"
          field="fileUrl"
          placeholder="请输入文件地址"
          rules={[{ required: true, validator: handleValidator }]}
          onChange={handleFilenameChange}
        />
        <Button type="primary" htmlType="submit" size="large" theme="solid">
          保存
        </Button>
      </Form>
    </Card>
  );
};

export default DownloadPage;
