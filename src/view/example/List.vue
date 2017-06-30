<template>
    <div class="page">
        <m-header title="mui" fixed></m-header>
        <div class="content">
            
            <!--css组件-->
            <!--<div class="content-padded">css基础组件</div>
            <m-cell title="Button" :to="{name:'Button'}" icon></m-cell>
            <m-cell title="Badge" :to="{name:'Badge'}" icon>
                <m-badge type="danger" size="small" slot="badge">12</m-badge>
            </m-cell>
            <m-cell title="Cell" :to="{name:'Cell'}" icon value="带 icon">
                <i class="icon iconfont" slot="icon">&#xe6ec;</i>
            </m-cell>
            <m-cell title="Header" :to="{name:'Header'}" icon></m-cell>
            <m-cell title="Spinner" :to="{name:'Spinner'}" icon></m-cell>-->
            <!--js组件-->
            <!--<div class="content-padded">js基础组件</div>
            <m-cell title="Toast" :to="{name:'Toast'}" icon></m-cell>
            <m-cell title="Indicator" :to="{name:'Indicator'}" icon></m-cell>
            <m-cell title="Dialog" :to="{name:'Dialog'}" icon></m-cell>-->
            <!--form组件-->
            <!--<div class="content-padded">form基础组件</div>
            <m-cell title="Switch" :to="{name:'Switch'}" icon></m-cell>-->


            <div v-for="(list,index) in pageList" :key="index">
                <div class="content-padded">{{list.title}}</div>
                <m-cell v-for="(item,iIndex) in list.item" :key='iIndex' :title="item.title" :to="item.to" :icon="item.icon"></m-cell>
            </div>
          
        </div>
       
    </div>
</template>

<script>


export default{
    name:'List',
    data(){
        return{
           pageList:[
               {
                   'title':'css基础组件',
                   item:[
                       {
                           title:"Button",
                           to:{name:'Button'},
                           icon:true
                        },
                        {
                           title:"Badge",
                           to:{name:'Badge'},
                           icon:true
                        },
                        {
                           title:"Cell",
                           to:{name:'Cell'},
                           icon:true
                        },
                        {
                           title:"Header",
                           to:{name:'Header'},
                           icon:true
                        },
                        {
                           title:"Spinner",
                           to:{name:'Spinner'},
                           icon:true
                        },
                   ]
               },
               {
                   'title':'js基础组件',
                   item:[
                       {
                           title:"Toast",
                           to:{name:'Toast'},
                           icon:true
                        },
                        {
                           title:"Indicator",
                           to:{name:'Indicator'},
                           icon:true
                        },
                        {
                           title:"Dialog",
                           to:{name:'Dialog'},
                           icon:true
                        }
                   ]
               },
               {
                   'title':'form基础组件',
                   item:[
                       {
                           title:"Switch",
                           to:{name:'Switch'},
                           icon:true
                        }
                        
                   ]
               }
           ]
        }
    }
    
}
</script>
<style>

</style>

