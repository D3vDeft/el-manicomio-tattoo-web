import { defineStore } from 'pinia';

export interface PortfolioImage {
  src: string;
  alt: string;
}

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    images: [
      {
        src: 'https://elmanicomiotattoo.es/wp-content/uploads/2025/04/01T2.webp',
        alt: 'Tatuaje realizado en El Manicomio Tattoo Madrid',
      },
      {
        src: 'https://elmanicomiotattoo.es/wp-content/uploads/2024/07/Blackout-5-scaled.jpg',
        alt: 'Tatuaje personalizado realizado en Madrid',
      },
      {
        src: 'https://elmanicomiotattoo.es/wp-content/uploads/2025/04/1-1-scaled.webp',
        alt: 'Trabajo de tatuaje realizado en Madrid',
      },
      {
        src: 'https://elmanicomiotattoo.es/wp-content/uploads/2024/07/Color-3.jpg',
        alt: 'Tatuaje artístico realizado por El Manicomio Tattoo',
      },
    ] as PortfolioImage[],

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
