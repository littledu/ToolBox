<template>
    <div class="the-sliderbar">
        <el-menu
                default-active="1"
                class="the-sliderbar__menu"
        >
            <el-menu-item index="1">
                <i class="el-icon-news"></i>
                <span slot="title">帧动画生成器</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-more"></i>
                <span slot="title">其他工具</span>
            </el-menu-item>
        </el-menu>
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
<style lang="less">
    @import '../../assets/css/the-sliderbar.less';
</style>
