import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/userSelectors';
import { selectCartHidden } from 'redux/cart/cartSelectors';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useCallUserDispatch } from 'library/hooks/useCallUserDispatch';
import CartIcon from 'library/components/CartIcon';
import CartDropdown from 'library/components/CartDropdown';
import Logo from 'assets/CSK.png';

import 'scss/components/_Header.scss';

import { auth } from 'firebaseutility/firebase.utils';

const LogoIcon = (): React.ReactElement => {
  return (
    <div className="logo-container">
      <img className="logo" src={Logo} alt="cat" />
    </div>
  );
};

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();
  const history = useHistory();
  const user = useSelector(selectUser);
  const isCartHidden = useSelector(selectCartHidden);

  const { removeUser } = useCallUserDispatch();

  return (
    <div className="header">
      <Link to="/">
        <LogoIcon />
      </Link>
      <div className="options">
        {pathname.includes('shop') ? (
          <Link to="/" className="option">
            HOME
          </Link>
        ) : (
          <Link to="/shop" className="option">
            SHOP
          </Link>
        )}
        <Link to="/" className="option">
          CONTACT
        </Link>
        {user ? (
          <div
            className="option"
            onClick={async () => {
              await auth.signOut();
              removeUser();
              history.push('/signin');
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartHidden && <CartDropdown />}
    </div>
  );
};

export default Header;
