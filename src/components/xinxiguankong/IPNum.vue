<template>
  <div class="ip-statistics">
    <li v-for="(item, index) in chartData" :key="index" :class="index == 0 ? 'all': ''">
      <span class="type">{{item.name}}</span>
      <span class="num">
        <countTo
          :startVal="0"
          :endVal="index == 0 ? item.value/10000 : item.value"
          :duration="2500"
        ></countTo>
        <!-- {{index == 0 ? item.value/10000 : item.value}} -->
        <span v-if="index == 0" class="unit">万</span>
      </span>
    </li>
  </div>
</template>

<style lang="scss" scoped>
.ip-statistics {
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  li {
    background-image: url("../../../public/static/img/imgs/ip_num_img_outline1.png");
    background-size: 100% 100%;
    position: relative;
    color: #ed7775;
    font-size: 13px;
    height: 40px;
    width: 24%;
    line-height: 40px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    justify-content: space-around;
    .type {
      width: 70%;
    }
    .num {
      text-align: center;
      width: 30%;
      font-family: "font-Family-number";
      font-size: 25px;
      .unit {
        font-size: 14px;
      }
    }
    &.all {
      background-image: url("../../../public/static/img/imgs/ip_num_img_outline.png");
      color: #6beebb;
    }
  }
}
</style>

<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  props: ["chartData"]
};
</script>