import '../assets/fonts/iconfont.css'
// Layout
import Page from './page'
import PageContainer from './page-container'
import Flex from './flex'
import FlexItem from './flex-item'
import WingBlank from './wing-blank'
import WhiteSpace from './white-space'
// 基础组件
import CellGroup from './cell-group'
import Cell from './cell'
import MediaCell from './media-cell'
import Icon from './icon'
import Button from './button'
import Badge from './badge'
import Spinner from './spinner'
import Search from './search'
import Stepper from './stepper'
// navigation
import Header from './header'
import Segment from './segment'
import Tabbar from './tabbar'
import TabbarItem from './tabbar-item'
// swiper
import Slide from './slide'
import SlideItem from './slide-item'
import ScrollView from './scroll-view'
import ScrollViewItem from './scroll-view-item'
import Loadmore from './loadmore'
// feedback
import Popover from './popover'
import ActionSheet from './actionsheet'
import Picker from './picker'
import DtPicker from './dtpicker'
import Progress from './progress'
import Dialog from './dialog'
import Toast from './toast'
// form
import Switch from './switch'
import CheckList from './check-list'
import RadioList from './radio-list'
import Field from './field'
// 第三方组件
import Lazyload from './lazyload'
import Swiper from './swiper'

// rem布局
import Flexible from './flexible'

const mui = {}
mui.install = (Vue) => {
    Vue.component(Page.name, Page)
    Vue.component(PageContainer.name, PageContainer)
    Vue.component(Flex.name, Flex)
    Vue.component(FlexItem.name, FlexItem)
    Vue.component(WingBlank.name, WingBlank)
    Vue.component(WhiteSpace.name, WhiteSpace)

    Vue.component(CellGroup.name, CellGroup)
    Vue.component(Cell.name, Cell)

    Vue.component(MediaCell.name, MediaCell)
    Vue.component(Icon.name, Icon)
    Vue.component(Button.name, Button)
    Vue.component(Badge.name, Badge)
    Vue.component(Spinner.name, Spinner)
    Vue.component(Search.name, Search)
    Vue.component(Stepper.name, Stepper)

    Vue.component(Header.name, Header)
    Vue.component(Segment.name, Segment)
    Vue.component(Tabbar.name, Tabbar)
    Vue.component(TabbarItem.name, TabbarItem)

    Vue.component(Slide.name, Slide)
    Vue.component(SlideItem.name, SlideItem)
    Vue.component(ScrollView.name, ScrollView)
    Vue.component(ScrollViewItem.name, ScrollViewItem)
    Vue.component(Loadmore.name, Loadmore)

    Vue.component(Popover.name, Popover)
    Vue.component(ActionSheet.name, ActionSheet)
    Vue.component(Picker.name, Picker)
    Vue.component(DtPicker.name, DtPicker)
    Vue.component(Progress.name, Progress)

    Vue.component(Switch.name, Switch)
    Vue.component(CheckList.name, CheckList)
    Vue.component(RadioList.name, RadioList)
    Vue.component(Field.name, Field)
    // 使用vue-lazyload插件，
    Vue.use(Lazyload, {
        preLoad: 1.3,
        error: require('../assets/logo.png'),
        loading: require('../assets/logo.png'),
        attempt: 1
    })
    Vue.use(Toast)

    Vue.prototype.swiper = Swiper
}
if (typeof window !== 'undefined' && window.Vue) {
    mui.install(window.Vue)
}
export {
    Page,
    PageContainer,
    Flex,
    FlexItem,
    WingBlank,
    WhiteSpace,

    CellGroup,
    Cell,
    MediaCell,
    Icon,
    Button,
    Spinner,
    Search,
    Stepper,

    Header,
    Segment,
    Tabbar,
    TabbarItem,

    Lazyload,
    Swiper,
    Slide,
    SlideItem,
    ScrollView,
    ScrollViewItem,
    Loadmore,

    Picker,
    DtPicker,
    Progress,
    Popover,
    ActionSheet,
    Dialog,
    Toast,

    Switch,
    CheckList,
    RadioList,
    Field

}
export default mui