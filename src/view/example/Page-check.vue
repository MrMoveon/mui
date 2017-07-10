<template>
<div class="page">
    <m-header title="Checklist" fixed>
        <router-link to='/List' slot="left" tag="span">
            <i class="iconfont">&#xe72a;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <div class="content-padded">
             <m-checklist :options="options" :value.sync="value"></m-checklist>
            选中的值：{{value}}
        </div>
         <div class="content-padded">
             <m-checklist :options="options2" :value.sync="value2" direction="right"></m-checklist>
            选中的值：{{value2}}
        </div>
    </div>
    
</div>  
</template>
<style>

</style>
<script>
export default {
  data(){
      return {
        value:['03'],
         value2:['03'],
        checkname:[],
        options:[
            {
            label:'选项01',
            value:'01',
            disabled:false
            },
            {
            label:'选项02',
            value:'02',
            disabled:false
            },
            {
            label:'选项03----已选中----禁用',
            value:'03',
            disabled:true
            },
             {
            label:'选项04----未选中----禁用',
            value:'04',
            disabled:true
            }
        ],
         options2:[
            {
            label:'选项01',
            value:'01',
            disabled:false
            },
            {
            label:'选项02',
            value:'02',
            disabled:false
            }
           
        ]
      }
  },
  methods:{
   
  }
}
</script>

