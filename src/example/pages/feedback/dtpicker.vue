<template>
    <mui-page>
        <mui-header mode='light' fixed title="Picker">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank color="#f8f8f8">
                <div class="sub-title">
                    基本
                </div>
            </mui-wing-blank>
            <mui-cell-group>
                <mui-cell title="选择日期时间" :value='value1' v-on:on-press="onPress01"></mui-cell>
            </mui-cell-group>
            <mui-wing-blank color="#f8f8f8">
                <div class="sub-title">
                    设定年份区间
                </div>
            </mui-wing-blank>
            <mui-cell-group>
                <mui-cell title="选择日期" :value='value2' v-on:on-press="onPress02"></mui-cell>
            </mui-cell-group>
            <mui-wing-blank color="#f8f8f8">
                <div class="sub-title">
                    设定选中的时间
                </div>
            </mui-wing-blank>
            <mui-cell-group>
                <mui-cell title="选择日期" :value='value3' v-on:on-press="onPress03"></mui-cell>
            </mui-cell-group>
            <mui-wing-blank color="#f8f8f8">
                <div class="sub-title">
                    指定类型
                </div>
            </mui-wing-blank>
            <mui-cell-group>
                <mui-cell title="日期选择date" :value='value4' v-on:on-press="onPress04"></mui-cell>
                <mui-cell title="时间选择time" :value='value5' v-on:on-press="onPress05"></mui-cell>
                <mui-cell title="月份选择month" :value='value6' v-on:on-press="onPress06"></mui-cell>
                <mui-cell title="时间选择hour" :value='value7' v-on:on-press="onPress07"></mui-cell>
            </mui-cell-group>
            <mui-wing-blank color="#f8f8f8">
                <div class="sub-title">
                    自定义数据
                </div>
            </mui-wing-blank>
            <mui-cell-group>
                <mui-cell title="自定义数据" :value='value8' v-on:on-press="onPress08"></mui-cell>
            </mui-cell-group>
            <mui-dtpicker title="日期选择" :visible.sync="visible1" v-on:on-dismiss="onDismiss" v-on:on-ok="onOk1"></mui-dtpicker>
            <mui-dtpicker title="日期选择"  :visible.sync="visible2" :beginYear="1998" :endYear="2030" v-on:on-dismiss="onDismiss" v-on:on-ok="onOk2"></mui-dtpicker>
            <mui-dtpicker title="日期选择" :visible.sync="visible3" :value="dtValue3" :beginYear="1998" :endYear="2030" v-on:on-dismiss="onDismiss" v-on:on-ok="onOk3"></mui-dtpicker>
            <mui-dtpicker title="日期选择" :visible.sync="visible4" type='date' v-on:on-dismiss="onDismiss" v-on:on-ok="onOk4"></mui-dtpicker>
            <mui-dtpicker title="时间选择" :visible.sync="visible5" type='time' v-on:on-dismiss="onDismiss" v-on:on-ok="onOk5"></mui-dtpicker>
            <mui-dtpicker title="时间选择" :visible.sync="visible6" type='month'  :isCurrenttime='false' v-on:on-dismiss="onDismiss" v-on:on-ok="onOk6"></mui-dtpicker>
            <mui-dtpicker title="时间选择" :visible.sync="visible7" type='hour'  v-on:on-dismiss="onDismiss" v-on:on-ok="onOk7"></mui-dtpicker>
            <mui-dtpicker title="时段选择" :visible.sync="visible8" type='hour' :customData="{h:['上午','下午','晚上']}" :labels="['年', '月', '日', '时段','分']" v-on:on-dismiss="onDismiss" v-on:on-ok="onOk8" ></mui-dtpicker>
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'

export default {
    name: 'picker',
    mixins: [back],
    data () {
        return {
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
            visible7: false,
            visible8: false,
            value1: '请选择',
            value2: '请选择',
            value3: '请选择',
            value4: '请选择',
            value5: '请选择',
            value6: '请选择',
            value7: '请选择',
            value8: '请选择',
            dtValue3: '2015-10-10 10:10'

        }
    },
    methods: {
        onPress01 () {
            this.visible1 = true
        },
        onPress02 () {
            this.visible2 = true
        },
        onPress03 () {
            this.visible3 = true
        },
        onPress04 () {
            this.visible4 = true
        },
        onPress05 () {
            this.visible5 = true
        },
        onPress06 () {
            this.visible6 = true
        },
        onPress07 () {
            this.visible7 = true
        },
        onPress08 () {
            this.visible8 = true
        },
        onDismiss (e) {
            console.log('取消')
        },
        onOk1 (e, item) {
            this.value1 = item.join('-')
        },
        onOk2 (e, item) {
            this.value2 = item.join('-')
        },
        onOk3 (e, item) {
            this.value3 = item.join('-')
        },
        onOk4 (e, item) {
            this.value4 = item[0] + '年' + item[1] + '月' + item[2] + '日'
        },
        onOk5 (e, item) {
            this.value5 = item[3] + ':' + item[4]
        },
        onOk6 (e, item) {
            this.value6 = item[0] + '年' + item[1] + '月'
        },
        onOk7 (e, item) {
            this.value7 = item[0] + '年' + item[1] + '月' + item[2] + '日' + item[3] + '时'
        },
        onOk8 (e, item) {
            this.value7 = item.join('-')
        }

    }
}
</script>

<style>

</style>
