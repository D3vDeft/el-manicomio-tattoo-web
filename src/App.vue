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
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

const route = useRoute()
const { locale } = useI18n()
const siteUrl = 'https://elmanicomiotattoo.es'

const seoByLocale = {
    es_ES: {
        lang: 'es',
        locale: 'es_ES',
        title: 'Estudio de tatuajes en Madrid | El Manicomio Tattoo',
        description:
            'Estudio de tatuajes en Madrid con tatuajes personalizados, piercing, tooth gems y body art en Chamberí. El Manicomio Tattoo ofrece arte y seguridad.',
        keywords:
            'tatuajes en Madrid, estudio de tatuajes Madrid, piercing Madrid, tattoo studio Madrid, El Manicomio Tattoo, tatuajes personalizados, Chamberí, body art Madrid',
        schema: {
            '@context': 'https://schema.org',
            '@type': 'TattooParlor',
            name: 'El Manicomio Tattoo',
            image: `${siteUrl}/og-image.svg`,
            url: siteUrl,
            telephone: '+34 674 444 826',
            email: 'hola@elmanicomiotattoo.es',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle de Gaztambide 26',
                addressLocality: 'Madrid',
                addressRegion: 'Madrid',
                postalCode: '28015',
                addressCountry: 'ES',
            },
            areaServed: 'Madrid',
            description:
                'Estudio de tatuajes en Madrid especializado en tatuajes personalizados, blackwork, realismo, lettering, piercing y body art.',
            sameAs: ['https://www.instagram.com/elmanicomiotattoo/', 'https://www.tiktok.com/@elmanicomiotattoo'],
            priceRange: '€€',
            openingHours: ['Mo-Fr 11:00-20:00', 'Sa 11:00-18:00'],
        },
    },
    en_EN: {
        lang: 'en',
        locale: 'en_EN',
        title: 'Tattoo Studio in Madrid | El Manicomio Tattoo',
        description:
            'Tattoo studio in Madrid offering custom tattoos, piercings, tooth gems and body art in Chamberí. El Manicomio Tattoo creates meaningful, high-quality studio work.',
        keywords:
            'tattoo studio Madrid, piercings in Madrid, custom tattoos Madrid, body art Madrid, El Manicomio Tattoo, tattoo shop in Chamberí',
        schema: {
            '@context': 'https://schema.org',
            '@type': 'TattooParlor',
            name: 'El Manicomio Tattoo',
            image: `${siteUrl}/og-image.svg`,
            url: siteUrl,
            telephone: '+34 674 444 826',
            email: 'hola@elmanicomiotattoo.es',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle de Gaztambide 26',
                addressLocality: 'Madrid',
                addressRegion: 'Madrid',
                postalCode: '28015',
                addressCountry: 'ES',
            },
            areaServed: 'Madrid',
            description:
                'Tattoo studio in Madrid specializing in custom tattoos, blackwork, realism, lettering, piercings and body art.',
            sameAs: ['https://www.instagram.com/elmanicomiotattoo/', 'https://www.tiktok.com/@elmanicomiotattoo'],
            priceRange: '€€',
            openingHours: ['Mo-Fr 11:00-20:00', 'Sa 11:00-18:00'],
        },
    },
} as const

const currentSeo = computed(() => {
    const selectedLocale = locale.value in seoByLocale ? locale.value : 'es_ES'
    return seoByLocale[selectedLocale as keyof typeof seoByLocale]
})

function updateSeo() {
    const seoMeta = {
        title: (route.meta.title as string) || currentSeo.value.title,
        description: (route.meta.description as string) || currentSeo.value.description,
    }

    document.title = seoMeta.title
    document.documentElement.lang = currentSeo.value.lang

    const descriptionTag = document.head.querySelector('meta[name="description"]') || document.createElement('meta')
    descriptionTag.setAttribute('name', 'description')
    descriptionTag.setAttribute('content', seoMeta.description)
    if (!document.head.contains(descriptionTag)) {
        document.head.appendChild(descriptionTag)
    }

    const keywordsTag = document.head.querySelector('meta[name="keywords"]') || document.createElement('meta')
    keywordsTag.setAttribute('name', 'keywords')
    keywordsTag.setAttribute('content', currentSeo.value.keywords)
    if (!document.head.contains(keywordsTag)) {
        document.head.appendChild(keywordsTag)
    }

    const languageTag = document.head.querySelector('meta[name="language"]') || document.createElement('meta')
    languageTag.setAttribute('name', 'language')
    languageTag.setAttribute('content', currentSeo.value.lang)
    if (!document.head.contains(languageTag)) {
        document.head.appendChild(languageTag)
    }

    const canonicalUrl = `${siteUrl}${route.fullPath}`
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', canonicalUrl)
    if (!document.head.contains(canonical)) {
        document.head.appendChild(canonical)
    }

    const alternateEs = document.querySelector('link[rel="alternate"][hreflang="es"]') || document.createElement('link')
    alternateEs.setAttribute('rel', 'alternate')
    alternateEs.setAttribute('hreflang', 'es')
    alternateEs.setAttribute('href', `${siteUrl}${route.fullPath}`)
    if (!document.head.contains(alternateEs)) {
        document.head.appendChild(alternateEs)
    }

    const alternateEn = document.querySelector('link[rel="alternate"][hreflang="en"]') || document.createElement('link')
    alternateEn.setAttribute('rel', 'alternate')
    alternateEn.setAttribute('hreflang', 'en')
    alternateEn.setAttribute('href', `${siteUrl}${route.fullPath}?lang=en`)
    if (!document.head.contains(alternateEn)) {
        document.head.appendChild(alternateEn)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.setAttribute('content', seoMeta.title)
    if (!document.head.contains(ogTitle)) {
        document.head.appendChild(ogTitle)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    ogDescription.setAttribute('content', seoMeta.description)
    if (!document.head.contains(ogDescription)) {
        document.head.appendChild(ogDescription)
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]') || document.createElement('meta')
    ogLocale.setAttribute('property', 'og:locale')
    ogLocale.setAttribute('content', currentSeo.value.locale)
    if (!document.head.contains(ogLocale)) {
        document.head.appendChild(ogLocale)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta')
    ogUrl.setAttribute('property', 'og:url')
    ogUrl.setAttribute('content', canonicalUrl)
    if (!document.head.contains(ogUrl)) {
        document.head.appendChild(ogUrl)
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]') || document.createElement('meta')
    twitterTitle.setAttribute('name', 'twitter:title')
    twitterTitle.setAttribute('content', seoMeta.title)
    if (!document.head.contains(twitterTitle)) {
        document.head.appendChild(twitterTitle)
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta')
    twitterDescription.setAttribute('name', 'twitter:description')
    twitterDescription.setAttribute('content', seoMeta.description)
    if (!document.head.contains(twitterDescription)) {
        document.head.appendChild(twitterDescription)
    }

    const schemaScript = (document.getElementById('seo-ld-json') as HTMLScriptElement | null) ?? document.createElement('script')
    schemaScript.id = 'seo-ld-json'
    schemaScript.type = 'application/ld+json'
    schemaScript.textContent = JSON.stringify(currentSeo.value.schema)
    if (!document.head.contains(schemaScript)) {
        document.head.appendChild(schemaScript)
    }
}

onMounted(() => {
    updateSeo()
})

watch(
    () => [route.fullPath, locale.value],
    () => {
        updateSeo()
    },
    { immediate: true },
)
</script>
