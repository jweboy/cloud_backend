/*
 * @Author: jweboy
 * @Date: 2021-10-01 11:55:17
 * @LastEditors: jweboy
 * @LastEditTime: 2021-10-02 13:21:06
 */
import * as React from 'react';

const initialState: Partial<RootState> = {};

type Action = {
  type: 'syncGlobalData' | 'clearGlobalState';
  payload?: RootState;
};

export const RootContext = React.createContext<{
  state: RootState;
  dispatch: (data: Action) => void;
}>({
  state: { ...initialState },
  dispatch: () => {},
});

const reducer = () => {};

const RootProvider = () => {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState });
  const value = { state, dispatch };

  return <RootContext.Provider value={value}></RootContext.Provider>;
};
