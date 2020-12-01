import { ReactNode } from 'react';
import { MainRoutes } from 'modules/Main/routes/MainRoutes';
import { ShopRoutes } from 'modules/Shop/routes/ShopRoutes';

export interface RouteType {
  id: string;
  path: string;
  contentComponent?: ReactNode;
  headerComponent: string;
  mobileComponent?: ReactNode;
  documentTitle: string;
  featureFlag?: string;
}

export const RouteConfig: RouteType[] = [...MainRoutes, ...ShopRoutes];
