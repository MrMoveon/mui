<template>
    <mui-page>
        <mui-header mode='light' fixed title="ScrollView 滚动视图">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
        
        <mui-scroll-view class="loadmore-view" ref="loadmoreDom" name="loadmore" direction="vertical" slidesPerView="auto"  style="height:100%">
            <mui-scroll-view-item style="height:auto;" class="scroll-view-height">
                 <div name="header" class="mui-renderHeader" ref="header">
                    <div class="mui-renderHeader-loading" v-show="pulldownRefresh">
                        <mui-spinner type="default-dark" size="sm"></mui-spinner> 
                    </div>
                    <span class="mui-renderHeader-text">{{pulldownText}}</span>
                </div>
                <mui-cell-group>
                    <mui-media-cell v-for="(item,index) in scrollData" :key="index" radius :img="item.img" :title="item.title" :desc="item.desc"></mui-media-cell>
                </mui-cell-group>
               <div class="mui-renderFooter"  ref="footer">
                    <div class="mui-renderHeader-loading" v-show="pullupLoading">
                        <mui-spinner type="default-dark" size="sm"></mui-spinner> 
                    </div>
                    <span class="mui-renderHeader-text">{{pullupText}}</span>
                </div>
            </mui-scroll-view-item>
        </mui-scroll-view>
            
        </mui-page-container>
    </mui-page>
</template>

<script>
import back from '@/mixins/back'
export default {
    name: 'loadmore',
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
                }
            ],
            data2: [],
            pull: '',
            pulldown: false, // 是否下拉刷新
            pulldownRefresh: false, // 是否正在刷新
            pulldownText: '', // 刷新显示文本
            pulldownDistance: 0, // 偏移值

            pullup: false, // 是否上拉加载
            pullupLoading: false, // 是否正在加载
            pullupText: '',     // 加载显示文本
            pullupDistance: 0, // 偏移值

            up: {
                contentup: '上拉加载更多',
                contentover: '释放立即加载',
                contentrefresh: '正在加载...'
            },
            down: {
                contentdown: '下拉可以刷新',
                contentover: '释放立即刷新',
                contentrefresh: '正在刷新...'
            }
        }
    },
    mounted () {
        this.data2 = this.scrollData
        this.initloadmore()
        console.log(this)
    },

    methods: {
        initloadmore () {
            this.pulldownText = this.down.contentdown
            this.pullupText = this.up.contentup
            setTimeout(() => {
                this.$refs.loadmoreDom.done(this._pulldown())
                this.$refs.loadmoreDom.done(this._pullup())
            }, 200)
        },
        _pullup () {
            var vm = this
            var scroll = vm.$refs.loadmoreDom.getCurrentObj()
            var header = vm.$refs.header
            var headerHeight = header.offsetHeight
            vm.pullupDistance = headerHeight

            scroll.on('TouchMove', function (swiper, event) {
                if (swiper.isEnd) {
                    if (swiper.translate < -vm.pullupDistance && !vm.pullup) {
                        vm.pullup = true
                    }
                }

                if (!swiper.isEnd) {
                    vm.pullup = false
                }
                console.log(vm.pullup, swiper.translate, -vm.pullupDistance)
                // 更改底部加载文字
                var diff = swiper.height + Math.abs(swiper.translate)
                console.log(diff, document.querySelector('.scroll-view-height').offsetHeight)
                if (diff > document.querySelector('.scroll-view-height').offsetHeight && !vm.pullupLoading) {
                    vm.pullupText = vm.up.contentover
                }
                if (diff < document.querySelector('.scroll-view-height').offsetHeight && !vm.pullupLoading) {
                    vm.pullupText = vm.up.contentup
                }
            })
            scroll.on('TouchEnd', function (swiper, event) {
                if (vm.pullup) {
                    // swiper拖动结束后会自动执行一个swiper.setWrapperTranslate(0)，所以我们延迟执行来覆盖他
                    setTimeout(() => {
                      //  swiper.setWrapperTranslate(bottomHeight)
                        vm.pullupText = vm.up.contentrefresh

                        if (!vm.pullupLoading) {
                            vm.loadingCallback(swiper)
                        }
                    }, 10)
                }
            })
        },
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
                if (swiper.translate >= headerHeight && !vm.pulldownRefresh) {
                    vm.pulldownText = vm.down.contentover
                }
                if (swiper.translate < headerHeight && !vm.pulldownRefresh) {
                    vm.pulldownText = vm.down.contentdown
                }
            })
            scroll.on('TouchEnd', function (swiper, event) {
                if (vm.pulldown) {
                    // swiper拖动结束后会自动执行一个swiper.setWrapperTranslate(0)，所以我们延迟执行来覆盖他
                    setTimeout(() => {
                        swiper.setWrapperTranslate(headerHeight)
                        vm.pulldownText = vm.down.contentrefresh

                        if (!vm.pulldownRefresh) {
                            vm.refreshCallback(swiper)
                        }
                    }, 10)
                }
            })
        },
        refreshCallback (swiper) {
            this.pulldownRefresh = true
            // 获取数据成功
            this.loadData().then((resolve) => {
                // 数据加载完，结束刷新
                this.scrollData = this.scrollData.concat(this.data2)
                this.endPulldown(swiper)
            }, (reject) => {
                this.endPulldown(swiper)
            })
        },
        loadingCallback (swiper) {
            console.log('上拉加载')
            this.pullupLoading = true

            // 获取数据成功
            this.loadData().then((resolve) => {
                this.scrollData = this.scrollData.concat(this.data2)
                // 数据加载完，结束刷新
                this.endPullup(swiper)
            }, (reject) => {
                this.endPullup(swiper)
            })
        },
        loadData () {
            return new Promise((resolve, reject) => {
                var result = 1

                setTimeout(() => {
                    if (result) {
                        resolve(result)
                    } else {
                        reject(result)
                    }
                }, 2000)
            })
        },
        // 清空下拉刷新状态
        clearPulldownStatus () {
            this.pulldownText = this.down.contentdown
            this.pulldownRefresh = false
            this.pulldown = false
        },
        clearPullupStatus () {
            this.pullupText = this.up.contentup
            this.pullupLoading = false
            this.pullup = false
        },
        // 结束下拉刷新
        endPulldown (swiper) {
            var scroll = this.$refs.loadmoreDom.getCurrentObj()
            if (swiper.isBeginning) {
                this.$refs.loadmoreDom.setWrapperTransition()
                scroll.setWrapperTranslate(0)
                setTimeout(() => {
                    this.$refs.loadmoreDom.clearWrapperTransition()
                    this.clearPulldownStatus()
                    this.$nextTick(() => {
                        console.log(swiper.update())
                        swiper.update()
                    })
                }, 300)
            } else {
                setTimeout(() => {
                    this.clearPulldownStatus()
                    this.$nextTick(() => {
                        swiper.update()
                    })
                }, 300)
            }
        },
        // 结束上拉加载
        endPullup (swiper) {
            setTimeout(() => {
                this.clearPullupStatus()
                this.$nextTick(() => {
                    swiper.update()
                })
            }, 300)
        }
    }
}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';

.mui-renderHeader,.mui-renderFooter{
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
.mui-renderFooter{
    position: static;
    
}
.mui-renderHeader-text{
    .font-dpr(14px);
}

</style>
