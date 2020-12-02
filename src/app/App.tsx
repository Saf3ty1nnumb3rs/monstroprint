import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'library/components/Header';

import Routes from 'app/Routing/Routes';

import './App.scss';

const App = (): React.ReactElement => {
  return (
    <div data-testid="App">
      <Router>
        <Header />
        <main key={'main'} className={'main'}>
          <Routes componentKey="contentComponent" />
        </main>
      </Router>
    </div>
  );
};

export default App;
