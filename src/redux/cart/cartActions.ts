import { GalleryItem } from 'library/types/BaseComponentTypes';
import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './cartActionTypes';

export interface ToggleCartAction {
  type: typeof TOGGLE_CART_HIDDEN;
}

export interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: GalleryItem;
}

export const toggleCartHidden = (): ToggleCartAction => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item: GalleryItem): AddItemAction => ({
  type: ADD_ITEM,
  payload: item,
});
