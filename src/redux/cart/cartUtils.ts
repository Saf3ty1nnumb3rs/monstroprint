import { CartItemProps } from 'library/types/BaseComponentTypes';

export const addItemToCart = (
  cartItems: CartItemProps[],
  cartItemToAdd: CartItemProps,
): CartItemProps[] => {
  const existingCartItem = cartItems.find(
    (cartItem: CartItemProps) => cartItem.id === cartItemToAdd.id,
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem?.quantity + 1 }
        : cartItem,
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
