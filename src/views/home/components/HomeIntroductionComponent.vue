<template>
    <section class="relative py-24 md:py-32">
        <div class="absolute inset-0 bg-black/35"></div>

        <div class="relative z-10 max-w-8xl mx-auto px-6">
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

                <!-- CARDS
                    <div class="max-w-sm mx-auto my-10 bg-[#0d0d0d] border border-[#2a251f] rounded-none p-6 shadow-[0_0_15px_rgba(0,0,0,0.9)] relative overflow-hidden group">
                <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8c7853] opacity-70"></div>

                <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#8c7853] opacity-70"></div>

                <div class="relative w-full h-48 mb-4 overflow-hidden border border-[#2a251f]">
                    <img src="https://unsplash.com" alt="Gothic Architecture"
                        class="w-full h-full object-cover filter grayscale contrast-125 brightness-75 transition-transform duration-700 group-hover:scale-105" />
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent"></div>
                </div>

                <div class="space-y-3">
                    <span class="text-xs uppercase tracking-[0.2em] text-[#8c7853] font-serif block">
                        Memento Mori
                    </span>
                    <h2 class="text-2xl font-serif text-[#e5e5e5] tracking-wide leading-tight font-bold">
                        Ecos de la Catedral
                    </h2>

                    <div class="flex items-center justify-center my-2 opacity-40">
                        <div class="h-[1px] bg-[#8c7853] w-full"></div>
                        <span class="px-2 text-[#8c7853] text-xs">◆</span>
                        <div class="h-[1px] bg-[#8c7853] w-full"></div>
                    </div>

                    <p class="text-sm font-sans text-[#a3a3a3] leading-relaxed text-justify">
                        La arquitectura neogótica se levanta como un susurro del pasado. Sus arcos apuntados y gárgolas
                        desafían el paso del tiempo bajo un cielo perpetuamente gris.
                    </p>

                    <div class="pt-4">
                        <button
                            class="w-full bg-transparent hover:bg-[#1a1714] text-[#8c7853] hover:text-[#d4af37] border border-[#4a3f31] font-serif text-sm uppercase tracking-widest py-2.5 transition-all duration-300 ease-in-out box-border">
                            Explorar las Sombras
                        </button>
                    </div>
                </div>

                <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#8c7853] opacity-70"></div>

                <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8c7853] opacity-70"></div>
            </div>

            -->

                <div class="mt-12 grid gap-6 text-left md:grid-cols-3 max-w-6xl mx-auto">
                    <RouterLink to="/tattoos"
                        class="max-w-sm mx-auto my-auto md:my-10 bg-[#0d0d0d] border border-[#2a251f] rounded-none p-6 shadow-[0_0_15px_rgba(0,0,0,0.9)] relative overflow-hidden group">
                        <!-- Adorno de esquina superior izquierda -->
                        <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8c7853] opacity-70">
                        </div>
                        <!-- Adorno de esquina superior derecha -->
                        <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#8c7853] opacity-70">
                        </div>


                        <!-- Contenido de la tarjeta -->
                        <div class="space-y-3">
                            <!-- Título Principal -->
                            <h2
                                class="text-4xl font-display text-[#e5e5e5] tracking-wide leading-tight font-bold text-center">
                                {{ $t('home.hero.cards.card-1.title') }}
                            </h2>

                            <!-- Divisor decorativo -->
                            <div class="flex items-center justify-center my-2 opacity-40">
                                <div class="h-[1px] bg-[#8c7853] w-full"></div>
                                <span class="px-2 text-[#8c7853] text-xs">◆</span>
                                <div class="h-[1px] bg-[#8c7853] w-full"></div>
                            </div>

                            <!-- Descripción -->
                            <p class="text-white/75 font-sans leading-relaxed text-xl">
                                {{ $t('home.hero.cards.card-1.description') }}
                            </p>
                        </div>

                        <!-- Adorno de esquina inferior izquierda -->
                        <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#8c7853] opacity-70">
                        </div>
                        <!-- Adorno de esquina inferior derecha -->
                        <div
                            class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8c7853] opacity-70">
                        </div>
                    </RouterLink>

                    <RouterLink to="/piercings"
                        class="max-w-sm mx-auto my-2 md:my-10 bg-[#0d0d0d] border border-[#2a251f] rounded-none p-6 shadow-[0_0_15px_rgba(0,0,0,0.9)] relative overflow-hidden group">
                        <!-- Adorno de esquina superior izquierda -->
                        <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8c7853] opacity-70">
                        </div>
                        <!-- Adorno de esquina superior derecha -->
                        <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#8c7853] opacity-70">
                        </div>


                        <!-- Contenido de la tarjeta -->
                        <div class="space-y-3">
                            <!-- Título Principal -->
                            <h2
                                class="text-4xl font-display text-[#e5e5e5] tracking-wide leading-tight font-bold text-center">
                                {{ $t('home.hero.cards.card-2.title') }}
                            </h2>

                            <!-- Divisor decorativo -->
                            <div class="flex items-center justify-center my-2 opacity-40">
                                <div class="h-[1px] bg-[#8c7853] w-full"></div>
                                <span class="px-2 text-[#8c7853] text-xs">◆</span>
                                <div class="h-[1px] bg-[#8c7853] w-full"></div>
                            </div>

                            <!-- Descripción -->
                            <p class="text-white/75 font-sans leading-relaxed text-xl">
                                {{ $t('home.hero.cards.card-2.description') }}
                            </p>
                        </div>

                        <!-- Adorno de esquina inferior izquierda -->
                        <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#8c7853] opacity-70">
                        </div>
                        <!-- Adorno de esquina inferior derecha -->
                        <div
                            class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8c7853] opacity-70">
                        </div>
                    </RouterLink>
                    <a href="https://www.google.com/maps/search/?api=1&query=El+Manicomio+Tattoo+%26+Piercing+Madrid"
                        class="max-w-sm mx-auto my-2 md:my-10 bg-[#0d0d0d] border border-[#2a251f] rounded-none p-6 shadow-[0_0_15px_rgba(0,0,0,0.9)] relative overflow-hidden group">
                        <!-- Adorno de esquina superior izquierda -->
                        <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8c7853] opacity-70">
                        </div>
                        <!-- Adorno de esquina superior derecha -->
                        <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#8c7853] opacity-70">
                        </div>


                        <!-- Contenido de la tarjeta -->
                        <div class="space-y-3">
                            <!-- Título Principal -->
                            <h2
                                class="text-4xl font-display text-[#e5e5e5] tracking-wide leading-tight font-bold text-center">
                                {{ $t('home.hero.cards.card-3.title') }}
                            </h2>

                            <!-- Divisor decorativo -->
                            <div class="flex items-center justify-center my-2 opacity-40">
                                <div class="h-[1px] bg-[#8c7853] w-full"></div>
                                <span class="px-2 text-[#8c7853] text-xs">◆</span>
                                <div class="h-[1px] bg-[#8c7853] w-full"></div>
                            </div>

                            <!-- Descripción -->
                            <p class="text-white/75 font-sans leading-relaxed text-xl">
                                {{ $t('home.hero.cards.card-3.description') }}
                            </p>
                        </div>

                        <!-- Adorno de esquina inferior izquierda -->
                        <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#8c7853] opacity-70">
                        </div>
                        <!-- Adorno de esquina inferior derecha -->
                        <div
                            class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8c7853] opacity-70">
                        </div>
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
</template>

<script setup lang="ts">

</script>