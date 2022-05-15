/*
 * @Author: jweboy
 * @Date: 2022-04-20 14:39:18
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 15:40:28
 */
import React from 'react';
import { Icon } from '@douyinfe/semi-ui';
import PDFIcon from './icons/PDFIcon';
import JsIcon from './icons/JsIcon';
import PngIcon from './icons/PngIcon';
import JpegIcon from './icons/JpegIcon';
import CssIcon from './icons/CssIcon';

const getCurrRenderIcon = (mimeType: File.MimeType) => {
  switch (mimeType) {
    case 'image/svg+xml':
      return PngIcon;
    case 'image/png':
      return PngIcon;
    case 'image/jpeg':
      return JpegIcon;
    case 'application/pdf':
      return PDFIcon;
    case 'text/javascript':
      return JsIcon;
    case 'text/css':
      return CssIcon;
    default:
      return null;
  }
};

const SVGIcon = React.memo<{
  style?: React.CSSProperties;
  type: File.MimeType;
}>((props) => {
  const { style = {}, type } = props;
  const { width, height } = style;
  const icon = getCurrRenderIcon(type);
  const svg =
    icon != null ? React.createElement(icon, { width, height }) : null;

  return <Icon svg={svg} />;
});

export default SVGIcon;
