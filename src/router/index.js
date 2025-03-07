// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    children: [
      {
    path: '/:code', 
    name: 'details',
    component: () => import( '../components/CountryDetails.vue')
  }
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;