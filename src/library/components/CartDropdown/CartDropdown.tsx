import React from 'react';
import { useSelector } from 'react-redux';
import CustomButton from 'library/components/Button';
import CartItem from 'library/components/CartItem';
import { CartItemProps } from 'library/types/BaseComponentTypes';

import 'scss/components/_CartDropdown.scss';
import { selectCartItems } from 'redux/cart/cartSelectors';

const CartDropdown = (): React.ReactElement => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem: CartItemProps) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
