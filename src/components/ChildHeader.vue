<template>
  <div class="com-child-header">
    <h2>{{title}}</h2>
  </div>
</template>

<style lang="scss" scoped>
.com-child-header {
  // background-color: #fff;
  width: 100%;
  height: 60px;
  background-image: url("../../public/static/img/imgs/child_header_bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
  h2 {
    font-size: 36rem;
    font-weight: 400;
    color: #FFF;
    line-height: 60px;
  }
}
</style>
<script>
export default {
  props: ["title"]
};
</script>