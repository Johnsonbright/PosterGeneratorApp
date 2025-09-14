import { PosterCategory } from "../types/index.";


export const POSTER_CATEGORIES: PosterCategory[] = [
  { id: 1, title: 'New Arrivals', type: 'display' },
  { id: 2, title: 'Up to 50% Off', type: 'promotion' },
  { id: 3, title: "Editor's Choice", type: 'branding' },
  { id: 4, title: 'Profile', type: 'announcement' },
  { id: 5, title: 'Business', type: 'business' },
];

export const POSTER_SIZES = [
  '1080 x 1920 px',
  '1080 x 1080 px',
  '1920 x 1080 px',
  '800 x 1200 px',
];

export const POSTER_CATEGORIES_LIST = [
  'Foods and beverage',
  'Fashion',
  'Technology',
  'Travel',
  'Health & Fitness',
];