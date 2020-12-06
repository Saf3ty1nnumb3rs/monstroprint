import React from 'react';
import { CartItemProps } from 'library/types/BaseComponentTypes';

import 'scss/components/_CartItem.scss';

const CartItem = ({ item }: { item: CartItemProps }): React.ReactElement => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl.replace(/^'+/i, '')} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
