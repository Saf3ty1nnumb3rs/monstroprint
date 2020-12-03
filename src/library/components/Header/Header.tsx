import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/user/userSelectors';
import { Link, useLocation, useHistory } from 'react-router-dom';

import Logo from 'assets/CSK.png';
import { UserProfile } from 'app/types/types';

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
  const dispatch = useDispatch();

  const removeUser = useCallback(
    () => dispatch({ type: 'REMOVE_CURRENT_USER', payload: null }),
    [dispatch],
  );

  console.log(user);
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
      </div>
    </div>
  );
};

export default Header;
