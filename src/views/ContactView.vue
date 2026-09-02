<template>
    <div class="text-white bg-black/40 py-20 md:py-28">
        <section class="max-w-6xl mx-auto px-6">
            <p class="uppercase tracking-[0.35em] text-white/60 text-sm mb-4">{{ $t('contact.section-name') }}</p>
            <h1 class="font-display text-5xl md:text-6xl mb-6 text-white">{{ $t('contact.title') }}</h1>
            <p class="max-w-4xl text-lg md:text-xl leading-8 text-white/80 mb-10">{{ $t('contact.intro') }}</p>

            <!-- Ubicación -->
            <div class="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 class="text-3xl md:text-4xl mb-4 text-white">{{ $t('contact.location-heading') }}</h2>
                    <p class="text-white/75 leading-7 mb-6">{{ $t('contact.location-text') }}</p>
                    <p class="text-xl text-white font-semibold">{{ $t('contact.location-address') }}</p>
                </div>
                <div>
                    <h2 class="text-3xl md:text-4xl mb-4 text-white">{{ $t('contact.hours-heading') }}</h2>
                    <p class="text-white/75 leading-7">{{ $t('contact.hours-text') }}</p>
                </div>
            </div>

            <!-- Métodos de contacto -->
            <div class="mb-16">
                <h2 class="text-3xl md:text-4xl mb-8 text-white">{{ $t('contact.methods-heading') }}</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <article class="border border-white/15 bg-white/5 p-6">
                        <h3 class="text-2xl mb-3 text-white">{{ $t('contact.method-whatsapp') }}</h3>
                        <p class="text-white/75 leading-7">{{ $t('contact.method-whatsapp-text') }}</p>
                    </article>
                    <article class="border border-white/15 bg-white/5 p-6">
                        <h3 class="text-2xl mb-3 text-white">{{ $t('contact.method-phone') }}</h3>
                        <p class="text-white/75 leading-7">{{ $t('contact.method-phone-text') }}</p>
                    </article>
                    <article class="border border-white/15 bg-white/5 p-6">
                        <h3 class="text-2xl mb-3 text-white">{{ $t('contact.method-visit') }}</h3>
                        <p class="text-white/75 leading-7">{{ $t('contact.method-visit-text') }}</p>
                    </article>
                </div>
            </div>

            <!-- CTA y cierre -->
            <div class="text-center">
                <a href="https://wa.me/34674444826?text=Hola%2C%20me%20gustar%C3%ADa%20contactar%20con%20vosotros."
                    target="_blank" rel="noopener noreferrer"
                    class="inline-flex border border-white/50 hover:bg-white hover:text-black px-7 py-3 uppercase tracking-[0.2em] text-base transition-all duration-300 mb-10">
                    {{ $t('contact.cta') }}
                </a>
                <p class="text-white/70 max-w-3xl mx-auto text-lg leading-8">{{ $t('contact.closing') }}</p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
</script>