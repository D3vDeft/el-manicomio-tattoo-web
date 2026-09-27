<template>
    <div class="text-white overflow-hidden">
        <!-- HERO -->
        <HomeHeroComponent />

        <!-- PRESENTACIÓN -->
        <HomeIntroductionComponent />

        <!-- DIVISORIA -->
        <DivLineComponent />

        <!-- PORTFOLIO -->
        <HomePortfolioComponent />

        <!-- DIVISORIA -->
        <DivLineComponent />

        <!-- RESEÑAS -->
        <HomeReviewsComponent />

        <!-- DIVISORIA -->
        <DivLineComponent />

        <!-- UBICACIÓN -->
        <HomeLocationComponent />

        <!-- VISOR DE IMÁGENES -->
        <HomeImageViewerComponent />

    </div>

</template>

<script setup lang="ts">
import {
    HomeHeroComponent,
    HomeIntroductionComponent,
    HomeImageViewerComponent,
    HomePortfolioComponent,
    HomeReviewsComponent,
    HomeLocationComponent,
} from './components/index.ts';
import DivLineComponent from '@/components/DivLineComponent.vue';

</script>