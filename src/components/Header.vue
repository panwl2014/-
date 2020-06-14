<template>
  <div class="com-header">
    <h2>{{title}}</h2>
  </div>
</template>

<style lang="scss" scoped>
.com-header {
  width: 100%;
  height: 50px;
  background-image: url("../../public/static/img/imgs/top.png");
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
  h2 {
    font-size: 36rem;
    font-weight: 400;
    color: #b3f0c6;
    text-shadow: 0px 5px 5px rgba(0, 25, 110, 0.75);
  }
}
</style>
<script>
export default {
  props: ["title"]
};
</script>