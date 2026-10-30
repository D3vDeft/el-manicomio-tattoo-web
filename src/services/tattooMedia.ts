export interface TattooImage {
  type: 'image';
  src: string;
  alt: string;
}

export interface TattooVideo {
  type: 'video';
  src: string;
  alt: string;
}

export type TattooMedia = TattooImage | TattooVideo;

const imageModules = import.meta.glob<string>('/src/assets/tattoos-images/*.jpeg', {
  eager: true,
  import: 'default',
  query: '?url',
});

const videoModules = import.meta.glob<string>('/src/assets/tattoos-images/*.mov', {
  eager: true,
  import: 'default',
  query: '?url',
});

const mediaModules = [...Object.entries(imageModules), ...Object.entries(videoModules)];

export const tattooMedia: TattooMedia[] = mediaModules
  .sort(([firstPath], [secondPath]) =>
    firstPath.localeCompare(secondPath, 'en', { numeric: true }),
  )
  .map(([path, src]): TattooMedia => ({
    type: path.toLowerCase().endsWith('.mov') ? 'video' : 'image',
    src,
    alt: '',
  }));

export const tattooImages: TattooImage[] = tattooMedia.filter(
  (media): media is TattooImage => media.type === 'image',
);
