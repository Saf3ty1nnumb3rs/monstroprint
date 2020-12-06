import { CartItemProps } from 'library/types/BaseComponentTypes';
import { UserProfile } from 'app/types/types';

interface CartUtils {
  addItemToCart: (
    cartItems: CartItemProps[],
    cartItemToAdd: CartItemProps,
  ) => CartItemProps[];
  removeItemFromCart: (
    cartItems: CartItemProps[],
    cartItemToRemove: CartItemProps,
  ) => CartItemProps[];
  filterItemFromCart: (
    cartItems: CartItemProps[],
    item: CartItemProps,
  ) => CartItemProps[];
  getCartItemsCount: (cartItems: CartItemProps[]) => number;
  getCartTotal: (cartItems: CartItemProps[]) => number;
}

export const useCartUtils = (
  collectionsRef: firebase.firestore.CollectionReference | undefined,
): CartUtils => {
  const addItemToCart = (
    cartItems: CartItemProps[],
    cartItemToAdd: CartItemProps,
  ): CartItemProps[] => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToAdd.id,
    );

    if (existingCartItem) {
      if (existingCartItem.id === cartItemToAdd.id) {
        collectionsRef
          ?.doc(existingCartItem.name)
          .set({
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          });
      }
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      );
    }
    collectionsRef
      ?.doc(cartItemToAdd.name)
      .set({ ...cartItemToAdd, quantity: 1 });
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

  const removeItemFromCart = (
    cartItems: CartItemProps[],
    cartItemToRemove: CartItemProps,
  ): CartItemProps[] => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id,
    );

    if (existingCartItem?.quantity === 1) {
      collectionsRef?.doc(existingCartItem.name).delete();
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id,
      );
    }

    collectionsRef
      ?.doc(cartItemToRemove.name)
      .set({ ...cartItemToRemove, quantity: cartItemToRemove.quantity - 1 });
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem,
    );
  };

  const filterItemFromCart = (
    cartItems: CartItemProps[],
    item: CartItemProps,
  ): CartItemProps[] => {
    collectionsRef?.doc(item.name).delete();
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  };

  const getCartItemsCount = (cartItems: CartItemProps[]): number =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0,
    );

  const getCartTotal = (cartItems: CartItemProps[]): number =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0,
    );
  return {
    addItemToCart,
    removeItemFromCart,
    filterItemFromCart,
    getCartItemsCount,
    getCartTotal,
  };
};
