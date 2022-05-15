/*
 * @Author: jweboy
 * @Date: 2021-10-02 13:21:44
 * @LastEditors: jweboy
 * @LastEditTime: 2021-10-02 13:33:29
 */
export const initialState: Partial<RootState> = {
  refs: {},
};

export const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'syncGlobalData':
      return { ...state, ...payload };
    case 'clearGlobalState':
      return { ...initialState };
    default:
      return state;
  }
};
