import React, { useCallback } from 'react';
import { UserProfile } from 'app/types/types';
import { useDispatch } from 'react-redux';

export const useCallUserDispatch = (): {
  authorizedUser: UserProfile | null;
  setAuthorizedUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  setUser: () => {
    type: string;
    payload: UserProfile | null;
  };
  removeUser: () => {
    type: string;
    payload: null;
  };
} => {
  const [
    authorizedUser,
    setAuthorizedUser,
  ] = React.useState<UserProfile | null>(null);

  const dispatch = useDispatch();

  const setUser = useCallback(
    () => dispatch({ type: 'SET_CURRENT_USER', payload: authorizedUser }),
    [dispatch, authorizedUser],
  );

  const removeUser = useCallback(
    () => dispatch({ type: 'REMOVE_CURRENT_USER', payload: null }),
    [dispatch],
  );

  return {
    authorizedUser,
    setAuthorizedUser,
    setUser,
    removeUser,
  };
};
