<template>
    <div :id="name" class="swiper-container  loadmore-view" ref="loadmore">
        <div class="swiper-wrapper" ref="wrapper">
            <div class="swiper-slide mui-view-items" style="height:auto"  ref="dom">
                <div name="header" class="mui-renderHeader" ref="header">
                    <div class="mui-renderHeader-loading" v-show="down.pulldownLoading">
                        <mui-spinner type="default-dark" size="sm"></mui-spinner> 
                    </div>
                    <span class="mui-renderHeader-text" v-show="down.pulldownLoading">{{down.contentrefresh}}</span>
                </div>
                <slot name="loadmore"></slot>
                <!-- loading -->
                <div class="mui-renderFooter"  ref="footer">
                    <template v-if="up.isOpen">
                        <div class="bg" v-show="up.pullupLoading">
                            <div class="mui-renderHeader-loading">
                                <mui-spinner type="default-dark" size="sm"></mui-spinner> 
                            </div>
                            <span class="mui-renderHeader-text">{{up.contentrefresh}}</span>
                        </div>
                    </template>
                    <template v-else>
                        <div class="bg">
                            <span class="mui-renderHeader-text">{{up.contentno}}</span>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="swiper-scrollbar" v-if="this.scrollbar"></div>
    </div>
   
</template>
<script>
export default {
    name: 'mui-load-more',
    props: {
        refsName: {
            type: String,
            default: 'loadmoreDom' + Date.now()
        },
        scrollView: {
            type: String,
            default: 'scrollView' + Date.now()
        },
        name: {
            type: String,
            default: 'id' + Math.floor(Math.random() * 10000)
        },
        scrollbar: {
            type: String,
            default: '.swiper-scrollbar'
        },

        direction: {
            type: String,
            default: 'vertical'
        },
        slidesPerView: {
            type: [Number, String],
            default: 'auto'
        },
        freeMode: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            up: {
                isOpen: true,
                pullup: false, // 是否上拉加载
                pullupLoading: false, // 是否正在加载
                contentrefresh: '加载中...',
                contentno: '没有更多数据了'
            },
            down: {
                isOpen: true,
                pulldown: false, // 是否上拉加载
                pulldownLoading: false, // 是否正在加载
                contentrefresh: '刷新中...'
            }
        }
    },
    methods: {
        _pullup () {
            var vm = this
            var down = vm.down
            var up = vm.up
            var scroll = vm.getCurrentObj()
            scroll.on('TouchMove', function (swiper, event) {
                if (up.isOpen === false) {
                    vm.resetUpState()
                    return false
                }
                if (!up.pullupLoading) {
                    if (swiper.translate < 0) {
                        up.pullup = true
                    }
                }
            })

            scroll.on('TransitionEnd', function (swiper, event) {
                if (up.isOpen && up.pullup && !down.pulldownLoading) {
                    var scrollHeight = vm.$refs.dom.offsetHeight - vm.$refs.loadmore.offsetHeight
                    if (swiper.translate < -scrollHeight + 50 && !up.pullupLoading && up.pullup) {
                        up.pullupLoading = true
                        vm.upCallback(swiper)
                    }
                }
            })
        },
        _pulldown () {
            var vm = this
            var scroll = vm.getCurrentObj()
            var down = vm.down
            var up = vm.up
            var offsetH = vm.$refs.header.offsetHeight
            scroll.on('TouchMove', function (swiper, event) {
                //
                down.pulldown = false
                if (down.isOpen === false) {
                    vm.resetDownState()
                    return false
                }
                if (!down.pulldownLoading) {
                    if (swiper.translate > offsetH) {
                        down.pulldown = true
                    }
                }
            })

            scroll.on('TouchEnd', function (swiper, event) {
                // 正在加载的时候，拖动释放

                if (down.pulldownLoading) {
                    if (swiper.translate > offsetH) {
                        setTimeout(() => {
                            swiper.setWrapperTranslate(offsetH)
                        }, 0)
                    }
                }
                if (down.isOpen && down.pulldown && !up.pullupLoading) {
                    down.pulldownLoading = true
                    setTimeout(() => {
                        swiper.setWrapperTranslate(offsetH)
                    }, 0)
                    vm.downCallback(swiper)
                }
            })
        },
        downCallback (swiper) {
            this.$emit('on-refresh', swiper)
        },
        upCallback (swiper) {
            this.$emit('on-infinite', swiper)
        },
         // 重置上拉加载状态
        resetState () {
            this.resetUpState()
            this.resetDownState()
        },
        resetUpState () {
            this.up.pullupLoading = false
            this.up.pullup = false
        },
        resetDownState () {
            this.down.pulldownLoading = false
            this.down.pulldown = false
        },
        // 设置是否上拉加载
        setPullupState (flag) {
            this.up.isOpen = flag
        },
        // 设置是否下拉刷新
        setPulldownState (flag) {
            this.down.isOpen = flag
        },
        // 返回顶部
        returnTop (swiper) {
            var scroll = this.getCurrentObj()
            scroll.setWrapperTransition(300)
            setTimeout(() => {
                scroll.setWrapperTranslate(0)
            }, 0)
        },
        initScrollview () {
            this['scrollview' + this.name] = new Swiper('#' + this.name, {
                freeModeMomentumVelocityRatio: 2,
                scrollbar: this.scrollbar,
                direction: this.direction,   // 滚动方向
                slidesPerView: this.slidesPerView, // 设置容器能够同时显示的item数量
                freeMode: this.freeMode, // 默认为false，普通模式：滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，会根据惯性滑动且不会贴合
                roundLengths: true, // 防止文字模糊
                observer: true,
                observeParents: true
            })
        },
        update () {
            // 更新操作
            this['scrollview' + this.name].update()
        },
        // 获取swiper对象
        getCurrentObj () {
            return this['scrollview' + this.name]
        },
        // 获取当前项的索引
        getActiveIndex () {
            return this['scrollview' + this.name].activeIndex
        },
        // 是否在过渡
        getAnimating () {
            return this['scrollview' + this.name].animating
        },
        // 获取wrapper位移值
        getWrapperTranslate () {
            return this['scrollview' + this.name].getWrapperTranslate()
        },
        // 设置wrapper移动动画时间
        setWrapperTransition () {
            this.$refs.wrapper.style.transitionDuration = '300ms'
        },
        // 清除wrapper移动动画时间
        clearWrapperTransition () {
            this.$refs.wrapper.style.transitionDuration = '0ms'
        },
        // 父组件执行回调
        done (callback) {
            if (callback) callback || callback()
            return false
        },
        // getHeight () {
        //     return document.getElementById(this.name).offsetHeight
        // },
        slideTo (index, speed, runCallbacks) {
            var _index = index
            var _speed
            var _callback
            /**
             *
             *  mySwiper.slideTo(index, speed, runCallbacks)
             *  Swiper切换到指定slide。
             *  index:必选，num，指定将要切换到的slide的索引。
             *  speed:可选，num(单位ms)，切换速度
             *  runCallbacks:可选，boolean，设置为false时不会触发onSlideChange回调函数。
             */
            if (arguments.length === 1) {
                _speed = 0
                _callback = false
            }
            if (arguments.length === 2) {
                _speed = speed
                _callback = false
            }
            if (arguments.length === 3) {
                _speed = speed
                _callback = runCallbacks
            }
            this['scrollview' + this.name].slideTo(_index, _speed, _callback)
        }
    }
}
</script>
<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.loadmore-view .swiper-slide{
    width: 100%;
}
.mui-renderHeader,.mui-renderFooter{
    position: absolute;
    left: 0;
    right:0;
    height: 88/@rem;
    .status{
        position: absolute;
        left: 0;
        right:0;
        bottom:0;
        top:0;
        display: flex;
        align-items: center;
        justify-content: center;
    
    }
    
    .bg{
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        background:#fff;
        text-align: center;
        z-index: 1;
        widows: 100%;
        height: 100%;
        background: #f5f5f9;
    }
}
.mui-renderHeader{
    top:-88/@rem;
     display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
}
.mui-renderFooter{
    position: static;
    
}
.mui-renderHeader-text{
    .font-dpr(14px);
}
</style>
