import { UserProfile } from 'app/types/types';
import { SET_CURRENT_USER, SetCurrentUserAction } from './userActions';

const INITIAL_STATE: { currentUser: UserProfile | null } = {
  currentUser: null,
};

const userReducer = (
  state = INITIAL_STATE,
  action: SetCurrentUserAction,
): { currentUser: UserProfile | null } => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
