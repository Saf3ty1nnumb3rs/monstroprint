import { CartItemProps } from 'library/types/BaseComponentTypes';
import { ADD_ITEM, TOGGLE_CART_HIDDEN, HIDE_CART } from './cartActionTypes';
import { addItemToCart } from './cartUtils';

import { AddItemAction, ToggleCartAction, HideCartAction } from './cartActions';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (
  state = INITIAL_STATE,
  action: AddItemAction | ToggleCartAction | HideCartAction,
): { hidden: boolean; cartItems: CartItemProps[] } => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case HIDE_CART:
      return {
        ...state,
        hidden: true,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
