/*
 * @Author: jweboy
 * @Date: 2021-09-29 23:09:29
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 10:34:18
 */
// /*
//  * @Author: jweboy
//  * @Date: 2021-09-29 23:09:29
//  * @LastEditors: jweboy
//  * @LastEditTime: 2021-10-04 10:57:01
//  */
// declare module '*.css';
// declare module '*.less';
// declare module '*.png';
// declare module '*.svg' {
//   export function ReactComponent(
//     props: React.SVGProps<SVGSVGElement>,
//   ): React.ReactElement;
//   const url: string;
//   export default url;
// }

// declare module '*.json' {
//   const value: any;
//   export default value;
// }

// declare module 'index.module.less' {
//   const styles: Record<string, string>;

//   export default styles;
// }

// // type VoidFunc = () => void;
// type VoidParamsFunc<T> = (data?: T) => void;

// type PlainObject = Record<string | symbol, any>;

// declare namespace window {}

declare namespace Public {
  interface Route {
    path: string;
    main?: string;
    routes?: Route;
    component?: React.ReactElement;
  }
}
