/*
 * @Author: jweboy
 * @Date: 2021-10-03 16:08:29
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-19 18:49:55
 */
// /*
//  * @Author: jweboy
//  * @Date: 2021-10-03 16:08:29
//  * @LastEditors: jweboy
//  * @LastEditTime: 2021-10-06 16:50:26
//  */
// import { Folder, More, MoreHoriz } from '@mui/icons-material';
// import {
//   CardActionArea,
//   CardActionAreaProps,
//   CardContent,
//   CardHeader,
//   IconButton,
//   Typography,
// } from '@mui/material';
// import * as React from 'react';

// const Card: React.FC<
//   {
//     title: string;
//     updateAt: string;
//     onCardClick?: (data) => void;
//   } & CardActionAreaProps
// > = (
//   props = {
//     onCardClick: () => {},
//   },
// ) => {
//   const onClick = () => {
//     props.onCardClick!(props.title);
//   };

//   return (
//     <React.Fragment>
//       <CardActionArea
//         onClick={onClick}
//         sx={{
//           width: 190,
//           backgroundColor: '#fff',
//           boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
//           borderRadius: 4,
//         }}
//       >
//         <CardHeader
//           avatar={<Folder sx={{ fontSize: 60 }} color="primary" />}
//           action={<MoreHoriz />}
//         />
//         <CardContent>
//           <Typography variant="subtitle1" component="div">
//             {props.title}
//           </Typography>
//           <Typography variant="subtitle2" color="textSecondary" component="div">
//             {props.updateAt}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </React.Fragment>
//   );
// };

// export default Card;
