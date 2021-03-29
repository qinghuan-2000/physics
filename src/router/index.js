import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/home.vue'
import Motion from '@/pages/motion.vue'
import Force from '@/pages/force.vue'
import Momentum from '@/pages/momentum.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/motion',
      name:'Motion',
      component:Motion
    },
    {
      path:'/force',
      name:'Force',
      component:Force
    },
    {
      path:'/momentum',
      name:'Momentum',
      component:Momentum
    },
  ]
})
