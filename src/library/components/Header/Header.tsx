import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
      </div>
    </div>
  );
};

export default Header;
