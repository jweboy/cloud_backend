/*
 * @Author: jweboy
 * @Date: 2021-10-02 13:21:32
 * @LastEditors: jweboy
 * @LastEditTime: 2021-10-02 13:34:00
 */

import * as React from 'react';
import { initialState, reducer } from './reducer';

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

export const RootProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <RootContext.Provider value={value}>{props.children}</RootContext.Provider>
  );
};
