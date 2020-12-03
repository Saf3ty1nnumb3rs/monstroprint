import React from 'react';

import CustomButton from 'library/components/Button';

import 'scss/components/_CartDropdown.scss';

const CartDropdown = (): React.ReactElement => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
