<template>
  <section class="gallery-wall relative py-16 sm:py-20 md:py-28" aria-labelledby="tattoo-gallery-title">
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
      <p class="mb-3 text-xs uppercase tracking-[0.3em] text-[#c8b58c] sm:text-sm sm:tracking-[0.35em]">
        {{ $t('home.portfolio.section-name') }}
      </p>
      <h2 id="tattoo-gallery-title" class="font-display text-5xl text-white sm:text-6xl md:text-7xl">
        {{ $t('tattoos.gallery.title') }}
      </h2>
      <p class="mt-4 max-w-xl text-base leading-7 text-white/75 sm:text-lg md:text-xl">
        {{ $t('tattoos.gallery.description') }}
      </p>

      <div
        v-if="media.length"
        class="mt-10 grid grid-cols-2 items-center gap-x-5 gap-y-9 sm:mt-14 sm:gap-x-8 sm:gap-y-12 md:grid-cols-3 xl:grid-cols-4"
      >
        <button
          v-for="(item, index) in media"
          :key="item.src"
          type="button"
          class="artwork-frame group relative mx-auto block w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          :class="frameVariants[index % frameVariants.length]"
          :aria-label="$t('tattoos.gallery.open-media', { number: index + 1 })"
          @click="openImage(index)"
        >
          <img
            v-if="item.type === 'image'"
            :src="item.src"
            :alt="item.alt || $t('tattoos.gallery.image-alt')"
            class="artwork-image"
            loading="lazy"
          />
          <video
            v-else
            :src="item.src"
            :aria-label="item.alt || $t('tattoos.gallery.video-alt')"
            class="artwork-image"
            muted
            playsinline
            preload="metadata"
          />
          <span
            v-if="item.type === 'video'"
            class="pointer-events-none absolute bottom-4 right-4 z-10 flex items-center justify-center rounded-full bg-black/65 p-3 text-white shadow-lg"
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
        :class="{ 'viewer--closing': isClosing }"
        role="dialog"
        aria-modal="true"
        :aria-label="$t('tattoos.gallery.viewer-label')"
        @click.self="closeImage"
      >
        <button
          type="button"
          class="viewer-button absolute right-5 top-5 z-10 text-3xl"
          :aria-label="$t('tattoos.gallery.close')"
          @click="closeWithAnimation"
        >
          &times;
        </button>
        <button
          type="button"
          class="viewer-button absolute left-3 top-1/2 z-10 -translate-y-1/2 md:left-6"
          :aria-label="$t('tattoos.gallery.previous')"
          @click="navigate(-1)"
        >
          &#10094;
        </button>
        <div
          class="viewer-media"
          :class="{ 'viewer-media--image': selectedImage.type === 'image' }"
          :style="selectedImage.type === 'image' ? imageStyle : undefined"
          @touchstart.passive="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @touchcancel="handleTouchCancel"
        >
          <Transition :name="transitionName" mode="out-in">
            <img
              v-if="selectedImage.type === 'image'"
              :key="selectedImage.src"
              :src="selectedImage.src"
              :alt="selectedImage.alt || $t('tattoos.gallery.image-alt')"
              class="viewer-media-content"
            />
            <video
              v-else
              :key="selectedImage.src"
              class="viewer-media-content"
              controls
              muted
              playsinline
              preload="metadata"
              :aria-label="selectedImage.alt || $t('tattoos.gallery.video-alt')"
            >
              <source :src="selectedImage.src" type="video/quicktime" />
            </video>
          </Transition>
        </div>
        <button
          type="button"
          class="viewer-button absolute right-3 top-1/2 z-10 -translate-y-1/2 md:right-6"
          :aria-label="$t('tattoos.gallery.next')"
          @click="navigate(1)"
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
import { useSwipeNavigation } from '@/composables/useSwipeNavigation';

const media = tattooMedia;
const frameVariants = [
  'frame--gilt frame--portrait',
  'frame--walnut frame--landscape',
  'frame--dark frame--large frame--wide',
  'frame--ivory frame--oval',
  'frame--walnut frame--large frame--tall',
  'frame--gilt frame--square',
  'frame--dark frame--portrait',
  'frame--ivory frame--large frame--wide',
];
const selectedIndex = ref<number | null>(null);
const selectedImage = computed(() =>
  selectedIndex.value === null ? null : (media[selectedIndex.value] ?? null),
);

let previousOverflow = '';

const openImage = (index: number) => {
  selectedIndex.value = index;
};

const finishClose = () => {
  selectedIndex.value = null;
};

const closeImage = () => closeWithAnimation();

const changeImage = (direction: -1 | 1) => {
  if (selectedIndex.value === null || media.length === 0) return;

  selectedIndex.value = (selectedIndex.value + direction + media.length) % media.length;
};

const {
  transitionName,
  imageStyle,
  isClosing,
  navigate,
  closeWithAnimation,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  handleTouchCancel,
  resetTransform,
} = useSwipeNavigation(changeImage, finishClose);

const handleKeydown = (event: KeyboardEvent) => {
  if (selectedIndex.value === null) return;

  if (event.key === 'Escape') closeImage();
  if (event.key === 'ArrowLeft') navigate(-1);
  if (event.key === 'ArrowRight') navigate(1);
};

watch(selectedIndex, (newValue, oldValue) => {
  if (oldValue === null && newValue !== null) {
    resetTransform();
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
.gallery-wall {
  isolation: isolate;
  background:
    radial-gradient(ellipse at 50% 0%, rgb(118 83 49 / 18%), transparent 58%),
    linear-gradient(115deg, #171310 0%, #211a15 48%, #15120f 100%);
}

.gallery-wall::before,
.gallery-wall::after {
  position: absolute;
  right: 0;
  left: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgb(190 158 104 / 45%), transparent);
  content: '';
}

.gallery-wall::before {
  top: 0;
}

.gallery-wall::after {
  bottom: 0;
}

.artwork-frame {
  aspect-ratio: 4 / 5;
  --frame-thickness: 6px;
  border: var(--frame-thickness) solid transparent;
  border-radius: var(--frame-radius, 3px);
  background: var(--frame-gradient) border-box;
  box-shadow:
    0 2px 0 rgb(255 255 255 / 35%) inset,
    0 -3px 0 rgb(0 0 0 / 45%) inset,
    0 10px 20px rgb(0 0 0 / 50%),
    0 24px 32px rgb(0 0 0 / 24%);
  transform: rotate(var(--frame-tilt));
  transition:
    transform 300ms ease,
    box-shadow 300ms ease;
}

.viewer-media {
  display: flex;
  max-width: 90vw;
  max-height: 85vh;
  align-items: center;
  justify-content: center;
  transform-origin: center;
  will-change: transform, opacity;
}

.viewer-media--image {
  touch-action: none;
}

.viewer--closing {
  background-color: transparent;
  transition: background-color 280ms ease;
}

.viewer-media-content {
  display: block;
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  will-change: transform, opacity;
  pointer-events: none;
}

.viewer-slide-next-enter-active,
.viewer-slide-next-leave-active,
.viewer-slide-previous-enter-active,
.viewer-slide-previous-leave-active {
  transition:
    opacity 240ms ease,
    transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
}

.viewer-slide-next-enter-from {
  opacity: 0;
  transform: translateX(48px) scale(0.97);
}

.viewer-slide-next-leave-to {
  opacity: 0;
  transform: translateX(-48px) scale(0.97);
}

.viewer-slide-previous-enter-from {
  opacity: 0;
  transform: translateX(-48px) scale(0.97);
}

.viewer-slide-previous-leave-to {
  opacity: 0;
  transform: translateX(48px) scale(0.97);
}

@media (prefers-reduced-motion: reduce) {
  .viewer-slide-next-enter-active,
  .viewer-slide-next-leave-active,
  .viewer-slide-previous-enter-active,
  .viewer-slide-previous-leave-active {
    transition-duration: 1ms;
  }
}

.artwork-frame::before {
  position: absolute;
  inset: 2px;
  z-index: 1;
  border: 1px solid var(--frame-detail);
  border-radius: calc(var(--frame-radius, 3px) - 2px);
  content: '';
  pointer-events: none;
}

.artwork-frame:hover,
.artwork-frame:focus-visible {
  z-index: 2;
  box-shadow: 0 18px 30px rgb(0 0 0 / 60%), 0 34px 42px rgb(0 0 0 / 28%);
  transform: rotate(0) scale(1.025);
}

.frame--gilt {
  --frame-gradient: linear-gradient(135deg, #efd39a, #9b713a 22%, #d7b574 44%, #795529 72%, #c5a064);
  --frame-detail: rgb(255 235 186 / 65%);
  --frame-tilt: -1deg;
}

.frame--walnut {
  --frame-gradient: linear-gradient(135deg, #81563b, #382319 28%, #70462d 58%, #2b1b14);
  --frame-detail: rgb(216 171 122 / 60%);
  --frame-tilt: 1deg;
}

.frame--ivory {
  --frame-gradient: linear-gradient(135deg, #f1e4c5, #bba67c 28%, #e8d8b2 55%, #a28a62);
  --frame-detail: rgb(255 248 225 / 80%);
  --frame-tilt: -0.65deg;
}

.frame--dark {
  --frame-gradient: linear-gradient(135deg, #72614a, #241f1a 26%, #504331 58%, #171411);
  --frame-detail: rgb(196 165 111 / 75%);
  --frame-tilt: 0.8deg;
}

.artwork-image {
  position: absolute;
  inset: var(--frame-thickness);
  width: calc(100% - var(--frame-thickness) - var(--frame-thickness));
  height: calc(100% - var(--frame-thickness) - var(--frame-thickness));
  border-radius: var(--photo-radius, 1px);
  object-fit: cover;
  object-position: center;
}

.frame--portrait {
  aspect-ratio: 4 / 5;
}

.frame--landscape {
  aspect-ratio: 5 / 4;
  --frame-tilt: 0.7deg;
}

.frame--square {
  aspect-ratio: 1;
}

.frame--oval {
  --frame-radius: 50%;
  --photo-radius: 50%;
}

@media (max-width: 639px) {
  .frame--oval {
    grid-column: span 2;
    justify-self: center;
    width: min(100%, 220px);
  }
}

.frame--large {
  grid-column: span 2;
  width: 100%;
}

.frame--wide {
  aspect-ratio: 3 / 2;
}

.frame--tall {
  aspect-ratio: 5 / 6;
}

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

@media (min-width: 640px) {
  .artwork-frame {
    --frame-thickness: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .artwork-frame {
    transition: none;
  }
}

</style>
