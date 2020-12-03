import React from 'react';
import SignIn from 'library/components/SignIn';
import SignUp from 'library/components/SignUp';

import 'scss/pages/_SignInUp.scss';

const SignInUpPage = (): React.ReactElement => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUpPage;
