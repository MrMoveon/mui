import Vue from 'vue'
import Router from 'vue-router'
import List from '@/view/example/List'
//css
import Cell from '@/view/example/Page-cell'
import Button from '@/view/example/Page-button'
import Badge from '@/view/example/Page-badge'
import Header from '@/view/example/Page-header'
import Spinner from '@/view/example/Page-spinner'
//js
import Toast from '@/view/example/Page-toast'
import Indicator from '@/view/example/Page-indicator'
import Dialog from '@/view/example/Page-dialog'
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
    },
     {
      path: '/Spinner',
      name: 'Spinner',
      component: Spinner
    },
    {
      path: '/Toast',
      name: 'Toast',
      component: Toast
    },
     {
      path: '/Indicator',
      name: 'Indicator',
      component: Indicator
    },
    {
      path: '/Dialog',
      name: 'Dialog',
      component: Dialog
    }
  ]
})
