import React from 'react';
import { CartItemProps } from 'library/types/BaseComponentTypes';
import GalleryItem from 'library/components/GalleryItem';
import 'scss/components/_GalleryPreview.scss';

const GalleryPreview = ({
  title,
  items,
}: {
  title: string;
  items: CartItemProps[];
}): React.ReactElement => {
  return (
    <div className="gallery-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map((prev) => {
            return <GalleryItem key={prev.id} {...prev} />;
          })}
      </div>
    </div>
  );
};

export default GalleryPreview;
