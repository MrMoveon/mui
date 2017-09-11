<template>
  <div class="mui-flex-item">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'mui-flex-item'
}
</script>

<style lang="less">
.mui-flex-item{
    flex: 1;
    margin-left: 0.16rem;
    &:first-child{
        margin-left: 0
    }
}
</style>
