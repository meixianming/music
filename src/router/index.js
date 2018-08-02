import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/views/recommend'
import rank from '@/views/rank'
import singer from '@/views/singer'

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
    }, {
      path: "/rank",
      name: 'rank',
      component: rank
    },
    {
      path: "/singer",
      name: 'singer',
      component: singer
    }
  ]
})
