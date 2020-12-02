import React from 'react';
import SignIn from 'library/components/SignIn';

import 'scss/components/_SignIn.scss';

const SignInUpPage = (): React.ReactElement => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};

export default SignInUpPage;
