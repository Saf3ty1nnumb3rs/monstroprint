import { ReactNode } from 'react';
import { MainRoutes } from 'modules/Main/routes/MainRoutes';

export interface RouteType {
  id: string;
  path: string;
  contentComponent?: ReactNode;
  headerComponent: string;
  mobileComponent?: ReactNode;
  documentTitle: string;
  featureFlag?: string;
}

export const RouteConfig: RouteType[] = [...MainRoutes];
