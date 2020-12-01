import { SelectablePrimaryMenuItem } from 'library/types/BaseComponentTypes';

export const usePrimaryMenuItemConfig = (): SelectablePrimaryMenuItem[] => {
  const primaryMenuItems = [
    {
      title: 'HATS',
      subtitle: 'SHOP NOW',
      className: 'hats',
    },
    {
      title: 'JACKETS',
      subtitle: 'SHOP NOW',
      className: 'jackets',
    },
    {
      title: 'PANTS',
      subtitle: 'SHOP NOW',
      className: 'pants',
    },
    {
      title: "WOMEN'S",
      subtitle: 'SHOP NOW',
      className: 'womens',
    },
    {
      title: "MEN'S",
      subtitle: 'SHOP NOW',
      className: 'mens',
    },
  ];
  return primaryMenuItems;
};
