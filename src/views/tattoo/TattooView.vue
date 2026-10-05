<template>
    <div class="text-white bg-black/40 py-20 md:py-28">
        <section class="max-w-6xl mx-auto px-6">
            <p class="uppercase tracking-[0.35em] text-white/60 text-sm mb-4">{{ $t('tattoos.section-name') }}</p>
            <h1 class="font-display text-5xl md:text-6xl mb-6 text-white">{{ $t('tattoos.title') }}</h1>
            <p class="max-w-4xl text-lg md:text-xl leading-8 text-white/80 mb-10">{{ $t('tattoos.intro') }}</p>

            <div class="grid md:grid-cols-3 gap-6 mb-10">
                <article class="border border-white/15 bg-white/5 p-6">
                    <h2 class="text-2xl mb-3 text-white">{{ $t('tattoos.features.one.title') }}</h2>
                    <p class="text-white/75 leading-7">{{ $t('tattoos.features.one.text') }}</p>
                </article>
                <article class="border border-white/15 bg-white/5 p-6">
                    <h2 class="text-2xl mb-3 text-white">{{ $t('tattoos.features.two.title') }}</h2>
                    <p class="text-white/75 leading-7">{{ $t('tattoos.features.two.text') }}</p>
                </article>
                <article class="border border-white/15 bg-white/5 p-6">
                    <h2 class="text-2xl mb-3 text-white">{{ $t('tattoos.features.three.title') }}</h2>
                    <p class="text-white/75 leading-7">{{ $t('tattoos.features.three.text') }}</p>
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
</template>

<script setup lang="ts">
</script>
