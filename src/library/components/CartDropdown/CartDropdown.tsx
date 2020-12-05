import React from 'react';
import isNull from 'lodash/isNull';
import CustomButton from 'library/components/Button';
import { UserProfile } from 'app/types/types';
import CartItem from 'library/components/CartItem';
import { CartItemProps } from 'library/types/BaseComponentTypes';

import 'scss/components/_CartDropdown.scss';

interface CartDropdownProps {
  isCartHidden: boolean;
  cartItems: CartItemProps[];
  user: UserProfile | null;
}

const CartDropdown = ({
  isCartHidden,
  cartItems,
  user,
}: CartDropdownProps): React.ReactElement | null => {
  return !isNull(user) && !isCartHidden ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem: CartItemProps) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  ) : null;
};

export default CartDropdown;
