<template>
    <mui-page>
        <mui-header mode='light' fixed title="上拉加载下拉刷新">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
            <mui-load-more ref="loadmore" @on-infinite="loadData" @on-refresh="refresh"  name="loadmore" :scrollbar="null"> 
                <template slot='loadmore'>
                 <mui-cell-group>
                    <mui-media-cell v-for="(item,index) in scrollData" :key="index" radius :img="item.img" :title="item.title" :desc="item.desc"></mui-media-cell>
                </mui-cell-group>
                </template>
            </mui-load-more>
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
            ]
        }
    },
    mounted () {
        setTimeout(() => {
            this.$refs.loadmore.initScrollview()
            this.$refs.loadmore._pullup()
            this.$refs.loadmore._pulldown()
        }, 600)
    },
    methods: {
        loadData (swiper) {
            if (this.scrollData.length >= 15) {
                // 禁止下拉加载
                this.$refs.loadmore.setPullupState(false)
                return false
            }
            setTimeout(() => {
                this.scrollData = this.scrollData.concat(this.scrollData)
                this.$nextTick(() => {
                        // 更新视图
                    swiper.update()
                        // 重置下拉加载状态
                    this.$refs.loadmore.resetState()
                })
            }, 2000)
        },
        refresh (swiper) {
            var scroll = this.$refs.loadmore.getCurrentObj()
            setTimeout(() => {
                this.scrollData = [
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
                ]
                this.$nextTick(() => {
                        // 更新视图
                    swiper.update()
                        // 重置下拉刷新状态
                    this.$refs.loadmore.resetState()
                    // 开启上拉加载
                    this.$refs.loadmore.setPullupState(true)
                    // 回到顶部
                    this.$refs.loadmore.returnTop()
                    this.$Toast({
                        msg: '刷新成功',
                        position: 'top'
                    })
                })
            }, 2000)
        }
    }

}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';

#loadmore{
    position: absolute;
    left: 0;
    right:0;
    top:88/@rem;
    bottom: 0;
}
</style>
