import { UserProfile } from 'app/types/types';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: UserProfile | null;
}

export const setCurrentUser = (
  user: UserProfile | null,
): SetCurrentUserAction => ({
  type: SET_CURRENT_USER,
  payload: user,
});
