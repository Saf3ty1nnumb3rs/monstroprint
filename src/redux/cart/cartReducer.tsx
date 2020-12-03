import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './cartActionTypes';

import { AddItemAction, ToggleCartAction } from './cartActions';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (
  state = INITIAL_STATE,
  action: AddItemAction | ToggleCartAction,
): { hidden: boolean; cartItems: any[] } => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
