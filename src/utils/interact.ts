import { Modal } from '@douyinfe/semi-ui';
import { ModalReactProps } from '@douyinfe/semi-ui/lib/es/modal';
import { isFunction, isPromise } from './lodash';

/*
 * @Author: jweboy
 * @Date: 2022-04-20 17:11:02
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 17:24:46
 */

type ModalType = 'error';

export const showCustomModal = <T>(
  options: ModalReactProps & { type: ModalType },
  callback?: Function | Promise<T>,
  data?: T,
) => {
  Modal[options.type]({
    ...options,
    async onOk() {
      if (isPromise(callback)) {
        await callback(data);
      }
      if (isFunction(callback)) {
        (callback as Function)(data);
      }
    },
  });
};
