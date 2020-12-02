import React from 'react';

import 'scss/components/_Button.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const CustomButton = ({
  children,
  ...otherProps
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>): React.ReactElement => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
