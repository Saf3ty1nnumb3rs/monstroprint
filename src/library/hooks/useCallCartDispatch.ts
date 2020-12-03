import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useCallCartDispatch = () => {
  const [isCartToggled, setIsCartToggled] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const item = {};
  const addItem = useCallback(
    () => dispatch({ type: 'ADD_ITEM', payload: item }),
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
