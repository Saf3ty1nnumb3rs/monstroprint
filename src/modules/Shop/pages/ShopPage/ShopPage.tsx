import React, { useState } from 'react';
import GalleryPreview from 'library/components/GalleryPreview';
import { useShopDataConfig } from 'library/data/shopItems';

const ShopPage = (): React.ReactElement => {
  const collections = useShopDataConfig();
  const [shopData] = useState(collections);

  return (
    <div className="shoppage">
      {shopData.map(({ id, ...collectionProps }) => {
        return <GalleryPreview key={id} {...collectionProps} />;
      })}
    </div>
  );
};

export default ShopPage;
