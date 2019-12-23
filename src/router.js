import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);

const router = new Router ({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/pets'},
    { path: '/pets', component: () => import('@/views/pet/Pet') },
    { path: '/weather', component: () => import('@/views/weather/Weather') }
  ]
})

export default router;