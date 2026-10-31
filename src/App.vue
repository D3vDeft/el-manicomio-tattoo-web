<template>
    <div class="relative flex flex-col min-h-screen">

        <!-- Fondo -->
        <div class="absolute inset-0 bg-[url('../assets/background.jpg')] bg-cover">
        </div>
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- Contenido -->
        <div class="relative flex flex-col min-h-screen">

            <HeaderComponent />

            <main class="flex-1">
                <RouterView />
            </main>

            <FooterComponent />

        </div>

        <CookieConsentComponent />

    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import routeMetadata from './seo/routeMetadata.json'
import CookieConsentComponent from './components/CookieConsentComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()
const siteUrl = 'https://elmanicomiotattoo.es'
const seoByLocale = {
    es_ES: {
        lang: 'es',
        locale: 'es_ES',
        title: 'Estudio de tatuajes en Madrid | El Manicomio Tattoo',
        description:
            'Estudio de tatuajes en Madrid con tatuajes personalizados, piercing, tooth gems y body art en Chamberí. El Manicomio Tattoo ofrece arte y seguridad.',
        schema: {
            '@context': 'https://schema.org',
            '@type': 'TattooParlor',
            '@id': `${siteUrl}/#business`,
            name: 'El Manicomio Tattoo',
            image: `${siteUrl}/og-image.png`,
            url: `${siteUrl}/`,
            telephone: '+34 674 444 826',
            email: 'elmanicomiotattoo@gmail.com',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle de Gaztambide, 26',
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
            openingHoursSpecification: [{
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '12:30',
                closes: '21:00',
            }],
        },
    },
    en_EN: {
        lang: 'en',
        locale: 'en_EN',
        title: 'Tattoo Studio in Madrid | El Manicomio Tattoo',
        description:
            'Tattoo studio in Madrid offering custom tattoos, piercings, tooth gems and body art in Chamberí. El Manicomio Tattoo creates meaningful, high-quality studio work.',
        schema: {
            '@context': 'https://schema.org',
            '@type': 'TattooParlor',
            '@id': `${siteUrl}/#business`,
            name: 'El Manicomio Tattoo',
            image: `${siteUrl}/og-image.png`,
            url: `${siteUrl}/`,
            telephone: '+34 674 444 826',
            email: 'elmanicomiotattoo@gmail.com',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle de Gaztambide, 26',
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
            openingHoursSpecification: [{
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '12:30',
                closes: '21:00',
            }],
        },
    },
} as const

const currentSeo = computed(() => {
    const selectedLocale = locale.value in seoByLocale ? locale.value : 'es_ES'
    return seoByLocale[selectedLocale as keyof typeof seoByLocale]
})

function updateSeo() {
    const isNotFound = route.name === 'not-found'
    const pageMetadata =
        routeMetadata[route.path as keyof typeof routeMetadata]?.[
            locale.value === 'en_EN' ? 'en_EN' : 'es_ES'
        ]
    const seoMeta = {
        title: isNotFound
            ? `${t('notFound.title')} | El Manicomio Tattoo`
            : pageMetadata?.title || (route.meta.title as string) || currentSeo.value.title,
        description: isNotFound
            ? t('notFound.description')
            : pageMetadata?.description || (route.meta.description as string) || currentSeo.value.description,
    }

    document.title = seoMeta.title
    document.documentElement.lang = currentSeo.value.lang

    const descriptionTag = document.head.querySelector('meta[name="description"]') || document.createElement('meta')
    descriptionTag.setAttribute('name', 'description')
    descriptionTag.setAttribute('content', seoMeta.description)
    if (!document.head.contains(descriptionTag)) {
        document.head.appendChild(descriptionTag)
    }

    const robotsTag = document.head.querySelector('meta[name="robots"]') || document.createElement('meta')
    robotsTag.setAttribute('name', 'robots')
    robotsTag.setAttribute('content', isNotFound ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    if (!document.head.contains(robotsTag)) {
        document.head.appendChild(robotsTag)
    }

    const canonicalUrl = `${siteUrl}${route.path}${locale.value === 'en_EN' ? '?lang=en' : ''}`

    if (isNotFound) {
        document.head
            .querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang], meta[property="og:url"], meta[name="twitter:url"]')
            .forEach((tag) => tag.remove())
    } else {
        const spanishUrl = `${siteUrl}${route.path}`
        const englishUrl = `${siteUrl}${route.path}?lang=en`
        const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        canonical.setAttribute('href', canonicalUrl)
        if (!document.head.contains(canonical)) {
            document.head.appendChild(canonical)
        }

        const alternateEs = document.querySelector('link[rel="alternate"][hreflang="es"]') || document.createElement('link')
        alternateEs.setAttribute('rel', 'alternate')
        alternateEs.setAttribute('hreflang', 'es')
        alternateEs.setAttribute('href', spanishUrl)
        if (!document.head.contains(alternateEs)) {
            document.head.appendChild(alternateEs)
        }

        const alternateEn = document.querySelector('link[rel="alternate"][hreflang="en"]') || document.createElement('link')
        alternateEn.setAttribute('rel', 'alternate')
        alternateEn.setAttribute('hreflang', 'en')
        alternateEn.setAttribute('href', englishUrl)
        if (!document.head.contains(alternateEn)) {
            document.head.appendChild(alternateEn)
        }

        const alternateDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]') || document.createElement('link')
        alternateDefault.setAttribute('rel', 'alternate')
        alternateDefault.setAttribute('hreflang', 'x-default')
        alternateDefault.setAttribute('href', spanishUrl)
        if (!document.head.contains(alternateDefault)) {
            document.head.appendChild(alternateDefault)
        }
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

    const ogLocaleAlternate = document.querySelector('meta[property="og:locale:alternate"]') || document.createElement('meta')
    ogLocaleAlternate.setAttribute('property', 'og:locale:alternate')
    ogLocaleAlternate.setAttribute('content', currentSeo.value.locale === 'es_ES' ? 'en_US' : 'es_ES')
    if (!document.head.contains(ogLocaleAlternate)) {
        document.head.appendChild(ogLocaleAlternate)
    }

    if (!isNotFound) {
        const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta')
        ogUrl.setAttribute('property', 'og:url')
        ogUrl.setAttribute('content', canonicalUrl)
        if (!document.head.contains(ogUrl)) {
            document.head.appendChild(ogUrl)
        }
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

    const socialImage = `${siteUrl}/og-image.png`
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta')
    ogImage.setAttribute('property', 'og:image')
    ogImage.setAttribute('content', socialImage)
    if (!document.head.contains(ogImage)) {
        document.head.appendChild(ogImage)
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]') || document.createElement('meta')
    twitterImage.setAttribute('name', 'twitter:image')
    twitterImage.setAttribute('content', socialImage)
    if (!document.head.contains(twitterImage)) {
        document.head.appendChild(twitterImage)
    }

    const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta')
    twitterCard.setAttribute('name', 'twitter:card')
    twitterCard.setAttribute('content', 'summary_large_image')
    if (!document.head.contains(twitterCard)) {
        document.head.appendChild(twitterCard)
    }

    if (!isNotFound) {
        const twitterUrl = document.querySelector('meta[name="twitter:url"]') || document.createElement('meta')
        twitterUrl.setAttribute('name', 'twitter:url')
        twitterUrl.setAttribute('content', canonicalUrl)
        if (!document.head.contains(twitterUrl)) {
            document.head.appendChild(twitterUrl)
        }
    }

    const schemaScript = (document.getElementById('seo-ld-json') as HTMLScriptElement | null) ?? document.createElement('script')
    schemaScript.id = 'seo-ld-json'
    schemaScript.type = 'application/ld+json'
    schemaScript.textContent = JSON.stringify(currentSeo.value.schema)
    if (!document.head.contains(schemaScript)) {
        document.head.appendChild(schemaScript)
    }
}

onMounted(async () => {
    await router.isReady()

    if (locale.value === 'en_EN' && route.query.lang !== 'en') {
        void router.replace({
            path: route.path,
            query: { ...route.query, lang: 'en' },
            hash: route.hash,
        })
        return
    }

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
