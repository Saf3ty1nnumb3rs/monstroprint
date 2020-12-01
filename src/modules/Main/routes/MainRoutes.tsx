import React from 'react';
import { RouteType } from 'app/Routing/RouteConfig';
import HomePage from 'modules/Main/pages/HomePage';

export const MainRoutes: RouteType[] = [
  {
    id: 'Main.HomePage',
    path: '/',
    contentComponent: <HomePage />,
    documentTitle: 'Shop Prints',
    headerComponent: 'Shop Prints',
  },
];
