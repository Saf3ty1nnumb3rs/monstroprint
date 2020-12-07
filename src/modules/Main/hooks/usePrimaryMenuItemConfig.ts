import { SelectablePrimaryMenuItem } from 'library/types/BaseComponentTypes';
import Careless from 'assets/Careless.png';
import Commit from 'assets/Commit.png';
import Freedom from 'assets/FreedomFromWant.png';
import Repro from 'assets/Reprocessing.png';
import Talents from 'assets/Talents.png';

export const usePrimaryMenuItemConfig = (): SelectablePrimaryMenuItem[] => {
  const primaryMenuItems = [
    {
      title: 'sci fi',
      subtitle: 'SHOP NOW',
      imageUrl: Commit,
      className: 'small',
      link: 'scifi',
    },
    {
      title: 'industrial',
      subtitle: 'SHOP NOW',
      imageUrl: Repro,
      className: 'small',
      link: 'industrial',
    },
    {
      title: 'historic',
      subtitle: 'SHOP NOW',
      imageUrl: Freedom,
      className: 'small',
      link: 'historic',
    },
    {
      title: 'imported',
      subtitle: 'SHOP NOW',
      imageUrl: Talents,
      className: 'large',
      link: 'imported',
    },
    {
      title: 'propaganda',
      subtitle: 'SHOP NOW',
      imageUrl: Careless,
      className: 'large',
      link: 'propaganda',
    },
  ];
  return primaryMenuItems;
};
