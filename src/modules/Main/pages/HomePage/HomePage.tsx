import React from 'react';

const HomePage = (): React.ReactElement => {
  return (
    <div data-testid="homepage" className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
