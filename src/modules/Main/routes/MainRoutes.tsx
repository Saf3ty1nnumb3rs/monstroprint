import React from 'react';
import { RouteType } from 'app/Routing/RouteConfig';
import HomePage from 'modules/Main/pages/HomePage';
import SignInUpPage from 'modules/Main/pages/SignInUp';

export const MainRoutes: RouteType[] = [
  {
    id: 'Main.HomePage',
    path: '/',
    contentComponent: <HomePage />,
    documentTitle: 'Shop Prints',
    headerComponent: 'Shop Prints',
  },
  {
    id: 'Main.HomePage',
    path: '/signin',
    contentComponent: <SignInUpPage />,
    documentTitle: 'Shop Prints',
    headerComponent: 'Shop Prints',
  },
];
