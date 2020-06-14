<template>
  <div class="com-Security">
    <ul class="show-data">
      <li class="item" v-for="item in securityData" :key="item.type">
        <div class="left">
          <p class="text">[{{item.type}}]</p>
          <strong>{{item.num}}</strong>
        </div>
        <div class="right">{{item.type == '总数' ? '主体在本省、主体在外省接入在本省': ''}}</div>
      </li>
    </ul>
    <div id="lineCharts" ref="lineCharts"></div>
  </div>
</template>

<style lang="scss" scoped>
.com-Security {
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  #lineCharts {
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 55px;
  }
  .show-data {
    width: 100%;
    padding-left: 10px;
    .item {
      margin-top: 10px;
      display: flex;
      height: 50px;
      background-color: #fff;
      .left {
        padding: 5px 10px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        color: #44cca8;
        width: 90px;
        background-color: #2e424c;
        line-height: 0;
        .text {
          width: 100%;
          font-size: 12px;
          margin-bottom: 5px;
        }
        strong {
          font-family: "font-Family-self";
          width: 100%;
          font-size: 40px;
        }
      }
      .right {
        text-align: center;
        color: #90a59f;
        flex: 1;
        font-size: 12px;
        background-color: #192c37;
        background-image: url("../../public/static/img/charts_img/charts_bg.png");
        line-height: 50px;
      }
    }
  }
}
</style>
<script>
export default {
  props: ["title", "securityData"],

  mounted() {
    const lineCharts = this.$echarts.init(this.$refs.lineCharts);
    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      grid: {
        left: "100",
        right: "0",
        top: "0",
        bottom: "0",
        containLabel: true
      },
      xAxis: {
        type: "value",
        show: false
      },
      yAxis: {
        type: "category",
        show: false
      },
      series: [
        {
          name: "2011年",
          type: "bar",
          data: [18203, 23489, 29034],
          color: "#38877c",
          barWidth: 5,
          barGap: "300%",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.1)"
          }
        },
        {
          name: "2012年",
          type: "bar",
          data: [19325, 23438, 31000],
          barWidth: 5,
          color: "#768088",
          showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.1)'
        }
        }
      ]
    };

    lineCharts.setOption(option);
    window.addEventListener("resize", () => {
      lineCharts.resize();
    });
  }
};
</script>