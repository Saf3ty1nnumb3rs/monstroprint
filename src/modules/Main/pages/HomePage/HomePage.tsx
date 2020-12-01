import React from 'react';
import 'scss/base/_global.scss';
import 'scss/pages/_HomePage.scss';
import { usePrimaryMenuItemConfig } from 'modules/Main/hooks/usePrimaryMenuItemConfig';
import PrimaryMenu from 'library/components/PrimaryMenu';

const HomePage = (): React.ReactElement => {
  const menuItems = usePrimaryMenuItemConfig();
  return (
    <div data-testid="homepage" className="homepage">
      <PrimaryMenu menuItems={menuItems} />
    </div>
  );
};

export default HomePage;
