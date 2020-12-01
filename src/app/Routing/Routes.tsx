import React, { ReactElement } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { RouteConfig, RouteType } from 'app/Routing/RouteConfig';

export type RouteComponentKeys =
  | 'contentComponent'
  | 'headerComponent'
  | 'mobileComponent';

const Routes = ({
  componentKey,
}: {
  componentKey: RouteComponentKeys;
}): ReactElement => {
  const pathname = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      {RouteConfig.map((item: RouteType) => {
        // normally we could check for permissions or featureflags here
        // to keep our routes protected/hidden
        return (
          <Route key={item.path} path={item.path} exact>
            {item[componentKey]}
          </Route>
        );
      })}
      <Route render={(): ReactElement => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
