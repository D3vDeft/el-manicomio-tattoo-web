import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const distDirectory = new URL('../dist/', import.meta.url)
const routes = JSON.parse(await readFile(new URL('../src/seo/routeMetadata.json', import.meta.url), 'utf8'))
const baseHtml = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const siteUrl = 'https://elmanicomiotattoo.es'

function escapeAttribute(value) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('"', '&quot;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
}

function replaceTag(html, pattern, replacement, route) {
    const result = html.replace(pattern, replacement)
    if (result === html) {
        throw new Error(`Could not update ${pattern} for SEO route ${route}`)
    }
    return result
}

for (const [route, localizedMetadata] of Object.entries(routes)) {
    if (route === '/') {
        continue
    }

    const { title, description } = localizedMetadata.es_ES
    const escapedTitle = escapeAttribute(title)
    const escapedDescription = escapeAttribute(description)
    const canonicalUrl = `${siteUrl}${route}`
    const englishUrl = `${canonicalUrl}?lang=en`

    let html = baseHtml
    html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${escapedTitle}</title>`, route)
    html = replaceTag(
        html,
        /<meta\s+name="description"[\s\S]*?\/>/,
        `<meta name="description" content="${escapedDescription}" />`,
        route,
    )
    html = replaceTag(
        html,
        /<meta property="og:title"[^>]*\/>/,
        `<meta property="og:title" content="${escapedTitle}" />`,
        route,
    )
    html = replaceTag(
        html,
        /<meta\s+property="og:description"[\s\S]*?\/>/,
        `<meta property="og:description" content="${escapedDescription}" />`,
        route,
    )
    html = replaceTag(
        html,
        /<meta property="og:url"[^>]*\/>/,
        `<meta property="og:url" content="${canonicalUrl}" />`,
        route,
    )
    html = replaceTag(
        html,
        /<meta name="twitter:title"[^>]*\/>/,
        `<meta name="twitter:title" content="${escapedTitle}" />`,
        route,
    )
    html = replaceTag(
        html,
        /<meta\s+name="twitter:description"[\s\S]*?\/>/,
        `<meta name="twitter:description" content="${escapedDescription}" />`,
        route,
    )
    html = replaceTag(
        html,
        /<meta name="twitter:url"[^>]*\/>/,
        `<meta name="twitter:url" content="${canonicalUrl}" />`,
        route,
    )
    html = replaceTag(
        html,
        /<link rel="canonical"[^>]*\/>/,
        `<link rel="canonical" href="${canonicalUrl}" />`,
        route,
    )
    html = replaceTag(
        html,
        /<link rel="alternate" hreflang="es"[^>]*\/>/,
        `<link rel="alternate" hreflang="es" href="${canonicalUrl}" />`,
        route,
    )
    html = replaceTag(
        html,
        /<link rel="alternate" hreflang="en"[^>]*\/>/,
        `<link rel="alternate" hreflang="en" href="${englishUrl}" />`,
        route,
    )
    html = replaceTag(
        html,
        /<link rel="alternate" hreflang="x-default"[^>]*\/>/,
        `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`,
        route,
    )

    const outputPath = join(distDirectory.pathname, `${route.slice(1)}.html`)
    await writeFile(outputPath, html)
}

let notFoundHtml = baseHtml
notFoundHtml = replaceTag(notFoundHtml, /<title>[^<]*<\/title>/, '<title>Página no encontrada | El Manicomio Tattoo</title>', '404')
notFoundHtml = replaceTag(
    notFoundHtml,
    /<meta\s+name="description"[\s\S]*?\/>/,
    '<meta name="description" content="La página que buscas no está disponible." />',
    '404',
)
notFoundHtml = replaceTag(
    notFoundHtml,
    /<meta\s+name="robots"[\s\S]*?\/>/,
    '<meta name="robots" content="noindex, follow" />',
    '404',
)
notFoundHtml = replaceTag(
    notFoundHtml,
    /<meta property="og:title"[^>]*\/>/,
    '<meta property="og:title" content="Página no encontrada | El Manicomio Tattoo" />',
    '404',
)
notFoundHtml = replaceTag(
    notFoundHtml,
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    '<meta property="og:description" content="La página que buscas no está disponible." />',
    '404',
)
notFoundHtml = replaceTag(
    notFoundHtml,
    /<meta name="twitter:title"[^>]*\/>/,
    '<meta name="twitter:title" content="Página no encontrada | El Manicomio Tattoo" />',
    '404',
)
notFoundHtml = replaceTag(
    notFoundHtml,
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    '<meta name="twitter:description" content="La página que buscas no está disponible." />',
    '404',
)
notFoundHtml = notFoundHtml
    .replace(/<link rel="canonical"[^>]*\/>/, '')
    .replace(/<link rel="alternate" hreflang="[^"]*"[^>]*\/>/g, '')
    .replace(/<meta property="og:url"[^>]*\/>/, '')
    .replace(/<meta name="twitter:url"[^>]*\/>/, '')
notFoundHtml = replaceTag(
    notFoundHtml,
    /<div id="app"><\/div>/,
    `<div id="app">
      <main style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem;background:#111;color:#fff;text-align:center;font-family:Arial,sans-serif">
        <div style="max-width:42rem">
          <p style="letter-spacing:.4em;color:#aaa">404</p>
          <h1 style="font-size:clamp(2.5rem,8vw,5rem)">Página no encontrada</h1>
          <p style="font-size:1.15rem;line-height:1.7;color:#ddd">Lo sentimos, no encontramos la página que buscas. Puede que el enlace esté roto o que la página se haya eliminado.</p>
          <a href="/" style="display:inline-block;margin-top:1rem;padding:.9rem 1.5rem;border:1px solid #fff;color:#111;background:#fff;text-decoration:none;text-transform:uppercase;letter-spacing:.15em;font-weight:bold">Volver al inicio</a>
        </div>
      </main>
    </div>`,
    '404',
)
await writeFile(new URL('../dist/404.html', import.meta.url), notFoundHtml)

console.log(`Generated SEO metadata pages for ${Object.keys(routes).length - 1} routes and a custom 404 page.`)
