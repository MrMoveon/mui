<template>
    <div :id="name" class="swiper-container mui-scrollview">
        <slot name="header"></slot>
        <div class="swiper-wrapper" ref="wrapper">
            <slot></slot>
        </div>
        <div class="swiper-scrollbar" v-if="this.scrollbar"></div>
    </div>
</template>

<script>

export default {
    name: 'mui-scroll-view',
    props: {
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
            default: 'horizontal'
        },
        slidesPerView: {
            type: [Number, String],
            default: 3
        },
        freeMode: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {

        }
    },
    mounted () {
        setTimeout(() => {
            this.initScrollview()
        }, 20)
    },
    beforeDestroy () {
        this['scrollview' + this.name].destroy(false)
    },
    methods: {
        initScrollview () {
            this['scrollview' + this.name] = new Swiper('#' + this.name, {
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
.mui-scrollview {
    width: 10rem;
    height: 100%;
}
.swiper-container-vertical > .swiper-scrollbar{
    width: 5/@rem;
    right:3/@rem;
}
.swiper-scrollbar{
    background: transparent;
    
}
</style>
