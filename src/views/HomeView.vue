<template>
    <div class="text-white overflow-hidden">
        <!-- HERO -->
        <section class="relative w-full h-[calc(100vh-140px)] overflow-hidden">
            <video autoplay muted loop playsinline preload="metadata"
                class="absolute inset-0 w-full h-full object-cover">
                <source src="https://elmanicomiotattoo.es/wp-content/uploads/2025/07/vidFondo-1.mp4" type="video/mp4">
            </video>

            <div class="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/80"></div>

            <div class="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center text-center pb-12 md:pb-16 px-6">
                <img src="../assets/logo-letter.webp" alt="El Manicomio Tattoo"
                    class="w-64 md:w-80 lg:w-105 drop-shadow-2xl">
                <p class="mt-5 text-sm md:text-base tracking-[0.35em] uppercase text-white font-medium drop-shadow-lg">
                    Tattoo · Piercing · Body Art
                </p>
            </div>
        </section>

        <!-- PRESENTACIÓN -->
        <section class="relative py-24 md:py-32">
            <div class="absolute inset-0 bg-black/35"></div>

            <div class="relative z-10 max-w-5xl mx-auto px-6">
                <div class="text-center">
                    <p class="uppercase tracking-[0.35em] text-xl md:text-sm text-white/60 mb-5">
                        El Manicomio Tattoo
                    </p>

                    <h1 class="font-display text-7xl leading-tight text-white mb-10 drop-shadow-lg">
                        {{ $t('home.hero.title') }}
                    </h1>

                    <!-- TEXTO OCULTO PARA EL SEO -->
                    <div class="hidden max-w-3xl mx-auto space-y-6 text-white text-xl leading-8 drop-shadow-md">
                        <p>{{ $t('home.hero.paragraph-1') }}</p>
                        <p>{{ $t('home.hero.paragraph-2') }}</p>
                        <p>{{ $t('home.hero.paragraph-3') }}</p>
                        <p>{{ $t('home.hero.paragraph-4') }}</p>
                    </div>

                    <div class="mt-12 grid gap-6 text-left md:grid-cols-3 max-w-5xl mx-auto">
                        <RouterLink to="/tattoos" class="border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
                            <h2 class="text-2xl font-semibold mb-3 text-white">
                                {{ $t('home.hero.cards.card-1.title') }}
                            </h2>
                            <p class="text-white/75 leading-7">
                                {{ $t('home.hero.cards.card-1.description') }}
                            </p>
                        </RouterLink>

                        <RouterLink to="/piercings" class="border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
                            <h2 class="text-2xl font-semibold mb-3 text-white">
                                {{ $t('home.hero.cards.card-2.title') }}
                            </h2>
                            <p class="text-white/75 leading-7">
                                {{ $t('home.hero.cards.card-2.description') }}
                            </p>
                        </RouterLink>

                        <a href="https://www.google.com/maps/search/?api=1&query=El+Manicomio+Tattoo+%26+Piercing+Madrid"
                            class="border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
                            <h2 class="text-2xl font-semibold mb-3 text-white">
                                {{ $t('home.hero.cards.card-3.title') }}
                            </h2>
                            <p class="text-white/75 leading-7">
                                {{ $t('home.hero.cards.card-3.description') }}
                            </p>
                        </a>
                    </div>

                    <a :href="`https://wa.me/34674444826?text=${encodeURIComponent($t('whatsapp-message.text'))}`"
                        target="_blank" rel="noopener noreferrer"
                        class="inline-flex mt-10 border border-white/60 hover:border-white hover:bg-white hover:text-black px-11 py-7 uppercase tracking-[0.2em] text-xl font-medium transition-all duration-300">
                        {{ $t('home.contact-init') }}
                    </a>
                </div>
            </div>
        </section>

        <!-- DIVISORIA -->
        <div class="max-w-6xl mx-auto px-6">
            <div class="border-t border-white/20"></div>
        </div>

        <!-- PORTFOLIO -->
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
                            <span class="text-sm uppercase tracking-[0.2em]">Instagram</span>
                        </a>

                        <a href="https://www.tiktok.com/@elmanicomiotattoo" target="_blank" rel="noopener noreferrer"
                            class="group inline-flex items-center gap-3 border border-white/20 px-9 py-5 text-white/80 hover:text-white hover:border-white/50 transition-all duration-300"
                            aria-label="TikTok de El Manicomio Tattoo">
                            <Music2 :size="20" :stroke-width="1.5"
                                class="transition-transform duration-300 group-hover:scale-110" />
                            <span class="text-sm uppercase tracking-[0.2em]">TikTok</span>
                        </a>
                    </div>
                </div>

                <!-- CINTA INFINITA -->
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
                                    class="w-62.5 md:w-75 lg:w-85 h-105 md:h-120 object-cover" loading="lazy">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- DIVISORIA -->
        <div class="max-w-6xl mx-auto px-6">
            <div class="border-t border-white/20"></div>
        </div>

        <!-- RESEÑAS -->
        <section class="relative py-24 md:py-32">
            <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <p class="uppercase tracking-[0.35em] text-xl text-white/60 mb-4">
                    {{ $t('home.reviews.section-name') }}
                </p>

                <h2 class="font-display text-7xl text-white mb-12 drop-shadow-lg">
                    {{ $t('home.reviews.title') }}
                </h2>

                <div class="flex flex-col items-center">
                    <div class="flex items-center gap-5">
                        <span class="font-display text-7xl text-white">4.9</span>
                        <div class="text-yellow-400 text-2xl tracking-widest">★★★★★</div>
                    </div>

                    <p class="text-white/70 text-xl mt-4 mb-8">
                        {{ $t('home.reviews.description') }}
                    </p>

                    <a href="https://www.google.com/maps/search/?api=1&query=El+Manicomio+Tattoo+%26+Piercing+Madrid"
                        target="_blank" rel="noopener noreferrer"
                        class="border border-white/50 hover:bg-white hover:text-black px-7 py-3 uppercase tracking-[0.2em] text-xl transition-all duration-300">
                        {{ $t('home.reviews.button') }}
                    </a>
                </div>
            </div>
        </section>

        <!-- DIVISORIA -->
        <div class="max-w-6xl mx-auto px-6">
            <div class="border-t border-white/20"></div>
        </div>

        <!-- UBICACIÓN -->
        <section class="relative py-24 md:py-32">
            <div class="relative z-10 max-w-6xl mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div>
                        <p class="uppercase tracking-[0.35em] text-xl text-white/60 mb-4">
                            {{ $t('home.location.section-name') }}
                        </p>

                        <h2 class="font-display text-7xl text-white mb-6">
                            {{ $t('home.location.title') }}
                        </h2>

                        <p class="text-white/70 leading-8 mb-8 text-xl">
                            {{ $t('home.location.description') }}
                        </p>

                        <div class="text-white mb-8 text-2xl leading-8 space-y-1">
                            <p>C. de Gaztambide, 26</p>
                            <p class="text-white/60">Chamberí · 28015 Madrid</p>
                        </div>

                        <a href="https://www.google.com/maps/search/?api=1&query=Calle+de+Gaztambide+26+Madrid"
                            target="_blank" rel="noopener noreferrer"
                            class="inline-flex border border-white/50 hover:bg-white hover:text-black px-7 py-3 uppercase tracking-[0.2em] text-xl transition-all duration-300">
                            {{ $t('home.location.button') }}
                        </a>
                    </div>

                    <!-- MAPA -->
                    <a href="https://www.google.com/maps/search/?api=1&query=Calle+de+Gaztambide+26+Madrid"
                        target="_blank" rel="noopener noreferrer" class="block overflow-hidden shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps?q=Calle%20de%20Gaztambide%2026%2C%20Madrid&output=embed"
                            title="Mapa de El Manicomio Tattoo" class="w-full h-100 border-0 pointer-events-none"
                            loading="lazy"></iframe>
                    </a>
                </div>
            </div>
        </section>

        <!-- VISOR DE IMÁGENES -->
        <Teleport to="body">
            <div v-if="selectedImage !== null" class="lightbox" role="dialog" aria-modal="true"
                aria-label="Visor de imágenes del portfolio" @click.self="closeImage">
                <button type="button" class="lightbox-close" aria-label="Cerrar imagen" @click="closeImage">
                    &times;
                </button>

                <button type="button" class="lightbox-nav lightbox-prev" aria-label="Imagen anterior"
                    @click="changeImage(-1)">
                    &#10094;
                </button>

                <img :src="currentImage?.src" :alt="currentImage?.alt" class="lightbox-image">

                <button type="button" class="lightbox-nav lightbox-next" aria-label="Imagen siguiente"
                    @click="changeImage(1)">
                    &#10095;
                </button>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Camera, Music2 } from '@lucide/vue'

const images = [
    {
        src: 'https://elmanicomiotattoo.es/wp-content/uploads/2025/04/01T2.webp',
        alt: 'Tatuaje realizado en El Manicomio Tattoo Madrid'
    },
    {
        src: 'https://elmanicomiotattoo.es/wp-content/uploads/2024/07/Blackout-5-scaled.jpg',
        alt: 'Tatuaje personalizado realizado en Madrid'
    },
    {
        src: 'https://elmanicomiotattoo.es/wp-content/uploads/2025/04/1-1-scaled.webp',
        alt: 'Trabajo de tatuaje realizado en Madrid'
    },
    {
        src: 'https://elmanicomiotattoo.es/wp-content/uploads/2024/07/Color-3.jpg',
        alt: 'Tatuaje artístico realizado por El Manicomio Tattoo'
    }
]

const selectedImage = ref<number | null>(null)
const currentImage = computed(() => {
    if (selectedImage.value === null) return null
    return images[selectedImage.value] ?? null
})
let previousOverflow = ''

function openImage(index: number) {
    if (selectedImage.value === null) {
        previousOverflow = document.body.style.overflow
    }

    selectedImage.value = index
    document.body.style.overflow = 'hidden'
}

function closeImage() {
    selectedImage.value = null
    document.body.style.overflow = previousOverflow
}

function changeImage(direction: number) {
    if (selectedImage.value === null) return

    selectedImage.value =
        (selectedImage.value + direction + images.length) % images.length
}

function handleKeydown(event: KeyboardEvent) {
    if (selectedImage.value === null) return

    if (event.key === 'Escape') closeImage()
    if (event.key === 'ArrowLeft') changeImage(-1)
    if (event.key === 'ArrowRight') changeImage(1)
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = previousOverflow
})
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

.lightbox {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
    background: rgb(0 0 0 / 92%);
}

.lightbox-image {
    max-width: 90vw;
    max-height: 85vh;
    object-fit: contain;
}

.lightbox-close,
.lightbox-nav {
    position: absolute;
    color: white;
    background: rgb(0 0 0 / 45%);
    border: 1px solid rgb(255 255 255 / 35%);
    cursor: pointer;
    line-height: 1;
}

.lightbox-close {
    top: 20px;
    right: 25px;
    padding: 8px 14px;
    font-size: 32px;
}

.lightbox-nav {
    top: 50%;
    transform: translateY(-50%);
    padding: 14px;
    font-size: 24px;
}

.lightbox-prev {
    left: 18px;
}

.lightbox-next {
    right: 18px;
}

.lightbox-close:focus-visible,
.lightbox-nav:focus-visible {
    outline: 2px solid white;
    outline-offset: 4px;
}

@media (max-width: 640px) {
    .lightbox {
        padding: 45px 12px;
    }

    .lightbox-image {
        max-width: 100%;
        max-height: 80vh;
    }

    .lightbox-nav {
        padding: 10px;
        font-size: 18px;
    }

    .lightbox-prev {
        left: 6px;
    }

    .lightbox-next {
        right: 6px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .animate-marquee {
        animation-play-state: paused;
    }
}
</style>