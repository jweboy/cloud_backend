/*
 * @Author: jweboy
 * @Date: 2022-02-25 11:26:44
 * @LastEditors: jweboy
 * @LastEditTime: 2022-02-25 14:54:37
 */
import { Space } from '@douyinfe/semi-ui';
import * as React from 'react';
import classnames from 'classnames';

const BlockSpace: React.FC<{ className?: string }> = (props) => {
  const spaceClass = classnames({
    'w-full': true,
    [props.className!]: props.className,
  });
  return (
    <Space className={spaceClass} align="start" {...props}>
      {props.children}
    </Space>
  );
};

export default BlockSpace;
