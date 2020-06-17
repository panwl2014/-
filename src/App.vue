<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./base.scss";

</style>
<script>
export default {
  created() {
    this.$http.get('/isLogin')
    .then(res => {
      console.log(res, 111)
    })
  }
};
</script>