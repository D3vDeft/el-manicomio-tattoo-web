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

const baseUrl = 'https://elmanicomiotattoo.es';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Estudio de tatuajes en Madrid | El Manicomio Tattoo',
        description:
          'Estudio de tatuajes en Madrid, Chamberí. Tatuajes personalizados, blackwork, realismo, lettering, piercing y body art para clientes en Madrid.',
      },
    },
    {
      path: '/tattoos',
      name: 'tattoos',
      component: TattooView,
      meta: {
        title: 'Tatuajes personalizados en Madrid | El Manicomio Tattoo',
        description:
          'Tatuajes personalizados en Madrid: blackwork, realismo, lettering, minimalista y diseño exclusivo en el estudio El Manicomio Tattoo.',
      },
    },
    {
      path: '/piercings',
      name: 'piercings',
      component: PiercingsView,
      meta: {
        title: 'Piercings en Madrid | El Manicomio Tattoo',
        description:
          'Piercings en Madrid con atención profesional, materiales seguros y asesoramiento para elegir el mejor piercing para ti.',
      },
    },
    {
      path: '/tooth-gems',
      name: 'tooth-gems',
      component: ToothGemsView,
      meta: {
        title: 'Tooth gems en Madrid | El Manicomio Tattoo',
        description:
          'Tooth gems en Madrid con acabados seguros y personalizados para darle un toque único a tu estilo.',
      },
    },
    {
      path: '/jewelers',
      name: 'jewelers',
      component: JewelersView,
      meta: {
        title: 'Joyería y accesorios | El Manicomio Tattoo',
        description:
          'Descubre joyería premium y accesorios para complementar tu estilo con piezas elegantes y de alta calidad.',
      },
    },
    {
      path: '/self-care',
      name: 'self-care',
      component: SalfCareView,
      meta: {
        title: 'Self care y cuidado personal | El Manicomio Tattoo',
        description:
          'Cuidado personal y self care para tu piel y tu proceso de estilo, con recomendaciones y productos pensados para ti.',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contacta con El Manicomio Tattoo | Madrid',
        description:
          'Pide tu cita con El Manicomio Tattoo en Madrid. Contacta con nosotros para tatuajes personalizados, piercings y más.',
      },
    },
    {
      path: '/promo',
      name: 'promo',
      component: PromoView,
      meta: {
        title: 'Promociones y ofertas de tatuajes en Madrid',
        description:
          'Consulta promociones y ofertas del estudio de tatuajes El Manicomio Tattoo en Madrid y reserva tu cita.',
      },
    },
    {
      path: '/cookie-policy',
      name: 'Cookie Policy',
      component: CookiesPolicyView,
      meta: {
        title: 'Política de cookies | El Manicomio Tattoo',
        description:
          'Información sobre el uso de cookies y tecnologías relacionadas en la web de El Manicomio Tattoo.',
      },
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      component: PrivacyPolicyView,
      meta: {
        title: 'Política de privacidad | El Manicomio Tattoo',
        description:
          'Consulta la política de privacidad de El Manicomio Tattoo y cómo tratamos tus datos personales.',
      },
    },
    {
      path: '/legal-notice',
      name: 'Legal Notice',
      component: LegalNoticeView,
      meta: {
        title: 'Aviso legal | El Manicomio Tattoo',
        description: 'Aviso legal y condiciones de uso de la web de El Manicomio Tattoo.',
      },
    },
  ],
});

router.afterEach((to) => {
  const url = `${baseUrl}${to.fullPath}`;
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  ogUrl?.setAttribute('content', url);
});

export default router;
