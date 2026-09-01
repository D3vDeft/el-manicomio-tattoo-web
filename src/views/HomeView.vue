<template>
    <div class="text-white overflow-hidden">

        <!-- ========================================== -->
        <!-- HERO -->
        <!-- ========================================== -->

        <section class="relative w-full h-[calc(100vh-140px)] overflow-hidden">

            <!-- Vídeo -->
            <video autoplay muted loop playsinline preload="metadata"
                class="absolute inset-0 w-full h-full object-cover">
                <source src="https://elmanicomiotattoo.es/wp-content/uploads/2025/07/vidFondo-1.mp4" type="video/mp4">
            </video>

            <!-- Oscurecimiento -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80"></div>

            <!-- Logo -->
            <div class="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center text-center pb-12 md:pb-16 px-6">

                <img src="../assets/logo-letter.webp" alt="El Manicomio Tattoo"
                    class="w-64 md:w-80 lg:w-[420px] drop-shadow-2xl">

                <p class="mt-5 text-sm md:text-base tracking-[0.35em] uppercase text-white font-medium drop-shadow-lg">
                    Tattoo · Piercing · Body Art
                </p>

            </div>

        </section>


        <!-- ========================================== -->
        <!-- PRESENTACIÓN -->
        <!-- ========================================== -->

        <section class="relative py-24 md:py-32">

            <!-- Solo contraste, NO es una tarjeta -->
            <div class="absolute inset-0 bg-black/35"></div>

            <div class="relative z-10 max-w-5xl mx-auto px-6">

                <div class="text-center">

                    <p class="uppercase tracking-[0.35em] text-xs md:text-sm text-white/60 mb-5">
                        El Manicomio Tattoo
                    </p>

                    <h1
                        class="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-10 drop-shadow-lg">
                        {{ $t('home.title') }}
                        <br>

                        <span class="text-white/90">
                            {{ $t('home.subtitle') }}
                        </span>
                    </h1>

                    <div class="max-w-3xl mx-auto space-y-6 text-white text-base md:text-lg leading-8 drop-shadow-md">

                        <p>
                            {{ $t('home.description-start') }}
                            <strong>
                                El Manicomio Tattoo
                            </strong>
                            {{ $t('home.description-end') }}
                        </p>

                        <p>
                            {{ $t('home.about-start') }}
                            <strong>
                                {{ $t('home.about-black') }}
                            </strong>,
                            {{ $t('home.about-end') }}
                        </p>

                        <p>
                            {{ $t('home.about-studio-start') }}
                            <strong>
                                {{ $t('home.about-studio-black') }}
                            </strong>
                            {{ $t('home.about-studio-end') }}
                        </p>

                    </div>

                    <a href="https://wa.me/34674444826?text=Hola%20quiero%20agendar%20una%20cita" target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex mt-10 border border-white/60 hover:border-white hover:bg-white hover:text-black px-7 py-3 uppercase tracking-[0.2em] text-xs font-medium transition-all duration-300">
                        {{ $t('home.contact-init') }}
                    </a>

                </div>

            </div>

        </section>


        <!-- ========================================== -->
        <!-- LÍNEA DIVISORIA -->
        <!-- ========================================== -->

        <div class="max-w-6xl mx-auto px-6">
            <div class="border-t border-white/20"></div>
        </div>


        <!-- ========================================== -->
        <!-- PORTFOLIO -->
        <!-- ========================================== -->

        <section class="relative py-24 md:py-32">

            <div class="relative z-10">

                <!-- Cabecera -->
                <div class="max-w-7xl mx-auto px-6 mb-12">

                    <p class="uppercase tracking-[0.35em] text-xs text-white/60 mb-4">
                        {{ $t('home.portfolio.section-name') }}
                    </p>

                    <h2 class="font-display text-4xl md:text-6xl text-white">
                        {{ $t('home.portfolio.title') }}
                    </h2>

                    <p class="text-white/70 max-w-xl mt-5 leading-7">
                        {{ $t('home.portfolio.description') }}
                    </p>

                </div>


                <!-- ================================= -->
                <!-- CINTA INFINITA -->
                <!-- ================================= -->

                <div class="relative w-full overflow-hidden">

                    <!-- Degradados laterales -->
                    <div
                        class="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-black/40 to-transparent pointer-events-none">
                    </div>

                    <div
                        class="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-black/40 to-transparent pointer-events-none">
                    </div>


                    <!-- Track -->
                    <div class="flex w-max animate-marquee">

                        <!-- PRIMER GRUPO -->
                        <div class="flex gap-5 pr-5">

                            <img src="https://elmanicomiotattoo.es/wp-content/uploads/2025/04/01T2.webp"
                                alt="Tatuaje realizado en El Manicomio Tattoo Madrid"
                                class="w-[250px] md:w-[300px] lg:w-[340px] h-[420px] md:h-[480px] object-cover shrink-0">

                            <img src="https://elmanicomiotattoo.es/wp-content/uploads/2024/07/Blackout-5-scaled.jpg"
                                alt="Tatuaje personalizado realizado en Madrid"
                                class="w-[250px] md:w-[300px] lg:w-[340px] h-[420px] md:h-[480px] object-cover shrink-0">

                            <img src="https://elmanicomiotattoo.es/wp-content/uploads/2025/04/1-1-scaled.webp"
                                alt="Trabajo de tatuaje realizado en Madrid"
                                class="w-[250px] md:w-[300px] lg:w-[340px] h-[420px] md:h-[480px] object-cover shrink-0">

                            <img src="https://elmanicomiotattoo.es/wp-content/uploads/2024/07/Color-3.jpg"
                                alt="Tatuaje artístico realizado por El Manicomio Tattoo"
                                class="w-[250px] md:w-[300px] lg:w-[340px] h-[420px] md:h-[480px] object-cover shrink-0">

                        </div>


                        <!-- SEGUNDO GRUPO -->
                        <!-- Es exactamente igual para crear el loop -->

                        <div class="flex gap-5 pr-5">

                            <img src="https://elmanicomiotattoo.es/wp-content/uploads/2025/04/01T2.webp"
                                alt="Tatuaje realizado en El Manicomio Tattoo Madrid"
                                class="w-[250px] md:w-[300px] lg:w-[340px] h-[420px] md:h-[480px] object-cover shrink-0">

                            <img src="https://elmanicomiotattoo.es/wp-content/uploads/2024/07/Blackout-5-scaled.jpg"
                                alt="Tatuaje personalizado realizado en Madrid"
                                class="w-[250px] md:w-[300px] lg:w-[340px] h-[420px] md:h-[480px] object-cover shrink-0">

                            <img src="https://elmanicomiotattoo.es/wp-content/uploads/2025/04/1-1-scaled.webp"
                                alt="Trabajo de tatuaje realizado en Madrid"
                                class="w-[250px] md:w-[300px] lg:w-[340px] h-[420px] md:h-[480px] object-cover shrink-0">

                            <img src="https://elmanicomiotattoo.es/wp-content/uploads/2024/07/Color-3.jpg"
                                alt="Tatuaje artístico realizado por El Manicomio Tattoo"
                                class="w-[250px] md:w-[300px] lg:w-[340px] h-[420px] md:h-[480px] object-cover shrink-0">

                        </div>

                    </div>

                </div>

            </div>

        </section>


        <!-- ========================================== -->
        <!-- LÍNEA DIVISORIA -->
        <!-- ========================================== -->

        <div class="max-w-6xl mx-auto px-6">
            <div class="border-t border-white/20"></div>
        </div>


        <!-- ========================================== -->
        <!-- RESEÑAS -->
        <!-- ========================================== -->

        <section class="relative py-24 md:py-32">

            <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">

                <p class="uppercase tracking-[0.35em] text-xs text-white/60 mb-4">
                    {{ $t('home.reviews.section-name') }}
                </p>

                <h2 class="font-display text-4xl md:text-6xl text-white mb-12 drop-shadow-lg">
                    {{ $t('home.reviews.title') }}
                </h2>


                <div class="flex flex-col items-center">

                    <div class="flex items-center gap-5">

                        <span class="font-display text-7xl text-white">
                            4.9
                        </span>

                        <div class="text-yellow-400 text-xl tracking-widest">
                            ★★★★★
                        </div>

                    </div>


                    <p class="text-white/70 mt-4 mb-8">
                        {{ $t('home.reviews.description') }}
                    </p>


                    <a href="https://www.google.com/maps/search/?api=1&query=El+Manicomio+Tattoo+%26+Piercing+Madrid"
                        target="_blank" rel="noopener noreferrer"
                        class="border border-white/50 hover:bg-white hover:text-black px-7 py-3 uppercase tracking-[0.2em] text-xs transition-all duration-300">
                        {{ $t('home.reviews.button') }}
                    </a>

                </div>

            </div>

        </section>


        <!-- ========================================== -->
        <!-- LÍNEA DIVISORIA -->
        <!-- ========================================== -->

        <div class="max-w-6xl mx-auto px-6">
            <div class="border-t border-white/20"></div>
        </div>


        <!-- ========================================== -->
        <!-- UBICACIÓN -->
        <!-- ========================================== -->

        <section class="relative py-24 md:py-32">

            <div class="relative z-10 max-w-6xl mx-auto px-6">

                <div class="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                    <!-- Información -->

                    <div>

                        <p class="uppercase tracking-[0.35em] text-xs text-white/60 mb-4">
                            {{ $t('home.location.section-name') }}
                        </p>

                        <h2 class="font-display text-4xl md:text-6xl text-white mb-6">
                            {{ $t('home.location.title') }}
                        </h2>


                        <p class="text-white/70 leading-8 mb-8">
                            {{ $t('home.location.description') }}
                        </p>


                        <div class="text-white mb-8">

                            <p>
                                C. de Gaztambide, 26
                            </p>

                            <p class="text-white/60">
                                Chamberí · 28015 Madrid
                            </p>

                        </div>


                        <a href="https://www.google.com/maps/search/?api=1&query=Calle+de+Gaztambide+26+Madrid"
                            target="_blank" rel="noopener noreferrer"
                            class="inline-flex border border-white/50 hover:bg-white hover:text-black px-7 py-3 uppercase tracking-[0.2em] text-xs transition-all duration-300">
                            {{ $t('home.location.button') }}
                        </a>

                    </div>


                    <!-- MAPA -->

                    <a href="https://www.google.com/maps/search/?api=1&query=Calle+de+Gaztambide+26+Madrid"
                        target="_blank" rel="noopener noreferrer" class="block overflow-hidden shadow-2xl">

                        <iframe
                            src="https://www.google.com/maps?q=Calle%20de%20Gaztambide%2026%2C%20Madrid&output=embed"
                            class="w-full h-[400px] border-0 pointer-events-none" loading="lazy"></iframe>

                    </a>

                </div>

            </div>

        </section>

    </div>
</template>


<script setup lang="ts">

</script>


<style scoped>
.animate-marquee {
    animation: marquee 15s linear infinite;
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

/* Ocultar scrollbar del carrusel */
.scrollbar-hide {
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* En dispositivos donde el usuario prefiere
   menos movimiento, detenemos la animación */
@media (prefers-reduced-motion: reduce) {
    .animate-marquee {
        animation-play-state: paused;
    }
}
</style>
