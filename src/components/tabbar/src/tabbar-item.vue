<template>
   <div class="mui-tabbar-item" @click="onPress">
          <span class="iconfont" :class="'icon-'+tIcon"></span>
          <span class="title">{{title}}</span>
      </div>
</template>

<script>
export default {
    name: 'mui-tabbar-item',
    props: {
        title: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        selectedIcon: {
            type: String,
            default: ''
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        tIcon () {
            let icon = ''
            icon = this.selected ? this.selectedIcon : this.icon
            return icon
        }
    },
    methods: {
        onPress (e) {
            this.$emit('click', e)
        }
    }
}
</script>

<style>

</style>
