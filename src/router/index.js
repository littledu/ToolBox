import Vue from 'vue'
import Router from 'vue-router'
import Keyframe from '@/components/Keyframe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Keyframe',
      component: Keyframe
    }
  ]
})
