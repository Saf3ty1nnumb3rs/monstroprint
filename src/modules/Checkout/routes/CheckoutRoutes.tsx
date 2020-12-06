import React from 'react';
import { RouteType } from 'app/Routing/RouteConfig';
import CheckoutPage from 'modules/Checkout/pages/CheckoutPage';

export const CheckoutRoutes: RouteType[] = [
  {
    id: 'Checkout.Main',
    path: '/checkout',
    contentComponent: <CheckoutPage />,
    documentTitle: 'Monstro Checkout',
    headerComponent: 'Monstro Checkout',
  },
];
