export type RequestData = {
  name: string;
  phoneNumber: string;
  email: string;
  visitors: number;
  date: string;
  event: string;
  eventId: number;
};

export type TEvent = {
  id: number;
  createdAt: string;
  updatedAt: string;
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
};

export type TEventsData = Array<TEvent>