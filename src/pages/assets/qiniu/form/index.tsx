/*
 * @Author: jweboy
 * @Date: 2022-04-20 17:47:26
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-24 22:15:28
 */
import FileUpload from '@/components/Upload';
import Upload from '@/components/Upload';
import { useUpload } from '@/hooks/useUpload';
import { Card, Form } from '@douyinfe/semi-ui';
import React from 'react';

const FileForm = React.memo(() => {
  return (
    <Card>
      <Form
        wrapperCol={{ span: 10 }}
        labelCol={{ span: 2 }}
        labelPosition="left"
        labelAlign="right"
      >
        <Form.RadioGroup
          type="button"
          field="file"
          label="上传方式"
          initValue="single"
        >
          <Form.Radio value="single">单选</Form.Radio>
          <Form.Radio value="multiple" disabled>
            多选
          </Form.Radio>
        </Form.RadioGroup>
        <FileUpload type="formField" folder="miniprogram" />
      </Form>
    </Card>
  );
});

export default FileForm;
