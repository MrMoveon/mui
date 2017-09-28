<template>
    <mui-page>
        <mui-header mode='light' fixed title="Toast 提示">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank>
                <div class="sub-title">
                    基本
                </div>
            </mui-wing-blank>
            <mui-white-space size='md'></mui-white-space>
            <mui-wing-blank size="lg">
                <mui-button size="large" @click="top">
                    点击弹出toast(顶部)
                </mui-button>
                <mui-white-space size="lg"></mui-white-space>
                <mui-button size="large" @click="middle">
                    点击弹出toast(居中)
                </mui-button>
                <mui-white-space size="lg"></mui-white-space>
                <mui-button size="large" @click="bottom">
                    点击弹出toast(底部)
                </mui-button>
                <mui-white-space size="lg"></mui-white-space>    
                <mui-button size="large" @click="custom">
                    点击弹出toast(自定义颜色)
                </mui-button>
                <mui-white-space size="lg"></mui-white-space>
                <mui-button size="large" @click="customIcon">
                    点击弹出toast(自定义图标)
                </mui-button>
            </mui-wing-blank>

        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
import {Toast} from '@/components'
export default {
    name: 'indicator',
    mixins: [back],
    methods: {
        top () {
            Toast({
                msg: '顶部信息',
                position: 'top',
                duration: 2500
            })
        },
        middle () {
            Toast('中间信息')
        },
        bottom () {
            Toast({
                msg: '底部信息',
                position: 'bottom',
                duration: 2500
            })
        },
        custom () {
            Toast({
                msg: '自定义颜色',
                position: 'top',
                duration: 1000,
                color: '#4cd964'
            })
        },
        customIcon () {
            var toast = Toast({
                msg: '自定义图标',
                duration: 10000,
                icon: 'iconfont icon-exclamationcircleo'
            })
            setTimeout(() => {
                toast.close()
            }, 2000)
        }
    }
}
</script>

<style>

</style>
