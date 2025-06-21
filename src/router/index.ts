import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'fleet',
      component: () => import('../components/FleetSection.vue'),
    },
  ],
})

export default router
