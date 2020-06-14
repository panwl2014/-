<template>
  <div id="app">
    <router-view v-if="1"></router-view>
    <Login v-else></Login>
  </div>
</template>

<style lang="scss">
@import "./base.scss";
#app {
  width: 100%;
  height: 100vh;
}
</style>
<script>
import Login from "./views/Login";
export default {
  components: {
    Login
  }
};
</script>