/*
 * @Author: jweboy
 * @Date: 2022-04-20 16:35:13
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-24 13:24:00
 */
import { Card } from '@douyinfe/semi-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SVGIcon from '../SVGIcon';
import MoreButton from './MoreButton';

type SomeFileModel = Pick<File.Base, 'mimeType'>;

export interface FileCardProps extends SomeFileModel {
  folder?: string;
  file?: string;
  id?: string;
  onDelete?: (data?: string) => void;
  onEdit?: VoidFunction;
  onClick?: (id?: string) => void;
}

const FileCard = React.memo<FileCardProps>((props) => {
  const {
    folder = '-',
    file,
    mimeType,
    onDelete,
    onEdit,
    id,
    onClick = () => { },
  } = props;
  const iconStyle: React.CSSProperties = { width: 48, height: 48 };
  const cardbodyStyle: React.CSSProperties = { height: 120 };
  const navigate = useNavigate();

  const handleCardClick = () => {
    onClick(id);
  };

  return (
    <Card
      headerExtraContent={
        <MoreButton onDelete={onDelete} onEdit={onEdit} id={id} />
      }
      title={folder}
      shadows="always"
      bodyStyle={cardbodyStyle}
      onClick={handleCardClick}
    >
      <Card.Meta
        description={<div className="break-all ">{file}</div>}
        avatar={<SVGIcon style={iconStyle} type={mimeType} />}
      />
    </Card>
  );
});

export default FileCard;
