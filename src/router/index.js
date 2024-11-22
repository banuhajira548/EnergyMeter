import { createRouter, createWebHistory } from 'vue-router';

// Import your components here
import Dashboard from '../components/Dashboard.vue';
import MachineDetail from '../components/MachineDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard,
  },
  // Add other routes here if needed
  {
    path: '/machine/:id',
    name: 'MachineDetail',
    component: MachineDetail,
    props: true, 
  },
];

const router = createRouter({
  history: createWebHistory('/'), // Provide the base URL directly as a string
  routes,
});

export default router;
