export type SelectablePrimaryMenuItem = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  link?: string;
  className?: string;
  contentClass?: string;
};

export type GalleryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};
