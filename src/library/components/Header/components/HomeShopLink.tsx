import React from 'react';
import { Link } from 'react-router-dom';

const HomeShopLink = ({
  pathname,
  routeTrigger,
}: {
  pathname: string;
  routeTrigger: string;
}): React.ReactElement => {
  return pathname.includes(routeTrigger) ? (
    <Link to="/" className="option">
      HOME
    </Link>
  ) : (
    <Link to="/shop" className="option">
      SHOP
    </Link>
  );
};

export default HomeShopLink;
