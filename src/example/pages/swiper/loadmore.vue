<template>
    <mui-page>
        <mui-header mode='light' fixed title="ScrollView 滚动视图">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
        
        <mui-scroll-view class="loadmore-view" ref="loadmoreDom" name="loadmore" direction="vertical" slidesPerView="auto"  style="height:100%">
            <mui-scroll-view-item style="height:auto;" >
                 <div name="header" class="mui-renderHeader" ref="header">
                
                    <div class="mui-renderHeader-loading" v-show="refresh">
                        <mui-spinner type="default-dark" size="sm"></mui-spinner> 
                    </div>
                    <span class="mui-renderHeader-text">{{pullText}}</span>
                    <!-- <span class="mui-renderHeader-end status" v-if="pulldownStatus==='end'">刷新完毕</span> -->
                </div>
                <mui-media-cell v-for="(item,index) in scrollData" :key="index" radius :img="item.img" :title="item.title" :desc="item.desc"></mui-media-cell>
                <div class="mui-renderFooter"></div>
            </mui-scroll-view-item>
        </mui-scroll-view>
            
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'slide',
    mixins: [back],
    data () {
        return {
            scrollData: [
                {
                    img: require('../../../assets/images/thumb.jpg'),
                    title: '猜您喜欢',
                    desc: '来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧'
                },
                {
                    img: require('../../../assets/images/thumb.jpg'),
                    title: '猜您喜欢',
                    desc: '来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧'
                },
                {
                    img: require('../../../assets/images/thumb.jpg'),
                    title: '猜您喜欢',
                    desc: '来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧'
                },
                {
                    img: require('../../../assets/images/thumb.jpg'),
                    title: '猜您喜欢',
                    desc: '来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧'
                },
                {
                    img: require('../../../assets/images/thumb.jpg'),
                    title: '猜您喜欢',
                    desc: '来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧'
                },
                {
                    img: require('../../../assets/images/thumb.jpg'),
                    title: '猜您喜欢',
                    desc: '来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧'
                },
                {
                    img: require('../../../assets/images/thumb.jpg'),
                    title: '猜您喜欢',
                    desc: '来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧'
                },
                {
                    img: require('../../../assets/images/thumb.jpg'),
                    title: '猜您喜欢',
                    desc: '来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧'
                },
                {
                    img: require('../../../assets/images/thumb.jpg'),
                    title: '猜您喜欢',
                    desc: '来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧'
                },
                {
                    img: require('../../../assets/images/thumb.jpg'),
                    title: '猜您喜欢',
                    desc: '来听听和【不爱你】一样好听的歌曲吧来听听和【不爱你】一样好听的歌曲吧'
                }
            ],
            pull: '',
            pulldown: false, // 是否下拉刷新
            refresh: false, // 是否正在刷新
            pullup: false,
            pullText: '下拉刷新',
            pulldownStatus: '',
            pulldownDistance: 0
        }
    },
    mounted () {
        setTimeout(() => {
            this.$refs.loadmoreDom.done(this._pulldown())
        }, 1000)
    },

    methods: {
        _pulldown () {
            var vm = this
            var scroll = vm.$refs.loadmoreDom.getCurrentObj()
            var header = vm.$refs.header
            var headerHeight = header.offsetHeight
            vm.pulldownDistance = headerHeight

            scroll.on('TouchStart', function (swiper, event) {

            })
            scroll.on('TouchMove', function (swiper, event) {
                if (swiper.translate > vm.pulldownDistance && !vm.pulldown) {
                    vm.pulldown = true
                }
                if (swiper.translate < vm.pulldownDistance) {
                    vm.pulldown = false
                }
                if (swiper.translate >= headerHeight && !vm.refresh) {
                    vm.pullText = '立即释放刷新'
                }
            })
            scroll.on('TouchEnd', function (swiper, event) {
                if (vm.pulldown) {
                    setTimeout(() => {
                        swiper.setWrapperTranslate(headerHeight)
                        vm.pullText = '正在刷新'

                        if (!vm.refresh) {
                            vm.refreshCallback()
                        }
                    }, 10)
                }
                // if (vm.pull === 'down' && vm.refresh) {
                //     setTimeout(() => {
                //         swiper.setWrapperTranslate(headerHeight)
                //     }, 1)
                // }
            })
        },
        refreshCallback () {
            this.refresh = true
            // 获取获取成功
            this.loadData().then((reject) => {
                var scroll = this.$refs.loadmoreDom.getCurrentObj()
                this.$refs.loadmoreDom.setWrapperTransition()
                setTimeout(() => {
                    this.pullText = '加载成功'
                    scroll.setWrapperTranslate(0)
                    setTimeout(() => {
                        this.$refs.loadmoreDom.clearWrapperTransition()
                        console.log('complete')
                        this.clearStatus()
                    }, 500)
                }, 10)
            })
            // setTimeout(() => {
            //     var scroll = this.$refs.loadmoreDom.getCurrentObj()
            //     this.$refs.loadmoreDom.setWrapperTransition()

            //     setTimeout(() => {
            //         this.pullText = '加载成功'
            //         scroll.setWrapperTranslate(0)
            //         setTimeout(() => {
            //             this.$refs.loadmoreDom.clearWrapperTransition()
            //             console.log('complete')
            //             this.clearStatus()
            //         }, 500)
            //     }, 10)
            // }, 2000)
        },
        loadData () {
            return new Promise((resolve, reject) => {
                var result = Math.round(Math.random())

                setTimeout(() => {
                    if (result) {
                        resolve(result)
                    } else {
                        reject(result)
                    }
                }, 2000)
            })
        },
        clearStatus () {
            this.pullText = '下拉刷新'
            this.refresh = false
            this.pull = ''
            this.pulldown = false
        },
        returnTop () {

        }
    }
}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';

.mui-renderHeader{
    position: absolute;
    left: 0;
    right:0;
    top:-88/@rem;
    height: 88/@rem;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
   // background:#ccc;
    text-align: center;
    z-index: 1;
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
}
.mui-renderHeader-text{
    .font-dpr(14px);
}
.mui-renderHeader-start{
   
}
.mui-renderHeader-loading{
   
}
.mui-renderHeader-end{
   
}
.loadmore-view{
    z-index: 2;
}
</style>
