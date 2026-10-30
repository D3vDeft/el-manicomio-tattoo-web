<template>
    <div class="text-white bg-black/40 py-20 md:py-28">
        <section class="max-w-6xl mx-auto px-6">
            <p class="uppercase tracking-[0.35em] text-white/60 text-sm mb-4">{{ $t('tattoos.section-name') }}</p>
            <h1 class="font-display text-5xl md:text-6xl mb-6 text-white">{{ $t('tattoos.title') }}</h1>
            <p class="max-w-4xl text-lg md:text-xl leading-8 text-white/80 mb-10">{{ $t('tattoos.intro') }}</p>

            <div class="mt-12 mb-10 grid max-w-6xl gap-6 text-left md:grid-cols-3 mx-auto">
                <article class="my-auto bg-[#0d0d0d] border border-[#2a251f] rounded-none p-6 shadow-[0_0_15px_rgba(0,0,0,0.9)] relative overflow-hidden group">
                    <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8c7853] opacity-70"></div>
                    <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#8c7853] opacity-70"></div>
                    <div class="space-y-3">
                        <h2 class="text-4xl font-display text-[#e5e5e5] tracking-wide leading-tight font-bold text-center">
                            {{ $t('tattoos.features.one.title') }}
                        </h2>
                        <div class="flex items-center justify-center my-2 opacity-40">
                            <div class="h-px bg-[#8c7853] w-full"></div>
                            <span class="px-2 text-[#8c7853] text-xs">◆</span>
                            <div class="h-px bg-[#8c7853] w-full"></div>
                        </div>
                        <p class="text-white/75 font-sans leading-relaxed text-xl">
                            {{ $t('tattoos.features.one.text') }}
                        </p>
                    </div>
                    <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#8c7853] opacity-70"></div>
                    <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8c7853] opacity-70"></div>
                </article>
                <article class="my-2 bg-[#0d0d0d] border border-[#2a251f] rounded-none p-6 shadow-[0_0_15px_rgba(0,0,0,0.9)] relative overflow-hidden group md:my-10">
                    <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8c7853] opacity-70"></div>
                    <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#8c7853] opacity-70"></div>
                    <div class="space-y-3">
                        <h2 class="text-4xl font-display text-[#e5e5e5] tracking-wide leading-tight font-bold text-center">
                            {{ $t('tattoos.features.two.title') }}
                        </h2>
                        <div class="flex items-center justify-center my-2 opacity-40">
                            <div class="h-px bg-[#8c7853] w-full"></div>
                            <span class="px-2 text-[#8c7853] text-xs">◆</span>
                            <div class="h-px bg-[#8c7853] w-full"></div>
                        </div>
                        <p class="text-white/75 font-sans leading-relaxed text-xl">
                            {{ $t('tattoos.features.two.text') }}
                        </p>
                    </div>
                    <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#8c7853] opacity-70"></div>
                    <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8c7853] opacity-70"></div>
                </article>
                <article class="my-2 bg-[#0d0d0d] border border-[#2a251f] rounded-none p-6 shadow-[0_0_15px_rgba(0,0,0,0.9)] relative overflow-hidden group md:my-10">
                    <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8c7853] opacity-70"></div>
                    <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#8c7853] opacity-70"></div>
                    <div class="space-y-3">
                        <h2 class="text-4xl font-display text-[#e5e5e5] tracking-wide leading-tight font-bold text-center">
                            {{ $t('tattoos.features.three.title') }}
                        </h2>
                        <div class="flex items-center justify-center my-2 opacity-40">
                            <div class="h-px bg-[#8c7853] w-full"></div>
                            <span class="px-2 text-[#8c7853] text-xs">◆</span>
                            <div class="h-px bg-[#8c7853] w-full"></div>
                        </div>
                        <p class="text-white/75 font-sans leading-relaxed text-xl">
                            {{ $t('tattoos.features.three.text') }}
                        </p>
                    </div>
                    <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#8c7853] opacity-70"></div>
                    <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8c7853] opacity-70"></div>
                </article>
            </div>

            <div class="space-y-6 text-lg leading-8 text-white/75 max-w-4xl">
                <p>{{ $t('tattoos.paragraph-1') }}</p>
                <p>{{ $t('tattoos.paragraph-2') }}</p>
            </div>

            <div class="mt-12">
                <a href="https://wa.me/34674444826?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20para%20un%20tatuaje."
                    target="_blank" rel="noopener noreferrer"
                    class="inline-flex border border-white/50 hover:bg-white hover:text-black px-7 py-3 uppercase tracking-[0.2em] text-base transition-all duration-300">
                    {{ $t('tattoos.cta') }}
                </a>
            </div>
        </section>
    </div>
    <TattooGalleryComponent />
</template>

<script setup lang="ts">
import TattooGalleryComponent from '@/views/tattoo/components/TattooGalleryComponent.vue';
</script>
