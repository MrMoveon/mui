import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/example/Main'
import List from '@/example/pages/list'
import Layout from '@/example/pages/layout'
import Flex from '@/example/pages/layout/flex'
import WhiteSpace from '@/example/pages/layout/white-space'
import wingBlank from '@/example/pages/layout/wing-blank'

// css
import Button from '@/example/pages/css-components/button'
import Spinner from '@/example/pages/css-components/spinner'
import Header from '@/example/pages/css-components/header'
import Segment from '@/example/pages/css-components/segment'

// js
import Indicator from '@/example/pages/js-components/indicator'
import Toast from '@/example/pages/js-components/toast'
import Dialog from '@/example/pages/js-components/dialog'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/main',
            name: 'Main',
            component: Main
        },
        {
            path: '/example/list',
            name: 'List',
            component: List
        },
        {
            path: '/example/layout',
            name: 'layout',
            component: Layout,
            redirect: '/example/layout/flex',
            children: [
                {
                    path: 'flex',
                    name: 'Flex',
                    component: Flex
                },
                {
                    path: 'whitespace',
                    name: 'WhiteSpace',
                    component: WhiteSpace
                },
                {
                    path: 'wingblank',
                    name: 'wingBlank',
                    component: wingBlank
                }
            ]
        },
        {
            path: '/example/css',
            name: 'css',
            component: Layout,
            redirect: '/example/css/button',
            children: [
                {
                    path: 'button',
                    name: 'Button',
                    component: Button
                },
                {
                    path: 'spinner',
                    name: 'Spinner',
                    component: Spinner
                },
                {
                    path: 'header',
                    name: 'Header',
                    component: Header
                },
                {
                    path: 'segment',
                    name: 'Segment',
                    component: Segment
                }
            ]
        },
        {
            path: '/example/js',
            name: 'js',
            component: Layout,
            redirect: '/example/js/indicator',
            children: [
                {
                    path: 'indicator',
                    name: 'Indicator',
                    component: Indicator
                },
                {
                    path: 'toast',
                    name: 'Toast',
                    component: Toast
                },
                {
                    path: 'dialog',
                    name: 'Dialog',
                    component: Dialog
                }

            ]
        },
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '*',
            redirect: '/main'
        }
    ]
})
