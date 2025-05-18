import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/sections/Home.vue';
import Projects from '../components/sections/Projects.vue';
import About from '../components/sections/About.vue';
import Contact from '../components/sections/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { transition: 'slide-right' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { transition: 'slide-right' }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(_to: any, _from: any, savedPosition: any) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
