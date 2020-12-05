import React from 'react';
import { ReactComponent as ShoppingIcon } from 'assets/shoppingBag.svg';
import { UserProfile } from 'app/types/types';
import { useCallCartDispatch } from 'library/hooks/useCallCartDispatch';

import 'scss/components/_CartIcon.scss';

const CartIcon = ({
  user,
}: {
  user: UserProfile | null;
}): React.ReactElement | null => {
  const { toggleCartHidden } = useCallCartDispatch();

  return user ? (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  ) : null;
};

export default CartIcon;
