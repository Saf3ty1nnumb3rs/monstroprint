import React from 'react';
import HomePage from 'modules/Main/pages/HomePage';

import './App.scss';

const App = (): React.ReactElement => {
  return (
    <div data-testid="App">
      <HomePage />
    </div>
  );
};

export default App;
