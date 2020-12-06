import React, { useContext } from 'react';
import isNull from 'lodash/isNull';
import { useHistory } from 'react-router-dom';
import Button from 'library/components/Button';
import { UserProfile } from 'app/types/types';
import CartItem from 'library/components/CartItem';
import { CartItemProps } from 'library/types/BaseComponentTypes';
import { CartContext } from 'providers/cart/CartProvider';

import 'scss/components/_CartDropdown.scss';

interface CartDropdownProps {
  isCartHidden: boolean;
  cartItems: CartItemProps[];
  user: UserProfile | null;
}

const CartDropdown = ({
  isCartHidden,
  user,
}: CartDropdownProps): React.ReactElement | null => {
  const { cartItems } = useContext(CartContext);
  const history = useHistory();

  return !isNull(user) && !isCartHidden ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem: CartItemProps) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <Button onClick={() => history.push('/checkout')}>GO TO CHECKOUT</Button>
    </div>
  ) : null;
};

export default CartDropdown;
