<template>
    <aside
        v-if="isVisible"
        class="fixed inset-x-0 bottom-0 z-50 border-t border-[#8c7853] bg-black/95 px-5 py-5 text-white shadow-2xl backdrop-blur md:px-8"
        aria-labelledby="cookie-consent-title"
        role="region"
    >
        <div class="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div class="max-w-3xl">
                <h2 id="cookie-consent-title" class="mb-2 text-lg font-semibold">
                    {{ $t('cookie-consent.title') }}
                </h2>
                <p class="text-sm leading-6 text-white/75">
                    {{ $t('cookie-consent.message') }}
                    <RouterLink
                        to="/cookie-policy"
                        class="ml-1 underline underline-offset-4 hover:text-[#c9ad7b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {{ $t('cookie-consent.policy') }}
                    </RouterLink>
                </p>
            </div>

            <div class="flex shrink-0 flex-col gap-3 sm:flex-row">
                <button
                    type="button"
                    class="border border-white/50 px-5 py-3 text-sm font-medium transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    @click="saveConsent('rejected')"
                >
                    {{ $t('cookie-consent.reject') }}
                </button>
                <button
                    type="button"
                    class="bg-[#8c7853] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#a18c65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    @click="saveConsent('accepted')"
                >
                    {{ $t('cookie-consent.accept') }}
                </button>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const consentStorageKey = 'manicomio-cookie-consent'
const isVisible = ref(false)

onMounted(() => {
    try {
        const preference = localStorage.getItem(consentStorageKey)
        isVisible.value = preference !== 'accepted' && preference !== 'rejected'
    } catch (error) {
        console.error('No se pudo leer la preferencia de cookies.', error)
        isVisible.value = true
    }
})

function saveConsent(preference: 'accepted' | 'rejected') {
    try {
        localStorage.setItem(consentStorageKey, preference)
        isVisible.value = false
    } catch (error) {
        console.error('No se pudo guardar la preferencia de cookies.', error)
    }
}
</script>
