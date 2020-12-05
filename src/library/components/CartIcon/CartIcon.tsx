import React from 'react';
import { ReactComponent as ShoppingIcon } from 'assets/shoppingBag.svg';
import { useSelector } from 'react-redux';
import { selectCartHidden } from 'redux/cart/cartSelectors';
import { useCallCartDispatch } from 'library/hooks/useCallCartDispatch';

import 'scss/components/_CartIcon.scss';

const CartIcon = (): React.ReactElement => {
  const { toggleCartHidden } = useCallCartDispatch();
  const isCartHidden = useSelector(selectCartHidden);

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
