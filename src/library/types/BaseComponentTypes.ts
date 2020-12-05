export type SelectablePrimaryMenuItem = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  link?: string;
  className?: string;
  contentClass?: string;
};

export interface CartItemProps extends GalleryItem {
  quantity?: number;
}

export type GalleryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  type: string;
  value: string;
  required?: boolean;
};
