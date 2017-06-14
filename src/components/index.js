import Badge from './badge.vue';
import Button from './button.vue';
import Cell from './cell.vue';
import Header from './header.vue';
const install=(Vue)=>{
    Vue.component('m-badge',Badge);
    Vue.component('m-button',Button);
    Vue.component('m-cell',Cell);
    Vue.component('m-header',Header);
}
export {
    Badge,
    Button,
    Cell,
    Header
}

export default install;