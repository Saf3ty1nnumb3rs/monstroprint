import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from 'library/components/Header';
import Routes from 'app/Routing/Routes';
import { useFirebaseAuth } from 'library/hooks/useFirebaseAuth';

import './App.scss';

const App = (): React.ReactElement => {
  const { authorizedUser } = useFirebaseAuth();

  return (
    <div data-testid="App">
      <Header />
      <main key={'main'} className={'main'}>
        <Routes componentKey="contentComponent" />
        {authorizedUser ? <Redirect to="/" /> : null}
      </main>
    </div>
  );
};

export default App;
