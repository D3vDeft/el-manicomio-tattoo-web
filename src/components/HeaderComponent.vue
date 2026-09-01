<template>
    <header class="bg-black/90 text-white relative z-50">

        <!-- ========================= -->
        <!-- DESKTOP -->
        <!-- ========================= -->

        <div class="hidden lg:flex items-center justify-between px-6 py-3">

            <!-- Logo -->
            <RouterLink to="/" class="shrink-0">
                <img src="../assets/logo.webp" alt="Logotipo El Minicomio Tattoo" class="h-15 w-auto">
            </RouterLink>

            <!-- Navegación -->
            <nav class="flex items-center gap-1">

                <RouterLink to="/" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition">
                    <House :size="20" />
                    <span>{{ $t('home.section-name') }}</span>
                </RouterLink>

                <RouterLink to="/tattoos"
                    class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition">
                    <PenTool :size="20" />
                    <span>{{ $t('tattoos.section-name') }}</span>
                </RouterLink>

                <RouterLink to="/piercings"
                    class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition">
                    <CircleDot :size="20" />
                    <span>{{ $t('piercings.section-name') }}</span>
                </RouterLink>

                <RouterLink to="/tooth-gems"
                    class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition">
                    <Sparkles :size="20" />
                    <span>{{ $t('tooth-gems.section-name') }}</span>
                </RouterLink>

                <RouterLink to="/jewelers"
                    class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition">
                    <Gem :size="20" />
                    <span>{{ $t('jewelers.section-name') }}</span>
                </RouterLink>

                <RouterLink to="/self-care"
                    class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition">
                    <Heart :size="20" />
                    <span>{{ $t('self-care.section-name') }}</span>
                </RouterLink>

                <RouterLink to="/contact"
                    class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition">
                    <Mail :size="20" />
                    <span>{{ $t('contact.section-name') }}</span>
                </RouterLink>

                <RouterLink to="/promo"
                    class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition">
                    <Tag :size="20" />
                    <span>{{ $t('promo.section-name') }}</span>
                </RouterLink>

            </nav>

            <!-- Idioma desktop -->
            <button class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition"
                @click="changeLanguage">
                <Languages :size="20" />
                {{ locale === 'es_ES' ? 'English' : 'Español' }}
            </button>

        </div>


        <!-- ========================= -->
        <!-- MÓVIL / TABLET -->
        <!-- ========================= -->

        <div class="lg:hidden relative flex items-center justify-between px-4 py-3">

            <!-- Botón hamburguesa -->
            <button type="button"
                class="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition"
                @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'">
                <X v-if="menuOpen" :size="26" />
                <Menu v-else :size="26" />
            </button>


            <!-- Logo centrado -->
            <RouterLink to="/" class="absolute left-1/2 -translate-x-1/2">
                <img src="../assets/logo.webp" alt="Logotipo El Minicomio Tattoo" class="h-12 w-auto">
            </RouterLink>


            <!-- Idioma móvil -->
            <button type="button"
                class="flex items-center gap-1 px-2 py-2 rounded-lg hover:bg-white/10 transition font-semibold"
                @click="changeLanguage" :aria-label="`Cambiar idioma a ${locale === 'es_ES' ? 'inglés' : 'español'}`">
                <Languages :size="18" />
                <span>{{ locale === 'es_ES' ? 'ES' : 'EN' }}</span>
            </button>

        </div>


        <!-- ========================= -->
        <!-- MENÚ MÓVIL -->
        <!-- ========================= -->

        <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
            <nav v-if="menuOpen" class="lg:hidden bg-black/5 border-t border-white/10 px-4 py-4">

                <div class="flex flex-col gap-1">

                    <RouterLink to="/" class="mobile-link" @click="menuOpen = false">
                        <House :size="20" />
                        <span>{{ $t('home.section-name') }}</span>
                    </RouterLink>

                    <RouterLink to="/tattoos" class="mobile-link" @click="menuOpen = false">
                        <PenTool :size="20" />
                        <span>{{ $t('tattoos.section-name') }}</span>
                    </RouterLink>

                    <RouterLink to="/piercings" class="mobile-link" @click="menuOpen = false">
                        <CircleDot :size="20" />
                        <span>{{ $t('piercings.section-name') }}</span>
                    </RouterLink>

                    <RouterLink to="/tooth-gems" class="mobile-link" @click="menuOpen = false">
                        <Sparkles :size="20" />
                        <span>{{ $t('tooth-gems.section-name') }}</span>
                    </RouterLink>

                    <RouterLink to="/jewelers" class="mobile-link" @click="menuOpen = false">
                        <Gem :size="20" />
                        <span>{{ $t('jewelers.section-name') }}</span>
                    </RouterLink>

                    <RouterLink to="/self-care" class="mobile-link" @click="menuOpen = false">
                        <Heart :size="20" />
                        <span>{{ $t('self-care.section-name') }}</span>
                    </RouterLink>

                    <RouterLink to="/contact" class="mobile-link" @click="menuOpen = false">
                        <Mail :size="20" />
                        <span>{{ $t('contact.section-name') }}</span>
                    </RouterLink>

                    <RouterLink to="/promo" class="mobile-link" @click="menuOpen = false">
                        <Tag :size="20" />
                        <span>{{ $t('promo.section-name') }}</span>
                    </RouterLink>

                </div>

            </nav>
        </Transition>

    </header>
</template>


<script setup lang="ts">

import {
    House,
    PenTool,
    CircleDot,
    Sparkles,
    Gem,
    Heart,
    Mail,
    Tag,
    Languages,
    Menu,
    X
} from '@lucide/vue'

import { ref } from 'vue'
import { useI18n } from 'vue-i18n'


const { locale } = useI18n()

const menuOpen = ref(false)


const changeLanguage = (): void => {

    const newLanguage = locale.value === 'es_ES'
        ? 'en_EN'
        : 'es_ES'

    locale.value = newLanguage

    localStorage.setItem('user-locale', newLanguage)
}

</script>


<style scoped>
@import '../assets/main.css';

.mobile-link {
    @apply flex items-center gap-3 px-4 py-3 rounded-lg text-gray-200 hover:bg-white/10 hover:text-white transition-colors;
}
</style>
