import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'app/Routing/Routes';

import './App.scss';

const App = (): React.ReactElement => {
  return (
    <div data-testid="App">
      <Router>
        <main key={'main'} className={'main'}>
          <Routes componentKey="contentComponent" />
        </main>
      </Router>
    </div>
  );
};

export default App;
