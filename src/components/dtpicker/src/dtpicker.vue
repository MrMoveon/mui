<template>
    <transition name="picker-fade">
    <div class="mui-picker" v-if="visible">
        
        <div class="mui-picker-wrap mui-dtpicker-wrap" :class="{'show':dtPickerVisible}">
            <div class="mui-picker-buttons">
                <span class="dismissText"@click="onDismiss">{{dismissText}}</span>
                <span class="title">{{title}}</span>
                <span class="okText" @click="onOk">{{okText}}</span>
            </div>
            <div class="mui-picker-labels">
                <span v-for="(item,index) in currentLabels" :key="index">{{item}}</span>
            </div>
            <div class="mui-picker-inner">
                <div class="swiper-container mui-swiper-picker" :class="setClass(index)" v-for="(col,index) in dateData" :key="index">
                    <div class="swiper-wrapper">
                       <div class="swiper-slide" v-for="(item,k) in dateData[index]" :key="k">{{item}}</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mui-mask" @click="toggle"></div>
        
    </div>
    </transition>
</template>
<script>
export default {
    name: 'mui-dtpicker',
    props: {
        value: {
            type: String,
            default: ''
        },
        labels: {
            type: Array,
            default: function () {
                return ['年', '月', '日', '时', '分']
            }
        },
        isCurrenttime: {// 显示当前日期
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: 'datetime'// datetime,date,time,month,hour
        },
        beginYear: {
            type: Number,
            default: 2010
        },
        endYear: {
            type: Number,
            default: 2020
        },
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
        customData: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },
    data () {
        return {
            yearArea: [],
            monthArea: [],
            dayArea: [],
            hourArea: [],
            minArea: [],
            dtPickerVisible: this.visible,
            dateData: [],
            currentLabels: this.labels,
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth() + 1,
            currentDay: new Date().getDate(),
            currentHour: new Date().getHours(),
            currentMin: new Date().getMinutes()
        }
    },
    watch: {
        visible (val) {
            if (val === true) {
                setTimeout(() => {
                    this.initdtPicker()
                }, 100)
            }
        }
    },
    mounted () {
        // 合并传递的options

    },
    methods: {
        /**
         * 初始化数据，
         */
        initdtPicker () {
            this.colLable = []// y,m,d,h,min
            this.yearArea = []
            this.monthArea = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
            this.dayArea = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28']
            this.hourArea = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
            this.minArea = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']
            this.dtPickerSwitch = true
            // 第一次不执行onTransitionEnd函数方法
            this.dtonce = false
            setTimeout(() => {
                this.dtonce = true
            }, 1000)
            var vm = this
            var num = 0
            var newLable = []
            // 设置year的数据
            var tempYear = []
            for (var i = this.beginYear; i <= this.endYear; i++) {
                tempYear.push(String(i))
            }
            this.yearArea = tempYear

            switch (this.type) {
            case 'datetime':
                num = 5
                this.dateData = []
                this.dateData.push(this.yearArea, this.monthArea, this.dayArea, this.hourArea, this.minArea)
                // 实例化swiper
                setTimeout(() => {
                    this.swiper(num)
                    this.monthCallback()
                    this.dtPickerVisible = true
                }, 20)

                break
            case 'date':
                num = 3
                newLable = [this.labels[0], this.labels[1], this.labels[2]]
                this.currentLabels = newLable
                this.dateData = []
                this.dateData.push(this.yearArea, this.monthArea, this.dayArea)
                // 实例化swiper
                setTimeout(() => {
                    this.swiper(num)
                    this.monthCallback()
                    this.dtPickerVisible = true
                }, 20)

                break
            case 'time':
                num = 2
                newLable = [this.labels[3], this.labels[4]]
                this.currentLabels = newLable
                this.dateData = []
                this.dateData.push(this.hourArea, this.minArea)
                // 实例化swiper
                setTimeout(() => {
                    this.swiper(num)
                    this.dtPickerVisible = true
                }, 20)

                break
            case 'month':
                num = 2
                newLable = [this.labels[0], this.labels[1]]
                this.currentLabels = newLable
                this.dateData = []
                this.dateData.push(this.yearArea, this.monthArea)
                // 实例化swiper
                setTimeout(() => {
                    this.swiper(num)
                    this.dtPickerVisible = true
                }, 20)

                break
            case 'hour':
                num = 4

                if (this.customData.h.length) {
                    this.hourArea = this.customData.h
                }

                newLable = [this.labels[0], this.labels[1], this.labels[2], this.labels[3]]
                this.currentLabels = newLable
                this.dateData = []
                this.dateData.push(this.yearArea, this.monthArea, this.dayArea, this.hourArea)

                // 实例化swiper
                setTimeout(() => {
                    this.swiper(num)
                    this.monthCallback()
                    this.dtPickerVisible = true
                }, 20)

                break
            }
        },
        /**
         *实例化swiper,滑动停止设置值
         */
        swiper (num) {
            var vm = this
            var dateData = vm.dateData
            for (let i = 0; i < num; i++) {
                vm['muiSwiperDtPicker' + vm.colLable[i]] = new Swiper('.mui-swiper-dtpicker-' + vm.colLable[i], {
                    direction: 'vertical',
                    slidesPerView: 7,
                    slideToClickedSlide: true,
                    observer: true,
                    observeParents: true,
                    centeredSlides: true,
                    freeMode: true,
                    freeModeSticky: true,
                    onTransitionEnd: function (swiper) {
                        console.log(i)
                        if (vm.customData.h) {
                           // swiper.slideTo(0, 0, false)
                            return
                        }
                        if (vm.dtonce) {
                            switch (vm.colLable[i]) {
                            case 'y':
                                vm.currentYear = dateData[i][swiper.activeIndex]
                                break
                            case 'm':
                                vm.currentMonth = dateData[i][swiper.activeIndex]
                                break
                            case 'd':
                                vm.currentDay = dateData[i][swiper.activeIndex]
                                break
                            case 'h':
                                vm.currentHour = dateData[i][swiper.activeIndex]
                                break
                            case 'min':
                                vm.currentMin = dateData[i][swiper.activeIndex]
                                break
                            default:
                                break
                            }
                        } else { // 打开的时候执行一次， 跳转到当前时间
                            console.log(dateData[i])
                            var cDate
                            if (vm.value) {
                                cDate = new Date(vm.value)
                                vm.setDate(cDate, vm)
                            }
                             // 不跳到当前日期
                            if (vm.isCurrenttime) {
                                switch (vm.colLable[i]) {
                                case 'y':
                                    swiper.slideTo(dateData[i].indexOf(String(vm.currentYear)), 0, false)
                                    break
                                case 'm':
                                    swiper.slideTo(dateData[i].indexOf(vm.addZero(vm.currentMonth)), 0, false)
                                    break
                                case 'd':
                                    vm.dayChange(vm.currentYear, vm.currentDay)
                                    setTimeout(() => {
                                        swiper.slideTo(dateData[i].indexOf(vm.addZero(vm.currentDay)), 0, false)
                                    }, 20)

                                    break
                                case 'h':

                                    swiper.slideTo(dateData[i].indexOf(vm.addZero(vm.currentHour)), 0, false)
                                    break
                                case 'min':
                                    swiper.slideTo(dateData[i].indexOf(vm.addZero(vm.currentMin)), 0, false)
                                    break
                                default:
                                    break
                                }
                            } else {
                                cDate = new Date(vm.beginYear, 1, 1)
                                vm.setDate(cDate, vm)
                            }
                        }
                    }

                })
            }
        },
        /**
         * 月份滑动停止的回调
         */
        monthCallback () {
            var vm = this
           // console.log(new Date(new Date(this.currentYear, this.currentMonth, 1) - 1).getDate())
            vm.muiSwiperDtPickerm.on('TransitionEnd', function (swiper) {
                vm.dayChange(vm.currentYear, swiper.activeIndex + 1)
            })
        },
        /**
         * 第一次打开设置时间
         */
        setDate (cDate, vm) {
            vm.currentYear = cDate.getFullYear()
            vm.currentMonth = cDate.getMonth()
            vm.currentDay = cDate.getDate()
            vm.currentHour = cDate.getHours()
            vm.currentMin = cDate.getMinutes()
        },
        /**
         * 月份改变，日期的个数改变
         */
        dayChange (currentYear, month) {
            var vm = this
            // 一个月有多少天，也就是下个月的第一天减去1ms的那天
            var day = new Date(new Date(currentYear, month, 1) - 1).getDate()
            var oldLength = vm.dayArea.length
            if (oldLength < day) {
                while (vm.dayArea.length < day) {
                    vm.dayArea.push(String(parseInt(vm.dayArea.length) + 1))
                }
            } else if (oldLength > day) {
                while (vm.dayArea.length > day) {
                    vm.dayArea.pop()
                }
            } else {

            }
        },
        /**
         * 获取值
         */
        getValue () {
            var result = []
            result.push(this.currentYear)
            result.push(this.currentMonth)
            result.push(this.currentDay)
            result.push(this.currentHour)
            result.push(this.currentMin)
            return result
        },
        onDismiss (e) {
            this.toggle()
            this.$emit('on-dismiss', e)
        },
        onOk (e) {
            this.toggle()
            this.$emit('on-ok', e, this.getValue())
        },
        toggle () {
            if (this.dtPickerSwitch) {
                this.dtPickerSwitch = false
                this.dtPickerVisible = !this.dtPickerVisible
                setTimeout(() => {
                    this.$emit('update:visible', false)
                }, 100)
            }
        },
        setClass (index) { // 设置循环日期时间的class,用与调用swiper
            var data = this.dateData[index]
            var length = data.length - 1
            var endValue = parseInt(data[length])
            if (data[length].length === 4) {
                this.colLable.push('y')
                return 'mui-swiper-dtpicker-y'
            } else if (endValue === 12) {
                this.colLable.push('m')
                return 'mui-swiper-dtpicker-m'
            } else if (endValue === 23) {
                this.colLable.push('h')
                return 'mui-swiper-dtpicker-h'
            } else if (endValue === 59) {
                this.colLable.push('min')
                return 'mui-swiper-dtpicker-min'
            } else if (endValue > 27 && endValue < 32) {
                this.colLable.push('d')
                return 'mui-swiper-dtpicker-d'
            }
        },
        addZero (val) {
            var v = ''
            if (val < 10) {
                v = '0' + val
            } else {
                v = String(val)
            }
            return v
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
    transition: all .1s ease;
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
    transform: translate3d(0,100%,0);
    &.show{
        transform: translate3d(0,0,0);
    }
    &.mui-dtpicker-wrap {
        height: 640/@rem;
    }
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
            pointer-events:none;
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
            pointer-events:none;
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
.mui-picker-labels{
    height: 80/@rem;
    display: flex;
    justify-content: center;
    align-items:center;
    text-align: center;
    .sideline(bottom,#eee);
    span{
        flex:1;
        color: #999;
    }
}

</style>
