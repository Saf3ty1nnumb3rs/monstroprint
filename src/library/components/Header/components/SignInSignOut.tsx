import React from 'react';
import isNull from 'lodash/isNull';
import { auth } from 'firebaseutility/firebase.utils';
import { UserProfile } from 'app/types/types';
import { Link, useHistory } from 'react-router-dom';
import { useCallUserDispatch } from 'library/hooks/useCallUserDispatch';

const SignInSignOut = ({
  user,
}: {
  user: UserProfile | null;
}): React.ReactElement => {
  const history = useHistory();
  const { removeUser } = useCallUserDispatch();

  return user ? (
    <div
      className="option"
      onClick={async () => {
        await auth.signOut();
        removeUser();
        history.push('/signin');
      }}
    >
      SIGN OUT
    </div>
  ) : (
    <Link className="option" to="/signin">
      SIGN IN
    </Link>
  );
};

export default SignInSignOut;
