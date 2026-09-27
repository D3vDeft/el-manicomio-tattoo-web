<template>
    <section class="relative w-full h-[calc(100vh-140px)] overflow-hidden">
        <video autoplay muted loop playsinline preload="metadata" class="absolute inset-0 w-full h-full object-cover">
            <source src="https://elmanicomiotattoo.es/wp-content/uploads/2025/07/vidFondo-1.mp4" type="video/mp4">
        </video>

        <div class="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/80"></div>

        <div class="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center text-center pb-12 md:pb-16 px-6">
            <img src="../../../assets/logo-letter.webp" alt="El Manicomio Tattoo"
                class="w-64 md:w-80 lg:w-105 drop-shadow-2xl">
            <p class="mt-5 text-sm md:text-base tracking-[0.35em] uppercase text-white font-medium drop-shadow-lg">
                Tattoo · Piercing · Body Art
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>