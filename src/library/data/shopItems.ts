import { GalleryItem } from 'library/types/BaseComponentTypes';

interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: GalleryItem[];
}

export const useShopDataConfig = (): Collection[] => {
  return [
    {
      id: 1,
      title: 'Sci Fi',
      routeName: 'scifi',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 25,
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'http://www.fillmurray.com/g/300/300',
          price: 18,
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://stevensegallery.com/400/400',
          price: 35,
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://www.placecage.com/c/300/300',
          price: 25,
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 18,
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://www.placecage.com/c/300/300',
          price: 14,
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 18,
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://www.placecage.com/300/300',
          price: 14,
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 16,
        },
      ],
    },
    {
      id: 2,
      title: 'Industrial',
      routeName: 'industrial',
      items: [
        {
          id: 1,
          name: 'Adidas NMD Print',
          imageUrl: ' https://stevensegallery.com/g/300/300',
          price: 220,
        },
        {
          id: 2,
          name: 'Adidas Yeezy Print',
          imageUrl: 'https://www.placecage.com/c/300/300',
          price: 280,
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 110,
        },
        {
          id: 4,
          name: "Nic Cage's White ConAirForce One",
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160,
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 160,
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160,
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 190,
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200,
        },
      ],
    },
    {
      id: 3,
      title: 'Historic',
      routeName: 'historic',
      items: [
        {
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl: 'http://www.fillmurray.com/300/500',
          price: 125,
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://stevensegallery.com/200/300',
          price: 90,
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: 'http://www.fillmurray.com/180/300',
          price: 90,
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl: ' https://stevensegallery.com/300/300',
          price: 165,
        },
        {
          id: 5,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185,
        },
      ],
    },
    {
      id: 4,
      title: 'Imported',
      routeName: 'imported',
      items: [
        {
          id: 1,
          name: 'Blue Tanktop',
          imageUrl: 'https://www.placecage.com/300/400',
          price: 25,
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl: 'http://www.fillmurray.com/g/300/500',
          price: 20,
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: 'https://www.placecage.com/c/300/500',
          price: 80,
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: 'http://www.fillmurray.com/g/400/300',
          price: 80,
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45,
        },
        {
          id: 6,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135,
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: 'http://www.fillmurray.com/g/200/300',
          price: 20,
        },
      ],
    },
    {
      id: 5,
      title: 'Propaganda',
      routeName: 'propaganda',
      items: [
        {
          id: 1,
          name: 'Camo Down Print',
          imageUrl: 'http://www.fillmurray.com/g/300/200',
          price: 325,
        },
        {
          id: 2,
          name: 'Floral Print',
          imageUrl: 'https://www.placecage.com/c/300/300',
          price: 20,
        },
        {
          id: 3,
          name: 'Black & White Print',
          imageUrl: 'https://www.placecage.com/200/400',
          price: 25,
        },
        {
          id: 4,
          name: 'Pink Print',
          imageUrl: ' https://stevensegallery.com/300/400',
          price: 25,
        },
        {
          id: 5,
          name: 'Jean Print',
          imageUrl: 'https://www.placecage.com/c/300/300',
          price: 40,
        },
        {
          id: 6,
          name: 'Burgundy Print',
          imageUrl: 'http://www.fillmurray.com/g/300/300',
          price: 25,
        },
      ],
    },
  ];
};
