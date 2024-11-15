import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Events from '../pages/Events.vue';
import EventDetail from '../pages/EventDetail.vue';

const routes = [
  { path: '/', component: Home },           //"startside"
  { path: '/events', name: 'Events', component: Events },
  { path: '/events/:id', name: 'EventDetail', component: EventDetail }  // Dynamisk rute til hver event
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;