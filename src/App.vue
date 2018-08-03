<template>
    <div id="app">
        <TheHeader></TheHeader>
        <div class="container">
            <TheSliderBar></TheSliderBar>
            <div class="the-main">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
  import TheHeader from './components/layout/TheHeader.vue';
  import TheSliderBar from './components/layout/TheSliderBar.vue';

  export default {
    name: 'App',
    components: {
      TheHeader,
      TheSliderBar
    }
  }
</script>

<style>
    @import "./assets/css/base.less";
</style>
