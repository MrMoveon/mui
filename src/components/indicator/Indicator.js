import Vue from 'vue';

const IndicatorConstructor=Vue.extend(require('./Indicator.vue'));
let tid=1;
let Indicator=(options={})=>{
   
    const IndicatorInstance=new IndicatorConstructor();

    IndicatorInstance.text = typeof options ==='string' ? options : options.text;
    IndicatorInstance.spinnerType=options.spinnerType || 'default';
    IndicatorInstance.vm=IndicatorInstance.$mount();
    document.body.appendChild(IndicatorInstance.vm.$el);
    Vue.nextTick(() => {
      IndicatorInstance.visible = true;
    });
    
   
    return IndicatorInstance.vm;
}

export default {
    install:Vue=>{
        Vue.prototype.$Indicator=Indicator;
    }
}


