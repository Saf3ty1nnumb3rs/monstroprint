import React from 'react';
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
      }
    });
    return () => unsubscribeFromAuth();
  }, []);

  return {
    authorizedUser,
  };
};
