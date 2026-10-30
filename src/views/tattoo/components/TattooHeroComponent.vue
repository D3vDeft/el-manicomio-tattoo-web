<template>
  <section class="relative py-24 md:py-32">
    <div class="max-w-7xl mx-auto px-6">
      <p class="uppercase tracking-[0.35em] text-xl text-white/60 mb-4">
        {{ $t('tattoos.section-name') }}
      </p>
      <h1 class="font-display text-5xl md:text-7xl text-white mb-6">
        {{ $t('tattoos.title') }}
      </h1>
      <p class="text-white/70 max-w-3xl leading-7 text-xl md:text-2xl mb-8">
        {{ $t('tattoos.intro') }}
      </p>
      <a
        href="https://wa.me/34674444826?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20para%20un%20tatuaje."
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex border border-white/30 px-7 py-4 uppercase tracking-[0.2em] text-sm text-white/80 hover:text-white hover:border-white/60 transition-all duration-300"
      >
        {{ $t('tattoos.cta') }}
      </a>
    </div>
  </section>
</template>
