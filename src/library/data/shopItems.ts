import { CartItemProps } from 'library/types/BaseComponentTypes';

interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: CartItemProps[];
}
// This would normally of course come from an API but
// I thought that might be excessive for our purposes
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
          quantity: 0,
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'http://www.fillmurray.com/g/300/300',
          price: 18,
          quantity: 0,
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://stevensegallery.com/400/400',
          price: 35,
          quantity: 0,
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://www.placecage.com/c/300/300',
          price: 25,
          quantity: 0,
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 18,
          quantity: 0,
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://www.placecage.com/c/300/300',
          price: 14,
          quantity: 0,
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 18,
          quantity: 0,
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://www.placecage.com/300/300',
          price: 14,
          quantity: 0,
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 16,
          quantity: 0,
        },
      ],
    },
    {
      id: 2,
      title: 'Industrial',
      routeName: 'industrial',
      items: [
        {
          id: 10,
          name: 'Adidas NMD Print',
          imageUrl: ' https://stevensegallery.com/g/300/300',
          price: 220,
          quantity: 0,
        },
        {
          id: 11,
          name: 'Adidas Yeezy Print',
          imageUrl: 'https://www.placecage.com/c/300/300',
          price: 280,
          quantity: 0,
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 110,
          quantity: 0,
        },
        {
          id: 13,
          name: "Nic Cage's White ConAirForce One",
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160,
          quantity: 0,
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 160,
          quantity: 0,
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160,
          quantity: 0,
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'http://www.fillmurray.com/300/300',
          price: 190,
          quantity: 0,
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200,
          quantity: 0,
        },
      ],
    },
    {
      id: 3,
      title: 'Historic',
      routeName: 'historic',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: 'http://www.fillmurray.com/300/500',
          price: 125,
          quantity: 0,
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://stevensegallery.com/200/300',
          price: 90,
          quantity: 0,
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: 'http://www.fillmurray.com/180/300',
          price: 90,
          quantity: 0,
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: ' https://stevensegallery.com/300/300',
          price: 165,
          quantity: 0,
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185,
          quantity: 0,
        },
      ],
    },
    {
      id: 4,
      title: 'Imported',
      routeName: 'imported',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: 'https://www.placecage.com/300/400',
          price: 25,
          quantity: 0,
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: 'http://www.fillmurray.com/g/300/500',
          price: 20,
          quantity: 0,
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: 'https://www.placecage.com/c/300/500',
          price: 80,
          quantity: 0,
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: 'http://www.fillmurray.com/g/400/300',
          price: 80,
          quantity: 0,
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45,
          quantity: 0,
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135,
          quantity: 0,
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'http://www.fillmurray.com/g/200/300',
          price: 20,
          quantity: 0,
        },
      ],
    },
    {
      id: 5,
      title: 'Propaganda',
      routeName: 'propaganda',
      items: [
        {
          id: 30,
          name: 'Camo Down Print',
          imageUrl: 'http://www.fillmurray.com/g/300/200',
          price: 325,
          quantity: 0,
        },
        {
          id: 31,
          name: 'Floral Print',
          imageUrl: 'https://www.placecage.com/c/300/300',
          price: 20,
          quantity: 0,
        },
        {
          id: 32,
          name: 'Black & White Print',
          imageUrl: 'https://www.placecage.com/200/400',
          price: 25,
          quantity: 0,
        },
        {
          id: 33,
          name: 'Pink Print',
          imageUrl: ' https://stevensegallery.com/300/400',
          price: 25,
          quantity: 0,
        },
        {
          id: 34,
          name: 'Jean Print',
          imageUrl: 'https://www.placecage.com/c/300/300',
          price: 40,
          quantity: 0,
        },
        {
          id: 35,
          name: 'Burgundy Print',
          imageUrl: 'http://www.fillmurray.com/g/300/300',
          price: 25,
          quantity: 0,
        },
      ],
    },
  ];
};
