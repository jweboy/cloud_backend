/*
 * @Author: jweboy
 * @Date: 2022-04-20 16:35:18
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 17:23:55
 */
import { showCustomModal } from '@/utils/interact';
import { isFunction, isPromise } from '@/utils/lodash';
import { IconDelete, IconEdit } from '@douyinfe/semi-icons';
import { Modal, Space } from '@douyinfe/semi-ui';
import React from 'react';
import { FileCardProps } from '.';

type Keys = Extract<keyof FileCardProps, 'onEdit' | 'onDelete' | 'id'>;
type MoreButtonProps = Pick<FileCardProps, Keys>;

const MoreButton = React.memo<MoreButtonProps>((props) => {
  const { onDelete, onEdit, id } = props;
  const deleteStyle: React.CSSProperties = {
    color: 'var(--semi-color-danger)',
  };
  const editStyle: React.CSSProperties = {
    color: 'var(--semi-color-primary)',
  };
  const handleDelete = () => {
    showCustomModal(
      {
        type: 'error',
        title: '删除确认',
        content: '确定要删除该条资源么',
      },
      onDelete,
      id,
    );
  };
  return (
    <Space>
      <IconEdit style={editStyle} onClick={onEdit} />
      <IconDelete style={deleteStyle} onClick={handleDelete} />
    </Space>
  );
  // return (
  //   <Dropdown
  //     position={'bottom'}
  //     render={
  //       <Dropdown.Menu>
  //         <Dropdown.Item>
  //           <Typography.Text link>编辑</Typography.Text>
  //         </Dropdown.Item>
  //         <Dropdown.Item>
  //           <Typography.Text type="danger">删除</Typography.Text>
  //         </Dropdown.Item>
  //       </Dropdown.Menu>
  //     }
  //   >
  //     <Typography.Text link>更多</Typography.Text>
  //   </Dropdown>
  // );
});
export default MoreButton;
