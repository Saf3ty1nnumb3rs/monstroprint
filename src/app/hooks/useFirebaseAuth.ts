import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  auth,
  createUserProfileDocument,
} from 'firebaseutility/firebase.utils';
import { UserProfile, SnapshotData } from 'app/types/types';

export const useFirebaseAuth = (): { authorizedUser: UserProfile | null } => {
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

  React.useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot((snapShot) => {
          const data: SnapshotData | undefined = snapShot.data();
          setAuthorizedUser({
            id: snapShot.id,
            ...data,
          });
        });
      } else {
        setAuthorizedUser(null);
        removeUser();
      }
    });
    return () => unsubscribeFromAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorizedUser]);

  return {
    authorizedUser,
  };
};
