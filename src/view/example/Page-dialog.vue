<template>
<div class="page">
    <m-header title="Dialog" fixed>
        <router-link to='/List' slot="left" tag="span">
            <i class="iconfont">&#xe72a;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <div class="content-padded">
            <m-button size="large" @click="alert">
                点击弹出alert
            </m-button>
            <m-button size="large" @click="alert2">
                点击弹出alert,回调函数
            </m-button>
            <m-button size="large" @click="alert3">
                点击弹出confirm框
            </m-button>
            <m-button size="large" @click="alert4">
               遮罩可以关闭,设置透明度
            </m-button>
        </div>
        
    </div>
    
</div>  
</template>
<style>

</style>
<script>
import Dialog from '../../components/dialog';
export default {
  destroyed(){
      Dialog.close();
  },
  methods:{
    alert(){
        var vm=this;
        Dialog.open('hello mui框架')
    },
    alert2(){
        var vm=this;
        Dialog.open({
            text:'hello mui框架',
            callback(action){
                if(action){
                    vm.$Toast('点击了确定');
                }
            }
        })
    },
    alert3(){
        var vm=this;
        Dialog.open({
            title:'信息提示',
            text:'您确定要删除么？',
            showCancelButton:true,
            callback(action){
                if(action=='confirm'){
                    vm.$Toast({
                        msg:'点击了确定',
                        position:'bottom',
                    });
                }
                if(action=='cancel'){
                     vm.$Toast({
                        msg:'点击了取消',
                        position:'bottom',
                    });
                }
            }
        })
    },
    alert4(){
        var vm=this;
        Dialog.open({
            text:'hello mui框架',
            showCancelButton:true,
            maskClose:true,
            maskOpacity:0.4,
            callback(action){
                if(action=='confirm'){
                    vm.$Toast({
                        msg:'点击了确定',
                        position:'bottom',
                    });
                }
                if(action=='cancel'){
                     vm.$Toast({
                        msg:'点击了取消',
                        position:'bottom',
                    });
                }
            }
        })
    }
  }
}
</script>

