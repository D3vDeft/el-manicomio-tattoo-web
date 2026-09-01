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
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

const route = useRoute()
const siteUrl = 'https://elmanicomiotattoo.es'

const defaultSeo = {
    title: 'Estudio de tatuajes en Madrid | El Manicomio Tattoo',
    description:
        'Estudio de tatuajes en Madrid con tatuajes personalizados, piercing y body art en Chamberí. Reserva tu cita con El Manicomio Tattoo.',
}

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TattooParlor',
    name: 'El Manicomio Tattoo',
    image: `${siteUrl}/og-image.svg`,
    url: siteUrl,
    telephone: '+34 674 444 826',
    email: 'hola@elmanicomiotattoo.es',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Chamberí',
        addressLocality: 'Madrid',
        addressRegion: 'Madrid',
        postalCode: '28014',
        addressCountry: 'ES',
    },
    areaServed: 'Madrid',
    description:
        'Estudio de tatuajes en Madrid especializado en tatuajes personalizados, blackwork, realismo, lettering, piercing y body art.',
    sameAs: ['https://www.instagram.com/elmanicomiotattoo/', 'https://www.tiktok.com/@elmanicomiotattoo'],
    priceRange: '€€',
    openingHours: ['Mo-Fr 11:00-20:00', 'Sa 11:00-18:00'],
}

function updateSeo() {
    const seoMeta = {
        title: (route.meta.title as string) || defaultSeo.title,
        description: (route.meta.description as string) || defaultSeo.description,
    }

    document.title = seoMeta.title

    const descriptionTag = document.head.querySelector('meta[name="description"]')
    if (descriptionTag) {
        descriptionTag.setAttribute('content', seoMeta.description)
    } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = seoMeta.description
        document.head.appendChild(meta)
    }

    const canonical = document.querySelector('link[rel="canonical"]')
    const canonicalUrl = `${siteUrl}${route.fullPath}`
    if (canonical) {
        canonical.setAttribute('href', canonicalUrl)
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

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta')
    ogUrl.setAttribute('property', 'og:url')
    ogUrl.setAttribute('content', canonicalUrl)
    if (!document.head.contains(ogUrl)) {
        document.head.appendChild(ogUrl)
    }

    const schemaScript = (document.getElementById('seo-ld-json') as HTMLScriptElement | null) ?? document.createElement('script')
    schemaScript.id = 'seo-ld-json'
    schemaScript.type = 'application/ld+json'
    schemaScript.textContent = JSON.stringify(structuredData)
    if (!document.head.contains(schemaScript)) {
        document.head.appendChild(schemaScript)
    }
}

onMounted(() => {
    updateSeo()
})

watch(
    () => route.fullPath,
    () => {
        updateSeo()
    },
    { immediate: true },
)
</script>
