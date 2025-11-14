export interface LocalizedString {
  zh: string;
  ja: string;
  en: string;
}

export interface Artist {
  slug: string;
  name: LocalizedString;
  avatar: string;
  nationality: LocalizedString;
  bio: LocalizedString;
  artworks: string[]; // artwork IDs
  birthYear?: string;
  education?: LocalizedString;
  exhibitions?: LocalizedString;
}

export interface Artwork {
  id: string;
  title: LocalizedString;
  image: string;
  year: string;
  medium: LocalizedString;
  size: string;
  artistSlug: string;
  description?: LocalizedString;
  price?: string;
  category?: string; // 'painting' | 'sculpture' | 'digital' | 'installation'
}

export interface News {
  id: string;
  title: LocalizedString;
  slug: string;
  excerpt: LocalizedString;
  content: LocalizedString;
  image: string;
  date: string;
  category: 'exhibition' | 'news' | 'event';
}

export type Locale = 'zh' | 'ja' | 'en';
