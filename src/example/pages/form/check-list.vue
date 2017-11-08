<template>
    <mui-page>
        <mui-header mode='light' fixed title="CheckList">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>

            <mui-wing-blank color="#f8f8f8">
                <div class="sub-title">
                    选中的值：{{value}}
                </div>
            </mui-wing-blank>
            <mui-checklist :options="options" :value.sync="value"></mui-checklist>

            <mui-wing-blank color="#f8f8f8">
                <div class="sub-title">
                    选中的值：{{value2}}
                </div>
            </mui-wing-blank>
            <mui-checklist :options="options2" :value.sync="value2" direction="right" v-on:on-change="onChange"></mui-checklist>

        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'switch',
    mixins: [back],
    data () {
        return {
            value: ['03'],
            value2: ['02'],
            checkname: [],
            options: [
                {
                    label: '选项01',
                    value: '01',
                    disabled: false
                },
                {
                    label: '选项02',
                    value: '02',
                    disabled: false
                },
                {
                    label: '选项03----已选中----禁用',
                    value: '03',
                    disabled: true
                },
                {
                    label: '选项04----未选中----禁用',
                    value: '04',
                    disabled: true
                }
            ],
            options2: [
                {
                    label: '选项01',
                    value: '01',
                    disabled: false
                },
                {
                    label: '选项02',
                    value: '02',
                    disabled: false
                }

            ]
        }
    },
    methods: {
        onChange () {
            setTimeout(() => {
                this.$Toast('改变了：' + this.value2)
            }, 20)
        }
    }
}
</script>

<style>

</style>
