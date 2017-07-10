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
//form
import Switch from '@/view/example/Page-switch'
import Checklist from '@/view/example/Page-check'
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
      path: '/List/Cell',
      name: 'Cell',
      component: Cell
    },
     {
      path: '/List/Button',
      name: 'Button',
      component: Button
    },
     {
      path: '/List/Header',
      name: 'Header',
      component: Header
    },
     {
      path: '/List/Badge',
      name: 'Badge',
      component: Badge
    },
     {
      path: '/List/Spinner',
      name: 'Spinner',
      component: Spinner
    },
    {
      path: '/List/Toast',
      name: 'Toast',
      component: Toast
    },
     {
      path: '/List/Indicator',
      name: 'Indicator',
      component: Indicator
    },
    {
      path: '/List/Dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/List/Switch',
      name: 'Switch',
      component: Switch
    },
    {
      path: '/List/Checklist',
      name: 'Checklist',
      component: Checklist
    }
  ]
})
