import Vue from 'vue';
import VueRouter from 'vue-router';
import Piano from '../views/Piano.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Piano',
    component: Piano,
  },
  {
    path: '/piano',
    name: 'Piano',
    component: Piano,
    
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
