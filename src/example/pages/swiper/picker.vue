<template>
    <mui-page>
        <mui-header mode='light' fixed title="Picker">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-wing-blank>
				<div class="sub-title">
					一级
				</div>
			</mui-wing-blank>
            <mui-white-space></mui-white-space>
           <mui-cell-group>
               <mui-cell title="地区选择" value='请选择' v-on:on-press="onPress01"></mui-cell>
           </mui-cell-group>
           <!-- 3级联动 -->
           <!-- <mui-picker title="地区选择" :data="cityData" :cols='3' cascade v-on:on-dismiss="onDismiss" v-on:on-ok="onOk"></mui-picker> -->
           <!-- 2级联动 -->
           <!-- <mui-picker title="地区选择" :data="cityData2" :cols='2' cascade v-on:on-dismiss="onDismiss" v-on:on-ok="onOk"></mui-picker>  -->
           <!-- 1级不联动 -->
            <mui-picker title="地区选择" :visible.sync="visible" :data="name" :cols='1' v-on:on-dismiss="onDismiss" v-on:on-ok="onOk"></mui-picker>
            <!-- 2级不联动 -->
            <!-- <mui-picker title="地区选择" :data="seasons" :cols='2' v-on:on-dismiss="onDismiss" v-on:on-ok="onOk"></mui-picker> -->
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
            visible: false,
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
            this.visible = true
        },
        onDismiss (e) {
            console.log('取消')
        },
        onOk (e, value) {
            console.log(value)
        }
    }
}
</script>

<style>

</style>
