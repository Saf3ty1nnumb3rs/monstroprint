import { CartItemProps } from 'library/types/BaseComponentTypes';

export const selectCartItems = (state: {
  cart: {
    cartItems: CartItemProps[];
  };
}): CartItemProps[] => state.cart.cartItems;

export const selectCartHidden = (state: {
  cart: {
    hidden: boolean;
  };
}): boolean => state.cart.hidden;
