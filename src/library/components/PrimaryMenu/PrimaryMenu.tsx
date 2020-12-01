import React from 'react';
import MenuItem from 'library/components/MenuItem';
import { SelectablePrimaryMenuItem } from 'library/types/BaseComponentTypes';
import 'scss/components/_PrimaryMenu.scss';

const PrimaryMenu = ({
  menuItems,
}: {
  menuItems: SelectablePrimaryMenuItem[];
}): React.ReactElement => {
  return (
    <div className="primary-menu">
      {menuItems.map(
        (item: SelectablePrimaryMenuItem): React.ReactElement => {
          const { title, subtitle, className, contentClass } = item;
          return (
            <MenuItem
              title={title}
              subtitle={subtitle}
              className={className}
              contentClass={contentClass}
            />
          );
        },
      )}
    </div>
  );
};

export default PrimaryMenu;
