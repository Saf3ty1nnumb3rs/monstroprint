import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { GalleryItem, CartItemProps } from 'library/types/BaseComponentTypes';

export const useCallCartDispatch = (): {
  isCartToggled: boolean;
  setIsCartToggled: React.Dispatch<React.SetStateAction<boolean>>;
  addItem: (
    item: CartItemProps,
  ) => {
    type: string;
    payload: GalleryItem | null;
  };
  toggleCartHidden: () => {
    type: string;
  };
} => {
  const [isCartToggled, setIsCartToggled] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const addItem = useCallback(
    (selectedItem) => dispatch({ type: 'ADD_ITEM', payload: selectedItem }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch],
  );
  const toggleCartHidden = useCallback(
    () => dispatch({ type: 'TOGGLE_CART_HIDDEN' }),
    [dispatch],
  );
  return {
    isCartToggled,
    setIsCartToggled,
    addItem,
    toggleCartHidden,
  };
};
