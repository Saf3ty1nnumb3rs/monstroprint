import React, { createContext, useState, useEffect } from 'react';
import { CartItemProps } from 'library/types/BaseComponentTypes';

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal,
} from 'providers/cart/cartUtils';

interface DefaultContext {
  hidden: boolean;
  toggleHidden: () => null | void;
  cartItems: CartItemProps[];
  addItem: (item: CartItemProps) => null | void;
  removeItem: (item: CartItemProps) => null | void;
  clearItemFromCart: (item: CartItemProps) => null | void;
  cartItemsCount: number;
  cartTotal: number;
}
const defaultContext: DefaultContext = {
  hidden: true,
  toggleHidden: () => null,
  cartItems: [],
  addItem: () => null,
  removeItem: () => null,
  clearItemFromCart: () => null,
  cartItemsCount: 0,
  cartTotal: 0,
};
export const CartContext = createContext(defaultContext);

const CartProvider = ({
  children,
}: {
  children: React.ReactElement | null;
}): React.ReactElement => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItem = (item: CartItemProps) =>
    setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item: CartItemProps) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);
  const clearItemFromCart = (item: CartItemProps) =>
    setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
