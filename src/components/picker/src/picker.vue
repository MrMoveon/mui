<template>
    <transition name="picker-fade">
    <div class="mui-picker" v-if="visible">
        <transition name="picker-move">
        <div class="mui-picker-wrap" v-if="visible">
            <div class="mui-picker-buttons">
                <span class="dismissText"@click="onDismiss">{{dismissText}}</span>
                <span class="title">{{title}}</span>
                <span class="okText" @click="onOk">{{okText}}</span>
                
            </div>
            <div class="mui-picker-inner">
                <div class="swiper-container mui-swiper-picker" :class="'mui-swiper-picker'+index" v-for="(col,index) in cols" :key="index">
                    <div class="swiper-wrapper" v-if="cascade">
                        <template v-if="index===0">
                            <div class="swiper-slide" v-for="(item,firstIndex) in data" :key="firstIndex">{{item.text}}</div>
                        </template>
                        <template v-if="index===1">
                            <div class="swiper-slide" v-for="(item,secondIndex) in data[pickerIndex0].children"  :key="secondIndex">{{item.text}}</div> 
                        </template>
                        <template v-if="index===2">
                            <div class="swiper-slide" v-for="(item,thirdIndex) in data[pickerIndex0].children[pickerIndex1].children"  :key="thirdIndex">{{item.text}}</div>
                        </template>
                    </div>
                    <div class="swiper-wrapper" else>
                        <template v-if="index===0">
                            <div class="swiper-slide" v-for="(item,firstIndex) in data[0]" :key="firstIndex">{{item.text}}</div>
                        </template>
                        <template v-if="index===1">
                            <div class="swiper-slide" v-for="(item,secondIndex) in  data[1]"  :key="secondIndex">{{item.text}}</div> 
                        </template>
                        <template v-if="index===2">
                            <div class="swiper-slide" v-for="(item,thirdIndex) in data[2]"  :key="thirdIndex">{{item.text}}</div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        </transition>
        <div class="mui-mask"></div>
        
    </div>
    </transition>
</template>
<script>
export default {
    name: 'mui-picker',
    props: {
        visible: Boolean,
        okText: {
            type: String,
            default: '确定'
        },
        dismissText: {
            type: String,
            default: '取消'
        },
        title: {
            type: String,
            default: ''
        },
        data: {
            type: Array,
            default: function () {
                return []
            }
        },
        cascade: {// 是否联动
            type: Boolean,
            default: false
        },
        cols: {// 列数
            type: Number,
            default: 3
        }
    },
    data () {
        return {
            pickerIndex0: 0,
            pickerIndex1: 0,
            pickerIndex2: 0
        }
    },
    watch: {
        visible (val) {
            if (val === true) {
                console.log(val)
                setTimeout(() => {
                    this.initPicker()
                }, 300)
            }
        }
    },
    mounted () {

    },
    methods: {
        initPicker () {
            var vm = this
            for (let i = 0; i < this.cols; i++) {
                vm['muiSwiperPicker' + i] = new Swiper('.mui-swiper-picker' + i, {
                    direction: 'vertical',
                    slidesPerView: 7,
                    observer: true,
                    freeMode: true,
                    freeModeSticky: true,
                    centeredSlides: true

                })
            }
            if (vm.cascade) { // 数据联动
                vm.muiSwiperPicker0.on('TransitionEnd', function (swiper) {
                    vm.pickerIndex0 = swiper.activeIndex

                    if (vm.muiSwiperPicker1) {
                        vm.muiSwiperPicker1.slideTo(0, 0, false)
                        vm.pickerIndex1 = 0
                    }
                    if (vm.muiSwiperPicker2) {
                        vm.muiSwiperPicker2.slideTo(0, 0, false)
                        vm.pickerIndex2 = 0
                    }
                })
                vm.muiSwiperPicker1 && vm.muiSwiperPicker1.on('TransitionEnd', function (swiper) {
                    vm.pickerIndex1 = swiper.activeIndex

                    if (vm.muiSwiperPicker2) {
                        vm.muiSwiperPicker2.slideTo(0, 0, false)
                        vm.pickerIndex2 = 0
                    }
                })
                vm.muiSwiperPicker2 && vm.muiSwiperPicker2.on('TransitionEnd', function (swiper) {
                    vm.pickerIndex2 = swiper.activeIndex
                })
            } else {
                // 当为1行的时候
                if (this.cols === 1) {
                    vm.muiSwiperPicker0.on('TransitionEnd', function (swiper) {
                        vm.pickerIndex0 = swiper.activeIndex
                    })
                } else if (this.cols === 2) {
                    vm.muiSwiperPicker0.on('TransitionEnd', function (swiper) {
                        vm.pickerIndex0 = swiper.activeIndex
                    })
                    vm.muiSwiperPicker1.on('TransitionEnd', function (swiper) {
                        vm.pickerIndex1 = swiper.activeIndex
                    })
                }
            }
        },
        getValue () {
            var result = []
            var vm = this
            var picker0, picker1, picker2
            // 联动的值
            if (vm.cascade) {
                for (let i = 0; i < vm.cols; i++) {
                    switch (i) {
                    case 0:
                        picker0 = this.data[this.pickerIndex0]
                        result.push({value: picker0.value, text: picker0.text})
                        break
                    case 1:
                        picker1 = picker0.children[vm.pickerIndex1]
                        result.push({value: picker1.value, text: picker1.text})
                        break
                    case 2:
                        picker2 = picker1.children ? picker1.children[vm.pickerIndex2] : {value: '', text: ''}
                        result.push({value: picker2.value, text: picker2.text})
                        break
                    }
                }
            } else {
                if (vm.data.length === 1) {
                    picker0 = this.data[0][this.pickerIndex0]
                    result.push({value: picker0.value, text: picker0.text})
                }
                if (vm.data.length === 2) {
                    picker0 = this.data[0][this.pickerIndex0]
                    picker1 = this.data[1][this.pickerIndex1]
                    result.push({value: picker0.value, text: picker0.text})
                    result.push({value: picker1.value, text: picker1.text})
                }
                if (vm.data.length === 3) {
                    picker0 = this.data[0][this.pickerIndex0]
                    picker1 = this.data[1][this.pickerIndex1]
                    picker2 = this.data[2][this.pickerIndex2]
                    result.push({value: picker0.value, text: picker0.text})
                    result.push({value: picker1.value, text: picker1.text})
                    result.push({value: picker2.value, text: picker2.text})
                }
            }
            return result
        },
        onDismiss (e) {
            this.$emit('update:visible', false)
            this.$emit('on-dismiss', e)
        },
        onOk (e) {
            this.$emit('on-ok', e, this.getValue())
        }
    }
}
</script>
<style lang="less">
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.mui-picker {
    position: absolute;
    z-index: 9998;
    transition: all .3s ease;
    .mui-mask {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10000;
        background: rgba(0, 0, 0, 0.4);
    }
}

.mui-picker-wrap {
    position: fixed;
    left: 0;
    right:0;
    bottom:0;
    z-index: 10001;
    background: #fff;
    width: 100%;
    height: 560/@rem;
    transition: all .3s ease;
}

.mui-picker-inner {
    height:480/@rem;
    display: flex;
    flex-direction: row;
    .mui-swiper-picker{
        flex: 1;
        overflow: hidden;
        &:before{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top:-40/@rem;
            background:rgba(255,255,255,0.7);
            height: 50%;
            width: 100%;
            border-bottom: 1px solid #e8e8e8;
            z-index: 2;
            user-select:none;
        }
        &:after{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom:-40/@rem;
            background:rgba(255,255,255,0.7);
            height: 50%;
            width: 100%;
            border-top: 1px solid #e8e8e8;
            z-index: 2;
            user-select:none;
        }
        .swiper-slide{
            display: flex;
            height: 80/@rem;
            justify-content: center;
            align-items: center;
            .font-dpr(14px);
        }
    }
}

.mui-picker-buttons {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80/@rem;
    padding:0 30/@rem;
    .sideline(bottom,#eee);
    .okText{
         color:@color-blue;
        .font-dpr(12px);
    }
    .title{
        .font-dpr(14px);
    }
    .dismissText{
         color: #999;
        .font-dpr(12px);
    }
}

.picker-fade-enter,
.picker-fade-leave-to {
    opacity: 0
}

.picker-move-enter,
.picker-move-leave-to {
    transform: translateY(100%)
}
</style>
