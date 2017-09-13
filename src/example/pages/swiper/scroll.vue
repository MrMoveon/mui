<template>
    <mui-page>
        <mui-header mode='light' fixed title="ScrollView 滚动视图">
            <mui-button icon="arrowleft" slot="left" @click="back">返回</mui-button>
        </mui-header>
        <mui-page-container>
           
            <mui-wing-blank  color="#f8f8f8">
				<div class="sub-title">
					垂直滚动
				</div>
			</mui-wing-blank>
           
            <mui-scroll-view class="music-container" ref="eScrollV" name="escroll-v" direction="vertical" slidesPerView="auto" :scrollbar="null" style="height:50%">
                <mui-scroll-view-item style="height:auto" >
                    <mui-media-cell v-for="(item,index) in scrollData" :key="index" radius :img="item.img" :title="item.title" :desc="item.desc"></mui-media-cell>
                </mui-scroll-view-item>
            </mui-scroll-view>
             <mui-wing-blank  color="#f8f8f8">
				<div class="sub-title">
					水平滚动
				</div>
			</mui-wing-blank>
            
            <mui-scroll-view class="music-container-h" ref="eScrollH" name="escroll-h" direction="horizontal" slidesPerView="auto" :scrollbar="null" style="height:3rem">
                <mui-scroll-view-item style="height:auto"  v-for="(item,index) in scrollData" :key="index">
                    <mui-media-cell radius :img="item.img" :title="item.title" :desc="item.desc"></mui-media-cell>
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
            ]
        }
    },
    methods: {

    }
}
</script>

