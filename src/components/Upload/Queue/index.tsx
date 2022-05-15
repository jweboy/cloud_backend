/*
 * @Author: jweboy
 * @Date: 2022-04-22 13:11:56
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-22 18:07:41
 */
import * as React from 'react';

import { Item } from './item';

export function Queue(props) {
  return (
    <ul>
      {props.fileList.map((uniqueFile) => (
        <Item key={uniqueFile.key} file={uniqueFile} />
      ))}
    </ul>
  );
}
