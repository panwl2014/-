<template>
  <div class="com-BugTrend">
      <li class="title top10" id="title">
        <span class="top">排名</span>
        <span class="name">相关机房</span>
        <span class="bg">信安事件数</span>
      </li>
      <li v-for="(item, index) in chartData" :key="index">
        <span class="top">
          <span :class="'t' + (index + 1)">{{index + 1}}</span>
        </span>
        <span class="name text-overfllow">{{item.name}}</span>
        <span class="bg">
          <span class="data" :style="{width: (item.value/chartData[0].value * 100) + '%'}"></span>
          <span class="num">{{item.value}}</span>
        </span>
      </li>
  </div>
</template>

<style lang="scss" scoped>
.com-BugTrend {
  width: 100%;
  display: flex;
  padding: 10px;
  font-size: 12px;
    color: #82888f;
    font-size: 11px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .name {
      text-align: left;
    }
    .bg {
      text-align: right;
    }
    li {
      &.title {
        height: 16px;
        line-height: 16px;
        background-color: #102a30;
        .top,
        .name,
        .bg {
          background-color: rgba(1, 1, 1, 0);
        }
      }
      display: flex;
      justify-content: space-around;
      width: 100%;
      display: flex;
      margin-bottom: 6px;
      height: 12px;
      .top {
        //   background-color: orange;
        width: 10%;
        span {
          width: 80%;
          height: 100%;
          background-color: #555f61;
          border-radius: 3px 0 3px 0;
          display: block;
          margin-left: 10%;
          &.t1 {
            background-color: #fbce38;
            color: #3a3a3a;
          }
          &.t2 {
            color: #3a3a3a;
            background-color: #c57c6b;
          }
          &.t3 {
            color: #3a3a3a;
            background-color: #83b4ad;
          }
        }
      }
      .name {
        width: 30%;
        height: 100%;
        //   background-color: orange;
      }
      .bg {
        width: 40%;
        height: 100%;
        //   background-color: blue;
        position: relative;
        overflow: hidden;
        .data {
          position: absolute;
          right: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background-color: #164045;
          animation: showright 1.2s forwards;
          @keyframes showright {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0%);
            }
          }
        }
        .num {
          position: absolute;
          top: 0;
          right: 5px;
        }
      }
  }
}
</style>

<script>
export default {
  props: ['chartData'],
  data() {
    return {
      data: [
        { top: 1, name: "浙江电信", num: 50000 },
        { top: 2, name: "浙江电信", num: 50000 },
        { top: 3, name: "浙江电信", num: 50000 },
        { top: 4, name: "浙江电信", num: 50000 },
        { top: 5, name: "浙江电信", num: 50000 },
        { top: 6, name: "浙江电信", num: 50000 },
        { top: 7, name: "浙江电信", num: 50000 },
        { top: 8, name: "浙江电信", num: 50000 },
        { top: 9, name: "浙江电信", num: 50000 },
        { top: 10, name: "浙江电信", num: 50000 }
      ],
    };
  },
};
</script>
