<template>
  <section class="relative w-full h-[calc(100vh-140px)] overflow-hidden">
    <video
      ref="heroVideo"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="absolute inset-0 w-full h-full object-cover"
      @playing="showPlaybackButton = false"
      @error="handleVideoError"
    >
      <source :src="backgroundVideo" type="video/mp4" />
    </video>

    <div class="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/80"></div>

    <button
      v-if="showPlaybackButton"
      type="button"
      class="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 border border-white/60 bg-black/60 px-6 py-4 text-sm uppercase tracking-[0.2em] text-white backdrop-blur transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      @click="playVideo"
    >
      <Play :size="20" />
      {{ $t('home.hero.play-video') }}
    </button>

    <div
      class="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center text-center pb-12 md:pb-16 px-6"
    >
      <img
        src="../../../assets/logo-letter.webp"
        alt="El Manicomio Tattoo"
        class="w-64 md:w-80 lg:w-105 drop-shadow-2xl"
      />
      <p
        class="mt-5 text-sm md:text-base tracking-[0.35em] uppercase text-white font-medium drop-shadow-lg"
      >
        Tattoo · Piercing · Body Art
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Play } from '@lucide/vue';
import backgroundVideo from '@/assets/video-fondo/vidFondo.mp4';

const heroVideo = ref<HTMLVideoElement | null>(null);
const showPlaybackButton = ref(false);

function playVideo() {
  const video = heroVideo.value;
  if (!video) return;

  video.play().then(
    () => {
      showPlaybackButton.value = false;
    },
    (error: unknown) => {
      showPlaybackButton.value = true;

      if (!(error instanceof DOMException && error.name === 'NotAllowedError')) {
        console.error('No se pudo iniciar el vídeo de portada.', error);
      }
    },
  );
}

function handleVideoError() {
  const videoError = heroVideo.value?.error;
  showPlaybackButton.value = true;
  console.error('No se pudo cargar el vídeo de portada.', {
    source: heroVideo.value?.currentSrc,
    code: videoError?.code,
    message: videoError?.message,
  });
}

onMounted(playVideo);
</script>
