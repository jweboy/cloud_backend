import { BorderStyle } from '@material-ui/icons';

/*
 * @Author: jweboy
 * @Date: 2022-04-19 17:32:29
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 17:08:38
 */
export const deepFirstTraverseNodes = <T>(
  data: T[] = [],
  options?: {
    label?: string;
    value?: string;
    children?: string;
  },
) => {
  const {
    label = 'label',
    value = 'value',
    children = 'children',
  } = options || {};
  let i = 0;
  let nodes: T[] = [];

  while (i < data.length) {
    const node = data[i];
    const childrens = node[children];

    if (childrens != null && Array.isArray(childrens)) {
      const childNodes = deepFirstTraverseNodes(childrens, options);
      nodes = [...nodes, ...childNodes];
    }
    nodes.push(node);
    i += 1;
  }

  return nodes;
};

export const download = async (url: string, filename?: string) => {
  const body = await fetch(url, { mode: 'no-cors' });
  const data = await body.blob();
  const link = document.createElement('a');
  link.href = URL.createObjectURL(data);
  link.download = filename || '';
  link.click();
};
