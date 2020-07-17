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
  height: 60rem;
  background-image: url("../../public/static/img/imgs/top.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-align: center;
  .btn {
    position: absolute;
    right: 10rem;
    top: 8rem;
    bottom: 0;
    margin: auto;
    padding: 0rem 10rem;
    height: 25rem;
    border: 1rem solid #74f0bf;
    border-radius: 3rem;
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
    text-shadow: 0rem 5rem 5rem rgba(0, 25, 110, 0.75);
  }
}
</style>
<script>
export default {
  props: ["title"]
};
</script>