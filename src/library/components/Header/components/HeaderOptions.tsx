import React from 'react';
import LinkWrapper from 'library/components/LinkWrapper';
import HomeShopLink from 'library/components/Header/components/HomeShopLink';
import SignInSignOutLink from 'library/components/Header/components/SignInSignOut';
import { UserProfile } from 'app/types/types';
import CartIcon from 'library/components/CartIcon';

const HeaderOptions = ({
  pathname,
  user,
}: {
  pathname: string;
  user: UserProfile | null;
}): React.ReactElement => {
  return (
    <div className="options">
      <HomeShopLink pathname={pathname} routeTrigger={'shop'} />
      <LinkWrapper route="/" children={'CONTACT'} />
      {pathname.includes('sign') ? null : <SignInSignOutLink user={user} />}
      <CartIcon user={user} />
    </div>
  );
};

export default HeaderOptions;
