import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/userSelectors';
import { selectCartHidden, selectCartItems } from 'redux/cart/cartSelectors';
import { useLocation } from 'react-router-dom';
import LinkWrapper from 'library/components/LinkWrapper';
import CartDropdown from 'library/components/CartDropdown';
import HeaderOptions from 'library/components/Header/components/HeaderOptions';

import Logo from 'assets/CSK.png';

import 'scss/components/_Header.scss';

const LogoIcon = (): React.ReactElement => {
  return (
    <div className="logo-container">
      <img className="logo" src={Logo} alt="cat" />
    </div>
  );
};

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();
  const user = useSelector(selectUser);
  // NONE of these components actually need the user object
  // They only need to know if there is a valid logged in user
  // This would normally just be handled in our redux store or by permissions
  const isCartHidden = useSelector(selectCartHidden);
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="header">
      <LinkWrapper route="/" children={<LogoIcon />} />
      <HeaderOptions pathname={pathname} user={user} />
      <CartDropdown
        isCartHidden={isCartHidden}
        cartItems={cartItems}
        user={user}
      />
    </div>
  );
};

export default Header;
