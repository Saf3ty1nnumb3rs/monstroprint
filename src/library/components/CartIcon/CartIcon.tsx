import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from 'assets/shoppingBag.svg';
import { UserProfile } from 'app/types/types';
import { CartContext } from 'providers/cart/CartProvider';

import 'scss/components/_CartIcon.scss';

const CartIcon = ({
  user,
}: {
  user: UserProfile | null;
}): React.ReactElement | null => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return user ? (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  ) : null;
};

export default CartIcon;
