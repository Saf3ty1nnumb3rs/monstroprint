import React from 'react';
import {
  auth,
  createUserProfileDocument,
} from 'firebaseutility/firebase.utils';
import { UserProfile, SnapshotData } from 'app/types/types';
import { useCallUserDispatch } from 'library/hooks/useCallUserDispatch';

export const useFirebaseAuth = (): { authorizedUser: UserProfile | null } => {
  const {
    authorizedUser,
    setAuthorizedUser,
    setUser,
    removeUser,
  } = useCallUserDispatch();

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
