import React from 'react';
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

const Header = ({
  currentUser,
}: {
  currentUser: UserProfile | null;
}): React.ReactElement => {
  const { pathname } = useLocation();
  const history = useHistory();
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
        {currentUser ? (
          <div
            className="option"
            onClick={async () => {
              await auth.signOut();
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
