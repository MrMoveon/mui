<template>
  <div class="mui-search" :class="focusClass" @click="setFocus">
      <div class="mui-search-input ">
          <div class="mui-search-placeholder">
              <i class="iconfont icon-search"></i> <span ref="placeholderDom" class="placeholder" >{{placeholder}}</span>
          </div>
          <input ref="input" @blur="clearFocus" class="mui-search-value" type="search" v-model.trim="value" :maxlength="maxLength" />
          <a href="javascript:;" class="mui-search-clear" v-show="value.trim().length > 0" @click.stop="clear"><i class="iconfont icon-closecircle"></i></a>
      </div>
      <div class="mui-search-cancel" @click.stop="cancel" v-if="!showSearchButton">{{cancelText}}</div>
        <div class="mui-search-button" @click.stop="submit" v-if="showSearchButton">{{searchText}}</div>
  </div>
</template>

<script>
export default {
    name: 'mui-search',
    props: {
        defaultValue: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: 'search'
        },
        showSearchButton: {
            type: Boolean,
            default: false
        },
        searchText: {
            type: String,
            default: '搜索'
        },
        showCancelButton: {
            type: Boolean,
            default: false
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        maxLength: {
            type: Number,
            default: 18
        }
    },
    data () {
        return {
            value: this.defaultValue,
            focusClass: ''
        }
    },
    watch: {
        value (val) {
            if (val.trim().length > 0) {
                this.$refs.placeholderDom.style.display = 'none'
            } else {
                this.$refs.placeholderDom.style.display = 'block'
            }
            this.$emit('update:defaultValue', val)
        }
    },
    mounted () {
        if (this.value.trim().length > 0) {
            this.$refs.placeholderDom.style.display = 'none'
            this.setFocus()
        }
    },
    methods: {
        setFocus () {
            this.focusClass = 'mui-search-focus'
            this.$refs.input.focus()
        },
        clearFocus () {
            if (this.value.trim().length > 0) return
            this.focusClass = ''
        },
        clear (e) {
            this.$emit('onClear', e)
            this.value = ''
            this.$refs.input.focus()
        },
        cancel (e) {
            this.$emit('onCancel', e)
            this.value = ''
            this.focusClass = ''
            this.$refs.input.blur()
        },
        submit (e) {
            this.$emit('onSubmit', e)
            if (this.value) {
                this.$refs.input.focus()
            }
        }
    }
}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
.mui-search{
    position: relative;
    height: 88/@rem;
    padding:14/@rem 20/@rem 0 20/@rem;
    background: #efeff4;
    overflow: hidden;
    display: flex;
    flex-direction: row;
}
.mui-search-input{
    position: relative;
    width: 100%;
  //  margin-right:-100/@rem;
    transition: all .3s;
}
.mui-search-placeholder{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60/@rem;
    color: #999;
    z-index:2;
    transition: all .3s;
    .iconfont{
        .font-dpr(14px);
    }
    .placeholder{
        white-space: nowrap;
    }
}
.mui-search-value{
    position: absolute;
    left: 0;
    top:0;
    height:60/@rem;
    border: none;
    z-index: 1;
    width: 100%;
    border-radius: 8/@rem;
}
.mui-search-clear{
    position: absolute;
    top:0;
    right:0;
    z-index: 4;
    display: block;
    width: 60/@rem;
    height: 60/@rem;
    text-align: center;
    line-height: 60/@rem;
    color: #ccc;
    .iconfont{
        .font-dpr(14px);
    }
}
.mui-search-cancel,.mui-search-button{
        // position: absolute;
        // right: 10/@rem;
        // height: 60/@rem;
        // z-index: 3;
        // top: 14/@rem;
        // bottom:14/@rem;
        color:@color-primary;
        width: 100/@rem;
        text-align: center;
        line-height: 60/@rem;
        margin-right:-100/@rem;
        transition: all .3s;
    }
.mui-search-focus{
    .mui-search-input{
        position: relative;
        margin-right:0;
    }
    .placeholder{
       padding-left: 10/@rem;
    }
    .mui-search-placeholder{
        width: 240/@rem;
        padding-left: 25/@rem;
        justify-content: flex-start;
    }
    .mui-search-value{
        padding-left:65/@rem;
        //margin-right:100/@rem;
    }
    .mui-search-cancel,.mui-search-button{
         margin-right:0;
    }
}
</style>
