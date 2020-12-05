import { CartItemProps } from 'library/types/BaseComponentTypes';
import { ADD_ITEM, HIDE_CART, TOGGLE_CART_HIDDEN } from './cartActionTypes';

export interface ToggleCartAction {
  type: typeof TOGGLE_CART_HIDDEN;
}

export interface HideCartAction {
  type: typeof HIDE_CART;
}
export interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: CartItemProps;
}

export const toggleCartHidden = (): ToggleCartAction => ({
  type: TOGGLE_CART_HIDDEN,
});

export const hideCart = (): HideCartAction => ({
  type: HIDE_CART,
});

export const addItem = (item: CartItemProps): AddItemAction => ({
  type: ADD_ITEM,
  payload: item,
});
