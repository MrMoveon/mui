import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/example/Main'
import Layout from '@/example/pages/layout/layout'
import Flex from '@/example/pages/layout/flex'
import WhiteSpace from '@/example/pages/layout/white-space'
import wingBlank from '@/example/pages/layout/wing-blank'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/layout',
            name: 'layout',
            component: Layout,
            redirect: '/layout/flex',
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
        }
    ]
})
