<template>
    <mui-page>
        <mui-header mode='light' fixed title="Dialog 弹出框">
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
                <mui-button size="large" @click="alert">
                    点击弹出alert
                </mui-button>
                <mui-white-space size="lg"></mui-white-space>
                <mui-button size="large" @click="alert2">
                    点击弹出alert,回调函数
                </mui-button>
                <mui-white-space size="lg"></mui-white-space>
                <mui-button size="large" @click="alert3">
                    点击弹出confirm框
                </mui-button>
                <mui-white-space size="lg"></mui-white-space>
                <mui-button size="large" @click="alert4">
                    遮罩可以关闭,设置透明度
                </mui-button>
            </mui-wing-blank>

        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'

// import {Dialog, Toast} from '@/components'

export default {
    name: 'dialog',
    mixins: [back],
    methods: {
        alert () {
           // this.Dialog.open('hello mui框架')
            this.$Dialog.open('hello mui框架')
        },
        alert2 () {
            var vm = this
            this.$Dialog.open({
                text: 'hello mui框架',
                callback (action) {
                    if (action) {
                        vm.$Toast('点击了确定')
                    }
                }
            })
        },
        alert3 () {
            var vm = this
            this.$Dialog.open({
                title: '信息提示',
                text: '您确定要删除么？',
                showCancelButton: true,
                callback (action) {
                    if (action === 'confirm') {
                        vm.$Toast({
                            msg: '点击了确定',
                            position: 'bottom'
                        })
                    }
                    if (action === 'cancel') {
                        vm.$Toast({
                            msg: '点击了取消',
                            position: 'bottom'
                        })
                    }
                }
            })
        },
        alert4 () {
            var vm = this
            this.$Dialog.open({
                text: 'hello mui框架',
                showCancelButton: true,
                maskClose: true,
                maskOpacity: 0.4,
                callback (action) {
                    if (action === 'confirm') {
                        vm.$Toast({
                            msg: '点击了确定',
                            position: 'bottom'
                        })
                    }
                    if (action === 'cancel') {
                        vm.$Toast({
                            msg: '点击了取消',
                            position: 'bottom'
                        })
                    }
                }
            })
        }
    }
}
</script>

<style>

</style>
