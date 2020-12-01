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
        ({
          title,
          ...itemProps
        }: SelectablePrimaryMenuItem): React.ReactElement => {
          return <MenuItem key={title} title={title} {...itemProps} />;
        },
      )}
    </div>
  );
};

export default PrimaryMenu;
