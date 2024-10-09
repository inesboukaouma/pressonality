import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue'),
    },
    {
      path: '/custom-nails',
      name: 'custom nails',
      component: () => import('../views/CustomView.vue'),
    },
    {
      path: '/find-your-size',
      name: 'find your size',
      component: () => import('../views/CustomView.vue'),
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('../views/GuideView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue'),
    },
  ],
});

export default router;
