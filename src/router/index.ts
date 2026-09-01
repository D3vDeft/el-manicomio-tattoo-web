import ContactView from '@/views/ContactView.vue';
import CookiesPolicyView from '@/views/CookiesPolicyView.vue';
import HomeView from '@/views/HomeView.vue';
import JewelersView from '@/views/JewelersView.vue';
import LegalNoticeView from '@/views/LegalNoticeView.vue';
import PiercingsView from '@/views/PiercingsView.vue';
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue';
import PromoView from '@/views/PromoView.vue';
import SalfCareView from '@/views/SalfCareView.vue';
import TattooView from '@/views/TattooView.vue';
import ToothGemsView from '@/views/ToothGemsView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tattoos',
      name: 'tattoos',
      component: TattooView,
    },
    {
      path: '/piercings',
      name: 'piercings',
      component: PiercingsView,
    },
    {
      path: '/tooth-gems',
      name: 'tooth-gems',
      component: ToothGemsView,
    },
    {
      path: '/jewelers',
      name: 'jewelers',
      component: JewelersView,
    },
    {
      path: '/self-care',
      name: 'self-care',
      component: SalfCareView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/promo',
      name: 'promo',
      component: PromoView,
    },
    {
      path: '/cookie-policy',
      name: 'Cookie Policy',
      component: CookiesPolicyView,
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      component: PrivacyPolicyView,
    },
    {
      path: '/legal-notice',
      name: 'Legal Notice',
      component: LegalNoticeView,
    },
  ],
});

export default router;
