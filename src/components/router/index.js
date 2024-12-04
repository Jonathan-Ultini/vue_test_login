import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';  // Il tuo componente protetto
import Login from '../components/Login.vue';  // Il componente di login

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      // Controlla se esiste un token JWT
      const token = localStorage.getItem('auth_token');
      if (!token) {
        next('/login');  // Se non c'è il token, reindirizza al login
      } else {
        next();  // Se il token c'è, lascia passare
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
