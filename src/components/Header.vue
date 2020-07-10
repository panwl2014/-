<template>
  <div class="com-header">
    <h2>{{title}}</h2>
    <router-link to="/ip">
      <div class="btn">
        <img src="../../public/static/img/icons/icon_ip_btn.png" alt />
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.com-header {
  position: relative;
  width: 100%;
  height: 50px;
  background-image: url("../../public/static/img/imgs/top.png");
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
  .btn {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 0px 10px;
    height: 25px;
    border: 1px solid #74f0bf;
    border-radius: 3px;
    &:hover {
      background-color: rgba(116, 240, 191, 0.3);
    }
    img {
      height: 70%;
      margin-top: 15%;
    }
  }
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