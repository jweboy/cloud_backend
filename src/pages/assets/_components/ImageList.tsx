/*
 * @Author: jweboy
 * @Date: 2021-10-06 16:55:46
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-19 18:49:58
 */
// /*
//  * @Author: jweboy
//  * @Date: 2021-10-06 16:55:46
//  * @LastEditors: jweboy
//  * @LastEditTime: 2022-04-19 17:41:44
//  */
// import { deleteFile } from '@/service/file';
// import { DeleteForever } from '@mui/icons-material';
// import {
//   IconButton,
//   ImageList,
//   ImageListItem,
//   ImageListItemBar,
// } from '@mui/material';
// import * as React from 'react';

// const Images = (props) => {
//   const onDelete = (key) => async () => {
//     const [prefix, name] = key.split('/');
//     await deleteFile({ key: prefix, fileName: name });
//     console.log('sd=>', prefix, name);
//     alert('删除成功');
//   };

//   return (
//     <ImageList variant="masonry" cols={3} gap={8}>
//       {props.data?.map((item) => {
//         return (
//           <ImageListItem key={item.key}>
//             <img src={item.url} alt={item.name} loading="lazy" />
//             <ImageListItemBar
//               title={item.key}
//               actionIcon={
//                 <IconButton
//                   sx={{ color: 'text.primary' }}
//                   onClick={onDelete(item.key)}
//                 >
//                   <DeleteForever />
//                 </IconButton>
//               }
//             />
//           </ImageListItem>
//         );
//       })}
//     </ImageList>
//   );
// };

// export default Images;
