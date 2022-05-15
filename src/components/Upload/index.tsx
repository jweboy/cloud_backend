/*
 * @Author: jweboy
 * @Date: 2022-04-20 18:30:17
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-24 22:16:03
 */
import { useUpload } from '@/hooks/useUpload';
import { BASE_URL } from '@/utils/request/config';
import { IconDownload, IconUpload } from '@douyinfe/semi-icons';
import {
  Button,
  Form,
  Space,
  Toast,
  Upload as SemiUpload,
} from '@douyinfe/semi-ui';
import { tabScrollButtonClasses } from '@material-ui/core';
import React from 'react';
import Speed from '../FileCard/Speed';
import { Queue } from './Queue';
import SelectFiles from './SelectFiles';

type UploadProps = React.ComponentProps<typeof SemiUpload>;

const FileUpload = React.memo<{
  type?: 'formField' | 'field';
  folder?: string;
}>((props) => {
  const { type, folder = 'other', ...restProps } = props;
  // const [fileList, setFileList] = React.useState<File[]>([]);
  // const handleFileChange = (data) => {
  //   setFileList(data);
  // };
  // return (
  //   <React.Fragment>
  //     <SelectFiles onChange={handleFileChange} />
  //     <Queue fileList={fileList} />
  //   </React.Fragment>
  // );
  let Component;
  switch (type) {
    case 'formField':
      Component = Form.Upload;
      break;
    case 'field':
      Component = SemiUpload;
      break;
    default:
      Component = SemiUpload;
      break;
  }

  const afterUpload = ({ file }) => {
    if (file.status === 'success') {
      Toast.success('上传成功');
    }
  };

  return React.createElement(Component, {
    label: '上传文件',
    action: BASE_URL + '/file/upload',
    draggable: tabScrollButtonClasses,
    dragMainText: '点击上传文件或拖拽文件到这里',
    dragSubText: '支持任意类型文件',
    limit: 1,
    trigger: 'custom',
    afterUpload: afterUpload,
    fileName: 'file',
    data: { key: folder },
  });
});

export default FileUpload;
