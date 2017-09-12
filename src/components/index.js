// Layout
import Page from './page'
import PageContainer from './page-container'
import Flex from './flex'
import FlexItem from './flex-item'
import WingBlank from './wing-blank'
import WhiteSpace from './white-space'
// css组件
import Cell from './cell'
import MediaCell from './media-cell'
import Icon from './icon'
import Button from './button'
import Badge from './badge'
import Spinner from './spinner'
// navigation
import Header from './header'
import Segment from './segment'
import Tabbar from './tabbar'
import TabbarItem from './tabbar-item'

const mui = {}
mui.install = (Vue) => {
    Vue.component(Page.name, Page)
    Vue.component(PageContainer.name, PageContainer)
    Vue.component(Flex.name, Flex)
    Vue.component(FlexItem.name, FlexItem)
    Vue.component(WingBlank.name, WingBlank)
    Vue.component(WhiteSpace.name, WhiteSpace)

    Vue.component(Cell.name, Cell)
    Vue.component(MediaCell.name, MediaCell)
    Vue.component(Icon.name, Icon)
    Vue.component(Button.name, Button)
    Vue.component(Badge.name, Badge)

    Vue.component(Spinner.name, Spinner)

    Vue.component(Header.name, Header)
    Vue.component(Segment.name, Segment)
    Vue.component(Tabbar.name, Tabbar)
    Vue.component(TabbarItem.name, TabbarItem)
}
export {
    Page,
    PageContainer,
    Flex,
    FlexItem,
    WingBlank,
    WhiteSpace,

    Cell,
    MediaCell,
    Icon,
    Button,
    Spinner,

    Header,
    Segment,
    Tabbar,
    TabbarItem
}
export default mui