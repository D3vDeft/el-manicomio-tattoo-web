<template>
    <section class="relative py-24 md:py-32">
        <div class="relative z-10">
            <div class="max-w-7xl mx-auto px-6 mb-12">
                <p class="uppercase tracking-[0.35em] text-xl text-white/60 mb-4">
                    {{ $t('home.portfolio.section-name') }}
                </p>

                <h2 class="font-display text-7xl text-white">
                    {{ $t('home.portfolio.title') }}
                </h2>

                <p class="text-white/70 max-w-xl mt-5 leading-7 text-2xl">
                    {{ $t('home.portfolio.description') }}
                </p>

                <!-- Redes sociales -->
                <div class="flex flex-wrap items-center gap-4 mt-8">
                    <a href="https://www.instagram.com/elmanicomiotattoo/" target="_blank" rel="noopener noreferrer"
                        class="group inline-flex items-center gap-3 border border-white/20 px-9 py-5 text-white/80 hover:text-white hover:border-white/50 transition-all duration-300"
                        aria-label="Instagram de El Manicomio Tattoo">
                        <Camera :size="20" :stroke-width="1.5"
                            class="transition-transform duration-300 group-hover:scale-110" />
                        <span class="text-sm uppercase tracking-[0.2em]">
                            Instagram
                        </span>
                    </a>

                    <a href="https://www.tiktok.com/@elmanicomiotattoo" target="_blank" rel="noopener noreferrer"
                        class="group inline-flex items-center gap-3 border border-white/20 px-9 py-5 text-white/80 hover:text-white hover:border-white/50 transition-all duration-300"
                        aria-label="TikTok de El Manicomio Tattoo">
                        <Music2 :size="20" :stroke-width="1.5"
                            class="transition-transform duration-300 group-hover:scale-110" />
                        <span class="text-sm uppercase tracking-[0.2em]">
                            TikTok
                        </span>
                    </a>
                </div>
            </div>

            <!-- Cinta infinita -->
            <div class="relative w-full overflow-hidden">
                <div
                    class="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-linear-to-r from-black/40 to-transparent pointer-events-none">
                </div>

                <div
                    class="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-linear-to-l from-black/40 to-transparent pointer-events-none">
                </div>

                <div class="flex w-max animate-marquee" :class="{ 'marquee-paused': selectedImage !== null }">
                    <div v-for="group in 2" :key="group" class="flex gap-5 pr-5"
                        :aria-hidden="group === 2 ? 'true' : undefined">
                        <button v-for="(image, index) in images" :key="`${group}-${image.src}`" type="button"
                            class="shrink-0 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            :aria-label="`Ampliar imagen ${index + 1}`" @click="openImage(index)">
                            <img :src="image.src" :alt="image.alt"
                                class="w-62.5 md:w-75 lg:w-85 h-105 md:h-120 object-cover" loading="lazy" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolio'
import { Camera, Music2 } from '@lucide/vue'

const portfolioStore = usePortfolioStore()

const { images, selectedImage } = storeToRefs(portfolioStore)

const openImage = (index: number) => {
    portfolioStore.openImage(index)
}
</script>

<style scoped>
.animate-marquee {
    animation: marquee 15s linear infinite;
}

.marquee-paused {
    animation-play-state: paused;
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

@media (prefers-reduced-motion: reduce) {
    .animate-marquee {
        animation-play-state: paused;
    }
}
</style>