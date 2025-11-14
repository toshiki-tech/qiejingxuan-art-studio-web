export interface LocalizedString {
  zh: string;
  ja: string;
  en: string;
}

export interface Artist {
  slug: string;
  name: LocalizedString;
  avatar: string;
  nationality: string;
  bio: LocalizedString;
  artworks: string[]; // artwork IDs
}

export interface Artwork {
  id: string;
  title: LocalizedString;
  image: string;
  year: string;
  medium: LocalizedString;
  size: string;
  artistSlug: string;
}

export type Locale = 'zh' | 'ja' | 'en';

