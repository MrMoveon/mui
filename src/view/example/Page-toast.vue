<template>
<div class="page">
    <m-header title="Toast" fixed>
        <router-link to='List' slot="left" tag="span">
            <i class="iconfont">&#xe72a;</i>
            <span class="m-header-left-text">返回</span>
        </router-link>
    </m-header>
    <div class="content">
        <div class="content-padded">
            <m-button size="large" @click="top">
                点击弹出toast(顶部)
            </m-button>
           
        </div>
        <div class="content-padded">
            <m-button size="large" @click="middle">
                点击弹出toast(居中)
            </m-button>
           
        </div>
        <div class="content-padded">
            <m-button size="large" @click="bottom">
               点击弹出toast(底部)
            </m-button>
        </div>
        <div class="content-padded">
            <m-button size="large" @click="custom">
               点击弹出toast(自定义颜色)
            </m-button>
        </div>
        <div class="content-padded">
            <m-button size="large" @click="customIcon">
               点击弹出toast(自定义图标)
            </m-button>
        </div>
    </div>
    
</div>  
</template>
<style>

</style>
<script>
export default {
  methods:{
    top(){
        this.$Toast({
            msg:'顶部信息',
            position:'top',
            duration:2500
        })
    },
    middle(){
        this.$Toast('中间信息')
    },
    bottom(){
        this.$Toast({
            msg:'底部信息',
            position:'bottom',
            duration:2500
        })
    },
    custom(){
        this.$Toast({
            msg:'自定义颜色',
            position:'top',
            duration:1000,
            color:'#4cd964'
        })
    },
    customIcon(){
       var toast = this.$Toast({
            msg:'自定义图标',
            duration:10000,
            icon:'iconfont icon-prompt_fill'
        })
        setTimeout(()=>{
            toast.close();
        },2000)
    }
  }
}
</script>

