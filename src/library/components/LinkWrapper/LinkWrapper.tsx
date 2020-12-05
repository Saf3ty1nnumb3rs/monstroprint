import React from 'react';
import { Link } from 'react-router-dom';

interface LinkWrapperProps {
  route: string;
  className?: string;
  children: React.ReactElement | string | null;
}

const LinkWrapper = ({
  route,
  className = '',
  children,
}: LinkWrapperProps): React.ReactElement => {
  return (
    <Link to={route} className={className}>
      {children}
    </Link>
  );
};

export default LinkWrapper;
