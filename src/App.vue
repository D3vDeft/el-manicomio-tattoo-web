<template>
    <div class="relative flex flex-col min-h-screen">

        <!-- Fondo -->
        <div class="absolute inset-0 bg-[url('../assets/background.jpg')] bg-repeat blur-xs"></div>
        <div class="absolute inset-0 bg-black/30"></div>

        <!-- Contenido -->
        <div class="relative flex flex-col min-h-screen">

            <HeaderComponent />

            <main class="flex-1">
                <RouterView />
            </main>

            <FooterComponent />

        </div>

    </div>
</template>


<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
</script>
