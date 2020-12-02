import React from 'react';
import { GalleryItem as GalleryItemProps } from 'library/types/BaseComponentTypes';

import 'scss/components/_GalleryItem.scss';

const GalleryItem = ({
  id,
  name,
  price,
  imageUrl,
}: GalleryItemProps): React.ReactElement => {
  const style = imageUrl ? { backgroundImage: `url(${imageUrl})` } : {};
  return (
    <div className="collection-item">
      <div className="image" style={style} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default GalleryItem;
