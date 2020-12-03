import { UserProfile } from 'app/types/types';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

export interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: UserProfile | null;
}

export interface RemoveCurrentUserAction {
  type: typeof REMOVE_CURRENT_USER;
  payload: UserProfile | null;
}

export const setCurrentUser = (
  user: UserProfile | null,
): SetCurrentUserAction => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const removeCurrentUser = (): RemoveCurrentUserAction => ({
  type: REMOVE_CURRENT_USER,
  payload: null,
});
