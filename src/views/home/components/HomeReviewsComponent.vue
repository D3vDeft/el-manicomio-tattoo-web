<template>
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
</template>

<script setup lang="ts">

</script>