<template>
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
                <a href="https://www.google.com/maps/search/?api=1&query=Calle+de+Gaztambide+26+Madrid" target="_blank"
                    rel="noopener noreferrer" class="block overflow-hidden shadow-2xl">
                    <iframe src="https://www.google.com/maps?q=Calle%20de%20Gaztambide%2026%2C%20Madrid&output=embed"
                        title="Mapa de El Manicomio Tattoo" class="w-full h-100 border-0 pointer-events-none"
                        loading="lazy"></iframe>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>