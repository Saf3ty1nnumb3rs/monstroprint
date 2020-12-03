import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'library/components/Header';
import Routes from 'app/Routing/Routes';

import {
  auth,
  createUserProfileDocument,
} from 'firebaseutility/firebase.utils';
import { UserProfile, SnapshotData } from './types/types';

import './App.scss';

const App = (): React.ReactElement => {
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

  return (
    <div data-testid="App">
      <Router>
        <Header currentUser={authorizedUser} />
        <main key={'main'} className={'main'}>
          <Routes componentKey="contentComponent" />
        </main>
      </Router>
    </div>
  );
};

export default App;
