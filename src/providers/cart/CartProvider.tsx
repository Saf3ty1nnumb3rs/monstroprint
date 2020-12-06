import React, { createContext, useState, useEffect } from 'react';
import { CartItemProps } from 'library/types/BaseComponentTypes';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/userSelectors';
import { collectionsRef } from 'firebaseutility/firebase.utils';

import { useCartUtils } from 'providers/cart/cartUtils';

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
  const user = useSelector(selectUser);
  const {
    addItemToCart,
    removeItemFromCart,
    filterItemFromCart,
    getCartItemsCount,
    getCartTotal,
  } = useCartUtils(collectionsRef(user));
  useEffect(() => {
    const cartItemsRef = collectionsRef(user);
    const getCartSnapshot = async () => {
      const snapshot = await cartItemsRef?.get();
      const docData = snapshot?.docs.map((doc) =>
        doc.data(),
      ) as CartItemProps[];
      setCartItems(docData || []);
    };
    getCartSnapshot();
  }, [user]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
