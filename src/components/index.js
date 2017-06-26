import Badge from './Badge.vue';
import Button from './Button.vue';
import Cell from './Cell.vue';
import Header from './Header.vue';
import Spinner from './Spinner.vue';
import Switch from './Switch.vue';
const install=(Vue)=>{
    Vue.component('m-badge',Badge);
    Vue.component('m-button',Button);
    Vue.component('m-cell',Cell);
    Vue.component('m-header',Header);
    Vue.component('m-spinner',Spinner);
    Vue.component('m-switch',Switch);
}
export {
    Badge,
    Button,
    Cell,
    Header,
    Switch
}

export default install;