import React from 'react';
import Button from 'library/components/Button';
import { useCallCartDispatch } from 'library/hooks/useCallCartDispatch';
import { CartItemProps } from 'library/types/BaseComponentTypes';

import 'scss/components/_GalleryItem.scss';

const GalleryItem = ({
  id,
  name,
  price,
  imageUrl,
  quantity = 0,
}: CartItemProps): React.ReactElement => {
  const { addItem } = useCallCartDispatch();
  const style = imageUrl ? { backgroundImage: `url(${imageUrl})` } : {};
  return (
    <div className="collection-item">
      <div className="image" style={style} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        inverted
        onClick={() =>
          addItem({
            id,
            name,
            price,
            imageUrl,
            quantity,
          })
        }
      >
        Add to cart
      </Button>
    </div>
  );
};

export default GalleryItem;
