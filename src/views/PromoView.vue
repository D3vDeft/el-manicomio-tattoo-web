<template>
    <div class="text-white bg-black/40 py-20 md:py-28">
        <section class="max-w-6xl mx-auto px-6">
            <p class="uppercase tracking-[0.35em] text-white/60 text-sm mb-4">{{ $t('promo.section-name') }}</p>
            <h1 class="font-display text-5xl md:text-6xl mb-6 text-white">{{ $t('promo.title') }}</h1>
            <p class="max-w-4xl text-lg md:text-xl leading-8 text-white/80 mb-10">{{ $t('promo.intro') }}</p>

            <!-- Sección de promociones actuales -->
            <div class="mb-16">
                <h2 class="text-3xl md:text-4xl mb-4 text-white">{{ $t('promo.heading-current') }}</h2>
                <p class="text-white/75 leading-7 mb-8 text-lg">{{ $t('promo.text-current') }}</p>
                <div class="border border-white/20 bg-white/5 p-8">
                    <p class="text-white text-lg leading-8">Visita nuestras redes sociales para conocer todas las
                        ofertas disponibles y no perderte ninguna promoción especial.</p>
                </div>
            </div>

            <!-- Clientes recurrentes -->
            <div class="mb-16">
                <h2 class="text-3xl md:text-4xl mb-4 text-white">{{ $t('promo.heading-loyalty') }}</h2>
                <p class="text-white/75 leading-7 text-lg">{{ $t('promo.text-loyalty') }}</p>
            </div>

            <!-- Grupos y eventos -->
            <div class="mb-16">
                <h2 class="text-3xl md:text-4xl mb-4 text-white">{{ $t('promo.heading-groups') }}</h2>
                <p class="text-white/75 leading-7 text-lg">{{ $t('promo.text-groups') }}</p>
            </div>

            <!-- CTA -->
            <div class="text-center">
                <a href="https://www.instagram.com/elmanicomiotattoo/" target="_blank" rel="noopener noreferrer"
                    class="inline-flex border border-white/50 hover:bg-white hover:text-black px-7 py-3 uppercase tracking-[0.2em] text-base transition-all duration-300 mb-10">
                    {{ $t('promo.cta') }}
                </a>
                <p class="text-white/70 max-w-3xl mx-auto text-lg leading-8">{{ $t('promo.closing') }}</p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
</script>