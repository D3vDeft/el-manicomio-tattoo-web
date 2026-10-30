<template>
  <section class="relative py-24 md:py-32" aria-labelledby="tattoo-gallery-title">
    <div class="max-w-7xl mx-auto px-6">
      <p class="uppercase tracking-[0.35em] text-xl text-white/60 mb-4">
        {{ $t('home.portfolio.section-name') }}
      </p>
      <h2 id="tattoo-gallery-title" class="font-display text-5xl md:text-7xl text-white">
        {{ $t('tattoos.gallery.title') }}
      </h2>
      <p class="text-white/70 max-w-xl mt-5 leading-7 text-xl md:text-2xl">
        {{ $t('tattoos.gallery.description') }}
      </p>

      <div v-if="media.length" class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="(item, index) in media"
          :key="item.src"
          type="button"
          class="group relative mx-auto block h-105 w-62.5 overflow-hidden bg-white/5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:h-120 md:w-75 lg:w-85"
          :aria-label="$t('tattoos.gallery.open-media', { number: index + 1 })"
          @click="openImage(index)"
        >
          <img
            v-if="item.type === 'image'"
            :src="item.src"
            :alt="item.alt || $t('tattoos.gallery.image-alt')"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <video
            v-else
            :src="item.src"
            :aria-label="item.alt || $t('tattoos.gallery.video-alt')"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            muted
            playsinline
            preload="metadata"
          />
          <span
            class="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"
            aria-hidden="true"
          />
          <span
            v-if="item.type === 'video'"
            class="pointer-events-none absolute bottom-4 right-4 flex items-center justify-center rounded-full bg-black/50 p-3 text-white"
            aria-hidden="true"
          >
            <Play :size="20" :stroke-width="1.5" />
          </span>
        </button>
      </div>
      <p v-else class="py-16 text-center text-white/70">
        {{ $t('tattoos.gallery.empty') }}
      </p>
    </div>

    <Teleport to="body">
      <div
        v-if="selectedIndex !== null && selectedImage"
        class="fixed inset-0 z-9999 flex items-center justify-center bg-black/95 p-5 md:p-14"
        role="dialog"
        aria-modal="true"
        :aria-label="$t('tattoos.gallery.viewer-label')"
        @click.self="closeImage"
      >
        <button
          type="button"
          class="viewer-button absolute right-5 top-5 text-3xl"
          :aria-label="$t('tattoos.gallery.close')"
          @click="closeImage"
        >
          &times;
        </button>
        <button
          type="button"
          class="viewer-button absolute left-3 top-1/2 -translate-y-1/2 md:left-6"
          :aria-label="$t('tattoos.gallery.previous')"
          @click="changeImage(-1)"
        >
          &#10094;
        </button>
        <img
          v-if="selectedImage.type === 'image'"
          :src="selectedImage.src"
          :alt="selectedImage.alt || $t('tattoos.gallery.image-alt')"
          class="max-h-[85vh] max-w-[90vw] object-contain"
        />
        <video
          v-else
          :key="selectedImage.src"
          class="max-h-[85vh] max-w-[90vw] object-contain"
          controls
          muted
          playsinline
          preload="metadata"
          :aria-label="selectedImage.alt || $t('tattoos.gallery.video-alt')"
        >
          <source :src="selectedImage.src" type="video/quicktime" />
        </video>
        <button
          type="button"
          class="viewer-button absolute right-3 top-1/2 -translate-y-1/2 md:right-6"
          :aria-label="$t('tattoos.gallery.next')"
          @click="changeImage(1)"
        >
          &#10095;
        </button>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { Play } from '@lucide/vue';
import { tattooMedia } from '@/services/tattooMedia';

const media = tattooMedia;
const selectedIndex = ref<number | null>(null);
const selectedImage = computed(() =>
  selectedIndex.value === null ? null : (media[selectedIndex.value] ?? null),
);

let previousOverflow = '';

const openImage = (index: number) => {
  selectedIndex.value = index;
};

const closeImage = () => {
  selectedIndex.value = null;
};

const changeImage = (direction: number) => {
  if (selectedIndex.value === null || media.length === 0) return;

  selectedIndex.value = (selectedIndex.value + direction + media.length) % media.length;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (selectedIndex.value === null) return;

  if (event.key === 'Escape') closeImage();
  if (event.key === 'ArrowLeft') changeImage(-1);
  if (event.key === 'ArrowRight') changeImage(1);
};

watch(selectedIndex, (newValue, oldValue) => {
  if (oldValue === null && newValue !== null) {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  } else if (oldValue !== null && newValue === null) {
    document.body.style.overflow = previousOverflow;
  }
});

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = previousOverflow;
});
</script>

<style scoped>
.viewer-button {
  border: 1px solid rgb(255 255 255 / 35%);
  background: rgb(0 0 0 / 45%);
  padding: 0.75rem;
  color: white;
  line-height: 1;
}

.viewer-button:focus-visible {
  outline: 2px solid white;
  outline-offset: 4px;
}

</style>
