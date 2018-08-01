import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/views/recommend'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
    path: "/",
    redirect: "/recommend"
  }, {
    path: "/recommend",
    name: 'recommend',
    component: recommend
  }]
})
