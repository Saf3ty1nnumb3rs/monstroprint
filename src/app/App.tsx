import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from 'library/components/Header';
import Routes from 'app/Routing/Routes';
import CartProvider from 'providers/cart/CartProvider';
import { useFirebaseAuth } from 'library/hooks/useFirebaseAuth';

import './App.scss';

const App = (): React.ReactElement => {
  const { authorizedUser } = useFirebaseAuth();

  return (
    <div data-testid="App">
      <CartProvider>
        <>
          <Header />
          <main key={'main'} className={'main'}>
            <Routes componentKey="contentComponent" />
            {authorizedUser ? <Redirect to="/" /> : null}
          </main>
        </>
      </CartProvider>
    </div>
  );
};

export default App;
