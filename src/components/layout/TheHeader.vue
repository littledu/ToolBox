<template>
    <div class="the-header">
        <a href="/" class="toolbox-logo"><i class="el-icon-goods"></i> ToolBox</a>
    </div>
</template>

<script>

  export default {
    name: 'TheHeader',
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import '../../assets/css/the-header.less';
</style>
