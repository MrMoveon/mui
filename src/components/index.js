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
import Spinner from './spinner'
// navigation
import Header from './header'
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
    Vue.component(Spinner.name, Spinner)

    Vue.component(Header.name, Header)
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

    Header
}
export default mui