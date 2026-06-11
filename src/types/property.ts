export interface Agent {
  name: string;
  role: string;
  phone: string;
  email: string;
  avatar: string;
}

export type PropertyType = 'house' | 'apartment' | 'villa' | 'condo' | 'land';
export type ListingStatus = 'sale' | 'rent';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: PropertyType;
  status: ListingStatus;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  yearBuilt: number;
  garages: number;
  image: string;
  images: string[];
  featured: boolean;
  lat: number;
  lng: number;
  amenities: string[];
  agent: Agent;
}
