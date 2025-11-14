/**
 * Placeholder image utility
 * Replace these with actual image URLs once you have real images
 */

export function getPlaceholderImage(width: number, height: number, text: string): string {
  return `https://placehold.co/${width}x${height}/e5e5e5/737373?text=${encodeURIComponent(text)}`;
}

// Artist avatars (500x500)
export const artistPlaceholders = {
  'zhang-wei': getPlaceholderImage(500, 500, 'Zhang Wei'),
  'takeshi-yamamoto': getPlaceholderImage(500, 500, 'Takeshi Yamamoto'),
  'emma-chen': getPlaceholderImage(500, 500, 'Emma Chen'),
};

// Artworks (800x1000 portrait)
export const artworkPlaceholders = {
  'artwork-1': getPlaceholderImage(800, 1000, 'Artwork 1'),
  'artwork-2': getPlaceholderImage(800, 1000, 'Artwork 2'),
  'artwork-3': getPlaceholderImage(800, 1000, 'Artwork 3'),
  'artwork-4': getPlaceholderImage(800, 1000, 'Artwork 4'),
  'artwork-5': getPlaceholderImage(800, 1000, 'Artwork 5'),
  'artwork-6': getPlaceholderImage(800, 1000, 'Artwork 6'),
  'artwork-7': getPlaceholderImage(800, 1000, 'Artwork 7'),
  'artwork-8': getPlaceholderImage(800, 1000, 'Artwork 8'),
  'artwork-9': getPlaceholderImage(800, 1000, 'Artwork 9'),
};

