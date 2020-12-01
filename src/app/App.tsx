import React from 'react';
import 'scss/pages/_App.scss';

import HomePage from 'modules/Main/pages/HomePage';

const App = (): React.ReactElement => {
  return (
    <div data-testid="App">
      <HomePage />
    </div>
  );
};

export default App;
