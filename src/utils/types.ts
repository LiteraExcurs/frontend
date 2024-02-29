export enum Location {
  Capital = 'Moscow',
  Region = 'noMoscow',
}

export type TEvent = {
  id: number;
  createdAt: string;
  updatedAt: string
  date: string;
  isActive: boolean;
  name: string;
  description: string;
  slug: string;
  part: number;
  price: number;
  rating: number;
  subtitle: string;
  capacity: number;
}
