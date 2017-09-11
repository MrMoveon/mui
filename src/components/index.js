import Page from './page'
const mui = {}
mui.install = (Vue) => {
    Vue.component('mui-page', Page)
}
export {
    Page
}
export default mui