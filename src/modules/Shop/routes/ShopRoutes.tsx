import React from 'react';
import { RouteType } from 'app/Routing/RouteConfig';
import ShopPage from 'modules/Shop/pages/ShopPage';

export const ShopRoutes: RouteType[] = [
  {
    id: 'Shop.ShopPage',
    path: '/shop',
    contentComponent: <ShopPage />,
    documentTitle: 'Shop Collections',
    headerComponent: 'Shop Collections',
  },
];
