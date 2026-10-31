import ContactView from '@/views/ContactView.vue';
import CookiesPolicyView from '@/views/CookiesPolicyView.vue';
import HomeView from '@/views/home/HomeView.vue';
import JewelersView from '@/views/JewelersView.vue';
import LegalNoticeView from '@/views/LegalNoticeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import PiercingsView from '@/views/PiercingsView.vue';
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue';
import PromoView from '@/views/PromoView.vue';
import SalfCareView from '@/views/SalfCareView.vue';
import TattooView from '@/views/tattoo/TattooView.vue';
import ToothGemsView from '@/views/ToothGemsView.vue';
import routeMetadata from '@/seo/routeMetadata.json';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: routeMetadata['/'].es_ES.title,
        description: routeMetadata['/'].es_ES.description,
      },
    },
    {
      path: '/tattoos',
      name: 'tattoos',
      component: TattooView,
      meta: {
        title: routeMetadata['/tattoos'].es_ES.title,
        description: routeMetadata['/tattoos'].es_ES.description,
        scrollToTop: true,
      },
    },
    {
      path: '/piercings',
      name: 'piercings',
      component: PiercingsView,
      meta: {
        title: routeMetadata['/piercings'].es_ES.title,
        description: routeMetadata['/piercings'].es_ES.description,
        scrollToTop: true,
      },
    },
    {
      path: '/tooth-gems',
      name: 'tooth-gems',
      component: ToothGemsView,
      meta: {
        title: routeMetadata['/tooth-gems'].es_ES.title,
        description: routeMetadata['/tooth-gems'].es_ES.description,
        scrollToTop: true,
      },
    },
    {
      path: '/jewelers',
      name: 'jewelers',
      component: JewelersView,
      meta: {
        title: routeMetadata['/jewelers'].es_ES.title,
        description: routeMetadata['/jewelers'].es_ES.description,
        scrollToTop: true,
      },
    },
    {
      path: '/self-care',
      name: 'self-care',
      component: SalfCareView,
      meta: {
        title: routeMetadata['/self-care'].es_ES.title,
        description: routeMetadata['/self-care'].es_ES.description,
        scrollToTop: true,
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: routeMetadata['/contact'].es_ES.title,
        description: routeMetadata['/contact'].es_ES.description,
        scrollToTop: true,
      },
    },
    {
      path: '/promo',
      name: 'promo',
      component: PromoView,
      meta: {
        title: routeMetadata['/promo'].es_ES.title,
        description: routeMetadata['/promo'].es_ES.description,
        scrollToTop: true,
      },
    },
    {
      path: '/cookie-policy',
      name: 'Cookie Policy',
      component: CookiesPolicyView,
      meta: {
        title: routeMetadata['/cookie-policy'].es_ES.title,
        description: routeMetadata['/cookie-policy'].es_ES.description,
        scrollToTop: true,
      },
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      component: PrivacyPolicyView,
      meta: {
        title: routeMetadata['/privacy-policy'].es_ES.title,
        description: routeMetadata['/privacy-policy'].es_ES.description,
        scrollToTop: true,
      },
    },
    {
      path: '/legal-notice',
      name: 'Legal Notice',
      component: LegalNoticeView,
      meta: {
        title: routeMetadata['/legal-notice'].es_ES.title,
        description: routeMetadata['/legal-notice'].es_ES.description,
        scrollToTop: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: {
        title: 'Página no encontrada | El Manicomio Tattoo',
        description: 'La página que buscas no está disponible.',
        scrollToTop: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.scrollToTop) {
      return { top: 0, behavior: 'smooth' };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return {};
  },
});

router.beforeEach((to, from) => {
  if (to.path !== from.path && to.query.lang === undefined && from.query.lang === 'en') {
    return {
      path: to.path,
      query: { ...to.query, lang: 'en' },
      hash: to.hash,
      replace: true,
    };
  }
});

export default router;
