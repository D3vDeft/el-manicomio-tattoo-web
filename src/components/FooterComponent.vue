<template>
    <footer class="bg-black/85 text-gray-200 px-6 pt-8 pb-4">

        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

            <!-- Logo -->
            <div class="flex justify-center">
                <img src="../assets/logo.webp" alt="Logotipo El Minicomio Tattoo" class="h-16 w-auto">
            </div>

            <!-- Legal -->
            <section class="flex flex-col items-center md:items-start gap-3">

                <h3 class="font-semibold text-lg">
                    {{ $t('footer.legal') }}
                </h3>

                <RouterLink to="/cookie-policy"
                    class="flex items-center gap-2 text-orange-400 lg:text-gray-200 lg:hover:text-orange-400 transition-colors">
                    <Cookie :size="18" />
                    <span>{{ $t('footer.cookie-policy') }}</span>
                </RouterLink>

                <RouterLink to="/privacy-policy"
                    class="flex items-center gap-2 text-blue-400 lg:text-gray-200 lg:hover:text-blue-400 transition-colors">
                    <ShieldCheck :size="18" />
                    <span>{{ $t('footer.privacy-policy') }}</span>
                </RouterLink>

                <RouterLink to="/legal-notice"
                    class="flex items-center gap-2 text-gray-400 lg:text-gray-200 lg:hover:text-gray-400 transition-colors">
                    <FileText :size="18" />
                    <span>{{ $t('footer.legal-notice') }}</span>
                </RouterLink>

            </section>

            <!-- Redes sociales -->
            <section class="flex flex-col items-center md:items-start gap-3">

                <h3 class="font-semibold text-lg">
                    {{ $t('footer.social-media') }}
                </h3>

                <a href="#"
                    class="flex items-center gap-2 text-pink-400 lg:text-gray-200 lg:hover:text-pink-400 transition-colors">
                    <Camera :size="20" />
                    <span>Instagram</span>
                </a>

                <a href="#"
                    class="flex items-center gap-2 text-gray-400 lg:text-gray-200 lg:hover:text-gray-400 transition-colors">
                    <Music2 :size="20" />
                    <span>TikTok</span>
                </a>

            </section>

            <!-- Contacto -->
            <section class="flex flex-col items-center md:items-start gap-3">

                <h3 class="font-semibold text-lg">
                    {{ $t('footer.contact') }}
                </h3>

                <a href="mailto:contacto@elminicomiotattoo.com"
                    class="flex items-center gap-2 text-blue-400 lg:text-gray-200 lg:hover:text-blue-400 transition-colors">
                    <Mail :size="20" />
                    <span>Email</span>
                </a>

                <a href="https://wa.me/34674444826" target="_blank" rel="noopener noreferrer"
                    class="flex items-center gap-2 text-green-400 lg:text-gray-200 lg:hover:text-green-400 transition-colors">
                    <MessageCircle :size="20" />
                    <span>WhatsApp</span>
                </a>

            </section>

        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-700 mt-8 pt-4 text-center">
            <p class="text-sm text-gray-400">
                {{ $t('footer.copyright') }}
            </p>
        </div>

    </footer>
</template>

<script setup lang="ts">
import {
    Camera,
    Music2,
    Mail,
    MessageCircle,
    Cookie,
    ShieldCheck,
    FileText
} from '@lucide/vue'
</script>
