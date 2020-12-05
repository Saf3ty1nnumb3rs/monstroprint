import React from 'react';

import 'scss/components/_Button.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Button = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { isGoogleSignIn?: boolean; inverted?: boolean }): React.ReactElement => {
  const signIn = isGoogleSignIn ? 'google-sign-in' : '';
  const invertedProp = inverted ? 'inverted' : '';
  return (
    <button
      className={`${invertedProp} ${signIn} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
