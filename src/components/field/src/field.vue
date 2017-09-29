<template>
  <div class="mui-field">
    <div class="mui-field-label" v-if="label"><span class="is-required" v-if='required'>* </span>{{label}}</div>
    <div class="mui-field-value">
      <input v-if="type!=='textarea'" class="mui-field-input" :type="type" @input="valueChange" :value="value" :placeholder="placeholder" :maxlength="max" :disabled="disabled" autocomplete="new-password">
      <textarea ref="textarea"  v-if="type==='textarea'"  class="mui-field-input mui-field-textarea" :rows="rows" v-model="currentValue" :placeholder="placeholder"></textarea>
      <span v-show="clearShow" @click="onClear" class="iconfont icon-closecircle mui-field-clear"></span>
    </div>
  </div>
</template>
<script>
var valida = ['text', 'number', 'password', 'textarea', 'email', 'url', 'tel', 'date', 'time', 'datetime']
export default {
    name: 'mui-field',
    props: {
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text',
            validator: function (val) {
                return valida.indexOf(val) > -1
            }
        },
        placeholder: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        max: {
            type: Number,
            default: 10000
        },
        rows: {
            type: Number,
            default: 1
        },
        autosize: {
            type: Boolean,
            default: false
        },
        clear: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            currentValue: this.value,
            clearShow: false
        }
    },
    watch: {
        currentValue (val) {
            if (this.type === 'textarea') {
                this.autoHeight()
            }
        }
    },
    methods: {
        valueChange (e) {
            this.$emit('input', e.target.value)
            if (!this.clear) return
            if (e.target.value.length > 0) {
                this.clearShow = true
            } else {
                this.clearShow = false
            }
        },
        onClear () {
            this.$emit('input', '')
            this.clearShow = false
        },
        autoHeight () {
            if (!this.autosize) return
            var obj = this.$refs.textarea
            obj.style.height = obj.scrollHeight + 'px'
        }
    }

}
</script>

<style lang='less'>
@import '../../../assets/less/variables.less';
@import '../../../assets/less/mixins.less';
@height: 88/@rem;

.@{name}field {
  position: relative;
  height: auto;
  padding: 10/@rem 30/@rem;
  background:#fff;
  display: flex;
  flex-direction: row;
  font-size:0;
  .sideline(bottom,#eee);
  &-label {
    width: 180/@rem;
    height: 68/@rem;
    line-height: 68/@rem;
    vertical-align: top;
    .font-dpr(14px);
    .is-required{
      color:red;
    }
  }
  &-value{
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items:center;
  }
  &-input{
    flex: 1;
    border: none;
    width: 100%;
    height: 68/@rem;
   // line-height:  68/@rem;
    text-indent: 10/@rem;
    .font-dpr(14px);
    &:disabled{
      background: #eee;
      color: #999;
    }
  }
  &-textarea{
    margin-top: 10/@rem;
    text-indent: 0;
    margin-left: 10/@rem;
  }
  &-clear{
    .font-dpr(14px);
    color:#999;
  }
  
}
</style>