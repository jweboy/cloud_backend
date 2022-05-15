/*
 * @Author: jweboy
 * @Date: 2021-09-29 22:56:52
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-19 20:10:20
 */
import * as React from 'react';
import { RootProvider } from './store/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes';

const NotFound = () => <p>Sorry, nothing here</p>;

const App = () => {
  return (
    <RootProvider>
      {/* <BrowserRouter basename="/cloud">
        <Routes>
          <Route path="/" element={<SystemLayout />}>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="file" element={<Files />}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
      <AppRoutes />
    </RootProvider>
  );
};

export default App;
