<template>
    <section class="flex min-h-[65vh] items-center justify-center px-6 py-20 text-center text-white">
        <div class="max-w-2xl">
            <p class="mb-3 text-sm uppercase tracking-[0.4em] text-white/60">404</p>
            <h1 class="mb-6 font-display text-5xl md:text-7xl">
                {{ $t('notFound.title') }}
            </h1>
            <p class="mb-10 text-lg leading-8 text-white/75 md:text-xl">
                {{ $t('notFound.description') }}
            </p>
            <div class="flex flex-col justify-center gap-4 sm:flex-row">
                <RouterLink
                    to="/"
                    class="border border-white/60 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-transparent hover:text-white"
                >
                    {{ $t('notFound.home') }}
                </RouterLink>
                <RouterLink
                    to="/contact"
                    class="border border-white/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
                >
                    {{ $t('notFound.contact') }}
                </RouterLink>
            </div>
        </div>
    </section>
</template>
