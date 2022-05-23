/*
 * @Author: jweboy
 * @Date: 2021-10-05 18:20:17
 * @LastEditors: jweboy
 * @LastEditTime: 2022-04-20 10:34:10
 */
import NotFound from '@/components/NotFound';
import SystemPrimaryLayout from '@/layout';
import DeployPage from '@/pages/deploy';
import LoginPage from '@/pages/login';
import JuejinPage from '@/pages/schedule/juejin';
import ColorPage from '@/pages/tools/color';
import DownloadPage from '@/pages/tools/download';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './route-config.json';

const basename = '/cloud';

const AppRoutes = () => {
  // const traverseRoutes = (data: Public.Route[] = []) => {
  //   let i = 0;
  //   let routes: Public.Route[] = [];

  //   while (i < data.length) {
  //     const route = data[i];

  //     if (route.main) {
  //       const LazyLoadComponent = React.lazy(
  //         () => import(`@/pages/${route.main}`),
  //       );
  //       route.component = (
  //         <React.Suspense fallback={<>...</>}>
  //           <LazyLoadComponent />
  //         </React.Suspense>
  //       );
  //     }

  //     const children = route.routes;

  //     if (children != null && Array.isArray(children)) {
  //       const childNodes = traverseRoutes(children);
  //       routes = [...routes, ...childNodes];
  //     }
  //     routes.push(route);
  //     i += 1;
  //   }

  //   return routes;
  // };

  // const allRoutes = traverseRoutes(routes);
  // console.log(allRoutes);

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<SystemPrimaryLayout />}>
          {/* {allRoutes.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={item.component}
              />
            );
          })} */}
          <Route path="*" element={<NotFound />} />
          <Route path="/tools/color" element={<ColorPage />} />
          <Route path="/tools/download" element={<DownloadPage />} />
          <Route path="/schedule/juejin" element={<JuejinPage />} />
          <Route path="/deploy" element={<DeployPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
