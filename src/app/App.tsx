import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from 'library/components/Header';
import Routes from 'app/Routing/Routes';
import { useFirebaseAuth } from 'app/hooks/useFirebaseAuth';

import './App.scss';

const App = (): React.ReactElement => {
  const { authorizedUser } = useFirebaseAuth();
  const history = useHistory();

  if (authorizedUser) history.push('/');

  return (
    <div data-testid="App">
      <Header />
      <main key={'main'} className={'main'}>
        <Routes componentKey="contentComponent" />
      </main>
    </div>
  );
};

export default App;
