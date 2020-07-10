<template>
  <div class="center-bottom">
    <div class="visit-top">
      <Title title="近30天机房被访问量top10"></Title>
      <ul>
        <li v-for="item in $store.state.controlData.visit_engine_room_number" :key="item.name">
          <span class="type">{{item.name}}</span>
          <span class="bg">
            <span class="data" :style="{width: `${item.value/$store.state.controlData.visit_engine_room_number[0].value * 100 + '%'}`}"></span>
          </span>
          <span class="num">{{item.value + '万'}}</span>
        </li>
      </ul>
    </div>
    <div class="chart-bar">
      <Title title="我省网民访问网站总量趋势变化"></Title>
      <WebVisitChange></WebVisitChange>
    </div>
  </div>
</template>

<script>
import Title from "../../components/Title";
import WebVisitChange from '../../components/xinxiguankong/WebVisitChange'
export default {
  created() {
    // console.log(111, this.$store.state.controlData.visit_engine_room_number[0].value)
  },
  data() {
    return {
      data: [
        { type: "杭州电信1号机房", num: 5000 },
        { type: "杭州电信2号机房", num: 4500 },
        { type: "杭州电信3号机房", num: 4000 },
        { type: "杭州电信4号机房", num: 3800 },
        { type: "杭州电信5号机房", num: 3500 },
        { type: "杭州电信6号机房", num: 3200 },
        { type: "杭州电信7号机房", num: 3000 },
        { type: "杭州电信8号机房", num: 2800 },
        { type: "杭州电信9号机房", num: 2500 },
        { type: "杭州电信10号机房", num: 2000 }
      ],
      data1: [
          {type: 'day', data: [1000]},
          {type: 'week', data: [1000, 2000, 3000, 4000, 5000, 6000, 7000]},
          {type: 'week', data: [1000, 2000, 3000, 4000, 5000, 6000, 7000]},
      ]
    };
  },
  components: {
    Title,
    WebVisitChange,
  }
};
</script>

<style lang="scss" scoped>
.center-bottom {
  display: flex;
  justify-content: space-between;
  & > div {
    width: 48%;
    height: 250px;
    // border: 1px solid red;
  }
  .visit-top {
    ul {
      padding-left: 10px;
      height: calc(100% - 30px);
      width: 100%;
      display: flex;
      align-content: space-around;
      flex-wrap: wrap;
      li {
        width: 100%;
        font-size: 12px;
        justify-content: space-between;
        display: flex;
        height: 12px;
        align-items: center;
        .type {
          width: 30%;
          color: #b9babc;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .bg {
          border: 1px solid #133036;
          width: 50%;
          height: 15px;
          position: relative;
          overflow: hidden;
          .data {
            margin: 2px;
            height: 9px;
            position: absolute;
            left: 0;
            background-image: url("../../../public/static/img/imgs/chart_bar_bg.png");
            animation: show 1.2s forwards;
            @keyframes show {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(0%);
              }
            }
          }
        }
        .num {
          width: 20%;
          text-align: right;
          color: #b9babc;
          font-size: 12px;
        }
      }
    }
  }
}
</style>