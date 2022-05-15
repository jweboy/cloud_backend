/*
 * @Author: jweboy
 * @Date: 2022-04-22 13:13:29
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-22 13:17:51
 */
/*
 * @Author: jweboy
 * @Date: 2022-04-20 18:30:17
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-22 13:02:55
 */
import { isFunction } from '@/utils/lodash';
import { Button, Form, Space, Toast, Upload } from '@douyinfe/semi-ui';
import React from 'react';

const SelectFiles = React.memo<{ onChange?: (files: File[]) => void }>(
  ({ onChange }) => {
    // const [files, setFiles] = React.useState<File[]>([]);
    let action = '/';

    const handleChange = (data) => {
      if (isFunction(onChange)) {
        onChange!(data.fileList);
      }
    };

    return (
      <Upload
        action={action}
        uploadTrigger="custom"
        draggable
        dragMainText="点击上传文件或拖拽文件到这里"
        dragSubText="支持任意类型文件"
        onChange={handleChange}
      >
        {/* <Button icon={<IconUpload />} theme="light" onClick={handleQueueUpload}>
        开始上传
      </Button> */}
        {/* <Button icon={<IconPlus />} theme="light" style={{ marginRight: 8 }}>
        选择文件
      </Button>
      <Button icon={<IconUpload />} theme="light" onClick={this.manulUpload}>
        开始上传
      </Button> */}
      </Upload>
    );

    // return (
    //   <Upload
    //     // field="files"
    //     // label="文件"
    //     uploadTrigger="custom"
    //     draggable
    //     dragMainText="点击上传文件或拖拽文件到这里"
    //     dragSubText="支持任意类型文件"
    //     onChange={handleChange}
    //     onFileChange={handleChange}
    //     beforeUpload={beforeUpload}
    //   />
    // );
  },
);

export default SelectFiles;
