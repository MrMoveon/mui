import Vue from 'vue';
const dialogConstructor=Vue.extend(require('./src/dialog.vue'));
let Instance;
let defaultOption={
        title:'提示',
        text:'',
        cancelText:'取消',
        confirmText:'确定',
        showCancelButton:false,
        showConfirmButton:true,
        callback:null
}
let initInstance=function(){
     if(!Instance){
        Instance=new dialogConstructor({
            el:document.createElement('div')
        });
    }
}
let dialog={
    alert(options={}){
        initInstance();
        if(typeof options=='string'){
            Instance.text=options;
            Instance.callback=function(){}
        }else{
            //合并参数
            let option=Object.assign({},defaultOption,options);
            //设置值
            for (var item in option) {
                Instance[item]=option[item]
            }
        }
        
        //插入到文档
        document.body.appendChild(Instance.$el);
        Vue.nextTick(()=>{
            Instance.visible=true;
        })
    },
    close(){
        Instance.visible=false;
    }
}
export default dialog;