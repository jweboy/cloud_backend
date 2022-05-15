/*
 * @Author: jweboy
 * @Date: 2021-10-05 18:03:53
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 15:38:43
 */
/*
 * @Author: jweboy
 * @Date: 2021-10-05 18:03:53
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 15:08:13
 */
declare namespace File {
  type MimeType =
    | 'image/jpeg'
    | 'image/svg+xml'
    | 'image/png'
    | 'application/pdf'
    | 'application/vnd.ms-powerpoint'
    | 'text/javascript'
    | 'text|css'
    | 'video/mp4';

  interface Base {
    fsize: number;
    hash: string;
    id: number;
    key: string;
    md5: string;
    mimeType: MimeType;
    name: string;
    putTime: number;
    status: number;
    type: number;
    url: string;
  }

  type FileQuery = {
    type: string;
  };
}
