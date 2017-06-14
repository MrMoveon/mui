import Vue from 'vue'
import Router from 'vue-router'
import List from '@/view/example/List'
import Cell from '@/view/example/Page-cell'
import Button from '@/view/example/Page-button'
import Badge from '@/view/example/Page-badge'
import Header from '@/view/example/Page-header'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'List'
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
     {
      path: '/Cell',
      name: 'Cell',
      component: Cell
    },
     {
      path: '/Button',
      name: 'Button',
      component: Button
    },
     {
      path: '/Header',
      name: 'Header',
      component: Header
    },
     {
      path: '/Badge',
      name: 'Badge',
      component: Badge
    }
  ]
})
