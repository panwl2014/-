<template>
  <div class="com-BugTrend">
    <div class="ctrl">
      <span :class="check == 'month' ? 'active': ''" @click="showChart('month')">近30天</span>
      <span :class="check == 'quarter' ? 'active': ''" @click="showChart('quarter')">季度</span>
      <span :class="check == 'year' ? 'active': ''" @click="showChart('year')">年度</span>
    </div>
    <div class="right">
      <li class="title top10" id="title">
        <span class="top">排名</span>
        <span class="name">行业</span>
        <span class="bg">漏洞数</span>
      </li>
      <li v-for="(item, index) in chartData" :key="index">
        <!-- <li v-for="item in data" :key="item.top" :class="'top10' + ' ' + 't' + item.top"> -->
        <span class="top">
          <span :class="'t' + (index + 1)">{{index + 1}}</span>
        </span>
        <span class="name">{{item.name}}</span>
        <span class="bg">
          <span class="data" :style="{width: (item.value/chartData[0].value * 100) + '%'}"></span>
          <span class="num">{{item.value}}</span>
        </span>
      </li>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.com-BugTrend {
  width: 100%;
  height: calc(100% - 30px);
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 12px;
  .ctrl {
    font-size: 11px;
    color: #fff;
    height: 80%;
    padding-right: 10px;
    span {
      display: block;
      height: 22px;
      padding: 0 5px;
      line-height: 20px;
      color: #929294;
      border: 1px solid #2f4c4d;
      text-align: center;
      margin-bottom: 10px;
      border-radius: 2px;
      background-color: #133841;
      &.active {
        border: 1px solid #39a397;
        color: #fff;
        background: #226566;
      }
    }
  }
  .right {
    width: 70%;
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
        width: 20%;
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
}
</style>

<script>
export default {
  data() {
    return {
      chartData: "",
      check: "month"
    };
  },
  created() {
    this.chartData = this.$store.state.webSecurityData.industry_loopholes_last_30day;
    console.log("test", this.chartData);
  },
  computed: {
    getNum() {
      let num = (
        this.data.reduce((prev, item) => prev + +item.num, 0) / 10000
      ).toFixed(0);
      return (num + "").split("");
    }
  },

  methods: {
    showChart(chartType) {
      this.check = chartType;
      switch (chartType) {
        case "month":
          this.chartData = this.$store.state.webSecurityData.industry_loopholes_last_30day;
          break;
        case "quarter":
          this.chartData = this.$store.state.webSecurityData.industry_loopholes_last_quarter;
          break;
        case "year":
          this.chartData = this.$store.state.webSecurityData.industry_loopholes_last_year;
          break;
      }
    }
  }
};
</script>
