import React from 'react';

import 'scss/components/_Button.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Button = ({
  children,
  isGoogleSignIn,
  ...otherProps
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { isGoogleSignIn?: boolean }): React.ReactElement => {
  const signIn = isGoogleSignIn ? 'google-sign-in' : '';
  return (
    <button className={`${signIn} custom-button`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
