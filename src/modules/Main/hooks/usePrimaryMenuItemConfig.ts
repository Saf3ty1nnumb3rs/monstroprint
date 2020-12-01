import { SelectablePrimaryMenuItem } from 'library/types/BaseComponentTypes';

export const usePrimaryMenuItemConfig = (): SelectablePrimaryMenuItem[] => {
  const primaryMenuItems = [
    {
      title: 'sci fi',
      subtitle: 'SHOP NOW',
      imageUrl:
        'https://drive.google.com/uc?id=13_m7CVDlUPYdkkWtFdkLXnziCiOqluHt',
      className: 'small',
    },
    {
      title: 'industrial',
      subtitle: 'SHOP NOW',
      imageUrl:
        'https://drive.google.com/uc?id=1_gRxjg9iDiSQN3drtv4ZGzta2mpzglqo',
      className: 'small',
    },
    {
      title: 'historic',
      subtitle: 'SHOP NOW',
      imageUrl:
        'https://drive.google.com/uc?id=1FasurgWsETQxh-XrzAjg3Ks90rXz1Vas',
      className: 'small',
    },
    {
      title: 'imported',
      subtitle: 'SHOP NOW',
      imageUrl:
        'https://drive.google.com/uc?id=1dE1xYZUuWrbjidR-FkscxE_nARybPGgs',
      className: 'large',
    },
    {
      title: 'propaganda',
      subtitle: 'SHOP NOW',
      imageUrl:
        'https://drive.google.com/uc?id=1SvpNUlllPii8mj-dMYMLkIfV8ZBs3JON',
      className: 'large',
    },
  ];
  return primaryMenuItems;
};
