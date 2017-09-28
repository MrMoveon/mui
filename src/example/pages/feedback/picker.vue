<template>
    <mui-page>
        <mui-header mode='light' fixed title="Picker">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank>
				<div class="sub-title">
					基本
				</div>
			</mui-wing-blank>
            <mui-white-space></mui-white-space>
           <mui-cell-group>
               <mui-cell title="地区选择" :value='value1' v-on:on-press="onPress01"></mui-cell>
               <mui-cell title="季节选择(不联动)" :value='value2' v-on:on-press="onPress02"></mui-cell>
               <mui-cell title="地区选择(联动)" :value='value3' v-on:on-press="onPress03"></mui-cell>
                <mui-cell title="地区选择（三级）" :value='value4' v-on:on-press="onPress04"></mui-cell>
           </mui-cell-group>
          
          
           <!-- 1级不联动 -->
            <mui-picker title="地区选择" :visible.sync="visible1" :data="name" :cols='1' v-on:on-dismiss="onDismiss" v-on:on-ok="onOk1"></mui-picker>
            <!-- 2级不联动 -->
            <mui-picker title="季节选择" :visible.sync="visible2" :data="seasons" :cols='2' v-on:on-dismiss="onDismiss" v-on:on-ok="onOk2"></mui-picker>
            <!-- 2级联动 -->
           <mui-picker title="地区选择" :visible.sync="visible3" :data="cityData2" :cols='2' cascade v-on:on-dismiss="onDismiss" v-on:on-ok="onOk3"></mui-picker>
            <!-- 3级联动 -->
           <mui-picker title="地区选择" :visible.sync="visible4" :data="cityData" :cols='3' cascade v-on:on-dismiss="onDismiss" v-on:on-ok="onOk4"></mui-picker>
           
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
import cityData3 from './data/cityData-3'
import cityData2 from './data/cityData'

export default {
    name: 'picker',
    mixins: [back],
    data () {
        return {
            visible1: false,
            visible2: false,
            visible3: false,
            visible4: false,
            value1: '请选择',
            value2: '请选择',
            value3: '请选择',
            value4: '请选择',
            cityData: cityData3,
            cityData2: cityData2,
            name: [
                [
                    {
                        value: '130200',
                        text: '唐山市'
                    }, {
                        value: '130300',
                        text: '秦皇岛市'
                    }, {
                        value: '130400',
                        text: '邯郸市'
                    }, {
                        value: '130500',
                        text: '邢台市'
                    }, {
                        value: '130600',
                        text: '保定市'
                    }, {
                        value: '130700',
                        text: '张家口市'
                    }, {
                        value: '130800',
                        text: '承德市'
                    }
                ]
            ],
            seasons: [
                [
                    {
                        value: '2013',
                        text: '2013'
                    },
                    {
                        value: '2014',
                        text: '2014'
                    }
                ],
                [
                    {
                        value: '春',
                        text: '春'
                    },
                    {
                        value: '夏',
                        text: '夏'
                    }
                ]
            ]
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
        onDismiss (e) {
            console.log('取消')
        },
        onOk1 (e, item) {
            this.value1 = item[0].text
        },
        onOk2 (e, item) {
            this.value2 = item[0].text + ',' + item[1].text
        },
        onOk3 (e, item) {
            this.value3 = item[0].text + ',' + item[1].text
        },
        onOk4 (e, item) {
            this.value4 = item[0].text + ',' + item[1].text + ',' + item[2].text
        }
    }
}
</script>

<style>

</style>
