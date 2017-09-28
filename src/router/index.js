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
import Badge from '@/example/pages/css-components/badge'
import Cell from '@/example/pages/css-components/cell'
import Spinner from '@/example/pages/css-components/spinner'
import Search from '@/example/pages/css-components/search'
import Popover from '@/example/pages/css-components/popover'
import ActionSheet from '@/example/pages/css-components/actionsheet'
// navigation
import Header from '@/example/pages/navigation/header'
import Segment from '@/example/pages/navigation/segment'
import Tabbar from '@/example/pages/navigation/tabbar'
// swiper
import Slide from '@/example/pages/swiper/slide'
import Scroll from '@/example/pages/swiper/scroll'
import Loadmore from '@/example/pages/swiper/loadmore'
import Picker from '@/example/pages/swiper/picker'
// feedback
import Progress from '@/example/pages/feedback/progress'
// js
import Indicator from '@/example/pages/js-components/indicator'
import Toast from '@/example/pages/js-components/toast'
import Dialog from '@/example/pages/js-components/dialog'
// form
import Switch from '@/example/pages/form/switch'
import CheckList from '@/example/pages/form/check-list'
import RadioList from '@/example/pages/form/radio-list'
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
                    path: 'badge',
                    name: 'Badge',
                    component: Badge
                },
                {
                    path: 'cell',
                    name: 'Cell',
                    component: Cell
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
                },
                {
                    path: 'tabbar',
                    name: 'Tabbar',
                    component: Tabbar
                },
                {
                    path: 'search',
                    name: 'Search',
                    component: Search
                },
                {
                    path: 'popover',
                    name: 'Popover',
                    component: Popover
                },
                {
                    path: 'actionsheet',
                    name: 'ActionSheet',
                    component: ActionSheet
                }
            ]
        },
        {
            path: '/example/swiper',
            name: 'swiper',
            component: Layout,
            redirect: '/example/swiper/slide',
            children: [
                {
                    path: 'slide',
                    name: 'Slide',
                    component: Slide
                },
                {
                    path: 'scroll',
                    name: 'Scroll',
                    component: Scroll
                },
                {
                    path: 'loadmore',
                    name: 'Loadmore',
                    component: Loadmore
                },
                {
                    path: 'picker',
                    name: 'Picker',
                    component: Picker
                }

            ]
        },
        {
            path: '/example/feedback',
            name: 'feedback',
            component: Layout,
            redirect: '/example/feedback/progress',
            children: [
                {
                    path: 'progress',
                    name: 'Progress',
                    component: Progress
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
            path: '/example/form',
            name: 'form',
            component: Layout,
            redirect: '/example/form/switch',
            children: [
                {
                    path: 'switch',
                    name: 'Switch',
                    component: Switch
                },
                {
                    path: 'check-list',
                    name: 'CheckList',
                    component: CheckList
                },
                {
                    path: 'radio-list',
                    name: 'RadioList',
                    component: RadioList
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
