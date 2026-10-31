import { defineStore } from 'pinia';
import { tattooImages } from '@/services/tattooMedia';

export interface PortfolioImage {
  src: string;
  alt: string;
}

function getRandomPortfolioImages(): PortfolioImage[] {
  const candidates = [...tattooImages];
  const count = Math.min(5, candidates.length);

  for (let index = 0; index < count; index += 1) {
    const randomIndex = index + Math.floor(Math.random() * (candidates.length - index));
    const currentImage = candidates[index];
    const randomImage = candidates[randomIndex];

    if (!currentImage || !randomImage) continue;

    candidates[index] = randomImage;
    candidates[randomIndex] = currentImage;
  }

  return candidates.slice(0, count).map((image) => ({
    ...image,
    alt: image.alt || 'Tatuaje realizado en El Manicomio Tattoo Madrid',
  }));
}

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    images: getRandomPortfolioImages(),
    selectedImage: null as number | null,
  }),

  getters: {
    currentImage: (state) => {
      if (state.selectedImage === null) return null;

      return state.images[state.selectedImage] ?? null;
    },
  },

  actions: {
    openImage(index: number) {
      this.selectedImage = index;
    },

    closeImage() {
      this.selectedImage = null;
    },

    changeImage(direction: number) {
      if (this.selectedImage === null) return;

      this.selectedImage =
        (this.selectedImage + direction + this.images.length) % this.images.length;
    },
  },
});
