<template>
  <div class="com-title">
    <p>
      <span class="icon-line"></span>
      <span class="title">{{title}}</span>
    </p>
    <div class="img"></div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>
<style lang="scss" scoped>
.com-title {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 18rem;
  line-height: 30px;
  color: #6beebb;
  .img {
    flex: 1;
    margin-left: 20px;
    height: 100%;
    background-image: url("/static/img/imgs/title_right.png");
    background-repeat: no-repeat;
    background-position: 0 center;
  }
  .icon-line {
    display: inline-block;
    margin-right: 6px;
    width: 3px;
    height: 14px;
    position: relative;
    top: 2px;
    background-color: rgba(107, 238, 187, 1);
  }
}
</style>