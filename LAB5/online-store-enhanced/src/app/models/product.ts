/* interface for product, description of object */

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  url: string;
  category: string;
  likes: number;
}
