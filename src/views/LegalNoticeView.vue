<template>
    <div class="text-white bg-black/40 py-20 md:py-28">
        <div class="max-w-6xl mx-auto px-6">
            <section class="mb-12">
                <h1 class="font-display text-5xl md:text-6xl mb-6 text-white">{{ $t('legal-notice.title') }}</h1>
            </section>
            <section class="mb-12">
                <h2 class="text-3xl md:text-4xl mt-5 mb-3 text-white">{{ $t('legal-notice.general-info.title') }}</h2>
                <p class="text-white/75 leading-7">{{ $t('legal-notice.general-info.description') }}</p>
            </section>
            <section class="mb-12">
                <h2 class="text-3xl md:text-4xl mt-5 mb-3 text-white">{{ $t('legal-notice.terms-and-conditions.title')
                    }}</h2>
                <p class="text-white/75 leading-7">{{ $t('legal-notice.terms-and-conditions.description') }}</p>
            </section>
            <section class="mb-12">
                <h2 class="text-3xl md:text-4xl mt-5 mb-3 text-white">{{
                    $t('legal-notice.terms-and-conditions.user.title') }}</h2>
                <p class="text-white/75 leading-7">{{ $t('legal-notice.terms-and-conditions.user.description') }}</p>
            </section>
            <section class="mb-12">
                <h2 class="text-3xl md:text-4xl mt-5 mb-3 text-white">{{
                    $t('legal-notice.terms-and-conditions.access-and-navegation.title') }}</h2>
                <p class="text-white/75 leading-7">{{
                    $t('legal-notice.terms-and-conditions.access-and-navegation.description') }}</p>
            </section>
            <section class="mb-12">
                <h2 class="text-3xl md:text-4xl mt-5 mb-3 text-white">{{
                    $t('legal-notice.terms-and-conditions.link-policy.title') }}</h2>
                <p class="text-white/75 leading-7">{{ $t('legal-notice.terms-and-conditions.link-policy.description') }}
                </p>
            </section>
            <section class="mb-12">
                <h2 class="text-3xl md:text-4xl mt-5 mb-3 text-white">{{
                    $t('legal-notice.terms-and-conditions.intellectual-property.title') }}</h2>
                <p class="text-white/75 leading-7">{{
                    $t('legal-notice.terms-and-conditions.intellectual-property.description') }}</p>
            </section>
            <section class="mb-12">
                <h2 class="text-3xl md:text-4xl mt-5 mb-3 text-white">{{
                    $t('legal-notice.terms-and-conditions.legal-jurisdiction.title') }}</h2>
                <p class="text-white/75 leading-7">{{
                    $t('legal-notice.terms-and-conditions.legal-jurisdiction.description') }}</p>
            </section>
            <section class="mb-12">
                <h2 class="text-3xl md:text-4xl mt-5 mb-3 text-white">{{
                    $t('legal-notice.terms-and-conditions.personal-data.title') }}</h2>
                <p class="text-white/75 leading-7">{{ $t('legal-notice.terms-and-conditions.personal-data.description')
                    }}</p>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>