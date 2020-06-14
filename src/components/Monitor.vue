<template>
  <div class="com-monitor">
    <li v-for="item in monitorData" :key="item.name" class="list">
      <div class="circle">
        <div class="border"></div>
      </div>
      <div class="text">
        <p class="num">{{item.value}}</p>
        <p class="status">实时监测中</p>
      </div>
      <div class="title">{{item.name}}</div>
    </li>
  </div>
</template>
<style lang="scss" scoped>
.com-monitor {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  .list {
    text-align: center;
    width: 130px;
    height: 130px;
    .circle {
      margin-left: 5px;
      animation: turn 5s infinite linear;
      @keyframes turn {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      position: relative;
      padding: 15px;
      width: 120px;
      height: 120px;
      background-image: url("../../public/static/img/imgs/out-circle.png");
      background-repeat: no-repeat;
      background-position: center;
      .border {
        opacity: .8;
        background-color: #192324;
        width: 90px;
        height: 90px;
        border: 1px solid #6d979b;
        border-radius: 50%;
      }
    }
    .text {
      position: relative;
      top: -118px;
      .status {
        color: #395356;
        font-size: 12px;
        margin-top: -30px;
      }
      .num {
        font-family: "font-Family-self";
        font-size: 60px;
        color: rgb(214, 200, 200);
      }
    }
    .title {
      margin-left: 20px;
      width: 90px;
      height: 28px;
      margin-top: -70px;
      background-color: #192C37;
      height: 20px;
      font-size: 12px;
      color: #6beebb;
      line-height: 20px;
      &::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        border-top: 1px solid #6beebb;
        border-left: 1px solid #6beebb;
        float: left;
      }
      &::after {
        margin-top: 12px;
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        border-bottom: 1px solid #6beebb;
        border-right: 1px solid #6beebb;
        float: right;
      }
    }
  }
}
</style>

<script>
export default {
  props: ["monitorData"]
};
</script>
