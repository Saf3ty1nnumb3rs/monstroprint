import { CartItemProps } from 'library/types/BaseComponentTypes';

export const addItemToCart = (
  cartItems: CartItemProps[],
  cartItemToAdd: CartItemProps,
): CartItemProps[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: CartItemProps[],
  cartItemToRemove: CartItemProps,
): CartItemProps[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};

export const filterItemFromCart = (
  cartItems: CartItemProps[],
  item: CartItemProps,
): CartItemProps[] => cartItems.filter((cartItem) => cartItem.id !== item.id);

export const getCartItemsCount = (cartItems: CartItemProps[]): number =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0,
  );

export const getCartTotal = (cartItems: CartItemProps[]): number =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0,
  );
