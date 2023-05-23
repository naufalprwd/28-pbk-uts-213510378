import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MyApp from '../views/myApp.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobsDetails from '../views/Jobs/JobsDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  
    {
      path: '/myApp',
      name: 'myApp',
      component: MyApp

    },

    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs
    },
    {
      path: '/jobs/:id',
      name: JobsDetails,
      component: JobsDetails,
      props: true
    },

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
  ]
})

export default router