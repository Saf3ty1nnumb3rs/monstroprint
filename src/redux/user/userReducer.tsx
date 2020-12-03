import { UserProfile } from 'app/types/types';
import {
  SET_CURRENT_USER,
  REMOVE_CURRENT_USER,
  SetCurrentUserAction,
  RemoveCurrentUserAction,
} from './userActions';

const INITIAL_STATE: UserProfile | null = null;

const userReducer = (
  state: UserProfile | null = INITIAL_STATE,
  action: SetCurrentUserAction | RemoveCurrentUserAction,
): UserProfile | null => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload;
    case REMOVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
