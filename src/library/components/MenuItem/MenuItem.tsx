import React from 'react';
import 'scss/components/_MenuItem.scss';
import { SelectablePrimaryMenuItem } from 'library/types/BaseComponentTypes';

const MenuItem = ({
  title,
  subtitle,
  className,
  contentClass,
}: SelectablePrimaryMenuItem): React.ReactElement => {
  return (
    <div className={`menu-item ${className}`}>
      <div className={`content ${contentClass}`}>
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default MenuItem;
