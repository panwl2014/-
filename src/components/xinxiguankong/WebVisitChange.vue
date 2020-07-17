<template>
  <div class="com-wanghanhuoyue" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="box" ref="wanghanhuoyue"></div>
    <div class="tab">
      <div>
        <span :class="isCheck =='day' ? 'active': ''" @click="showChart('day')">天</span>
        <span :class="isCheck =='week' ? 'active': ''" @click="showChart('week')">周</span>
        <span :class="isCheck =='month' ? 'active': ''" @click="showChart('month')">月</span>
        <span :class="isCheck =='quarter' ? 'active': ''" @click="showChart('quarter')">季</span>
        <span :class="isCheck =='year' ? 'active': ''" @click="showChart('year')">年度</span>
      </div>
    </div>
    <p class="y">网站数</p>
    <p class="x">{{isCheck == 'day'? '小时':'日期'}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCheck: "day",
      chartData: "",
      start: 0,
      end: 30,
      timer: null
    };
  },
  methods: {
    showChart(chartType) {
      this.isCheck != chartType && this.initChart();
      this.isCheck = chartType;
      switch (chartType) {
        case "day":
          this.end = 0;
          (this.start = 30),
            (this.chartData = this.$store.state.controlData.visit_website_last_24hours_trend);
          break;
        case "week":
          this.chartData = this.$store.state.controlData.visit_website_last_week_trend;
          break;
        case "month":
          this.end = 0;
          (this.start = 30),
            (this.chartData = this.$store.state.controlData.visit_website_last_month_trend);
          break;
        case "quarter":
          this.chartData = this.$store.state.controlData.visit_website_last_4quarter_trend;
          break;
        case "year":
          this.chartData = this.$store.state.controlData.visit_website_last_year_trend;
          break;
      }
    },

    initChart() {
      let fontColor = "#9e9fa3";
      let chart = this.$echarts.init(this.$refs.wanghanhuoyue);
      let data = [];
      for (let i = 0; i < this.chartData.name.length; i++) {
        data.push({
          name: this.chartData.name[i],
          value: this.chartData.value[i]
        });
      }
      let option = {
        grid: {
          left: "10",
          right: "10%",
          top: "20%",
          bottom: "0%",
          containLabel: true
        },
        tooltip: this.$store.state.tooltip[1],

        xAxis: [
          {
            type: "category",
            // boundaryGap: true,
            // boundaryGap: ['10%', '10%'],
            axisLabel: {
              interval: 0,
              // rotate: 38,
              color: fontColor,
              fontSize: 10
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#3a414b"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "red"
              }
            },
            data: this.chartData.name
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            // max: 3800,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#9e9fa3",
                fontSize: 10
              }
            },
            axisLine: {
              lineStyle: {
                color: "#3a414b"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "访问量",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            itemStyle: {
              normal: {
                color: "#1f6563"
              }
            },
            data
          },

          {
            tooltip: {
              show: false
            },
            type: "line",
            symbolSize: 5,
            symbol: "circle",
            lineStyle: {
              width: 1
            },
            itemStyle: {
              normal: {
                color: "#63dcae",
                barBorderRadius: 0,
                label: {
                  show: false,
                  position: "top"
                }
              }
            },
            data: data
          }
        ]
      };
      if (this.isCheck == "day" || this.isCheck == "month") {
        let dataZoom = [
          {
            type: "inside",
            show: true,
            xAxisIndex: [0],
            start: this.start,
            end: this.end
          }
        ];
        option.dataZoom = dataZoom;
      }
      chart.setOption(option, true);
      window.addEventListener("resize", () => {
        chart.resize();
      });
    },

    mouseEnter() {
      clearInterval(this.timer);
      this.timer = null;
    },

    mouseLeave() {
      this.timer = setInterval(() => {
        if (this.start >= 70) {
          this.start = 0;
        }
        if (this.end >= 100) {
          this.end = 30;
        }
        this.start = this.start + 5;
        this.end = this.end + 5;
      }, 3000);
    }
  },
  watch: {
    chartData(a, b) {
      if (a !== b) {
        this.initChart();
      }
    },
    end(a, b) {
      if (a !== b) {
        this.initChart();
      }
    }
  },
  mounted() {
    this.chartData = this.$store.state.controlData.visit_website_last_24hours_trend;
    this.initChart();
    this.timer = setInterval(() => {
      if (this.start >= 70) {
        this.start = 0;
      }
      if (this.end >= 100) {
        this.end = 30;
      }
      this.start = this.start + 5;
      this.end = this.end + 5;
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.com-wanghanhuoyue {
  // border: 1rem solid orange;
  width: 100%;
  height: calc(100% - 30rem);
  position: relative;
  overflow: hidden;
  .box {
    width: 100%;
    height: 100%;
  }
  p {
    font-size: 10rem;
    position: absolute;
    color: #9e9fa3;
    &.y {
      top: 5%;
      left: 12rem;
    }
    &.x {
      bottom: 0%;
      right: 10rem;
    }
  }
  .tab {
    position: absolute;
    top: 10rem;
    right: 10rem;
    z-index: 10;
    span {
      display: inline-block;
      font-size: 11rem;
      padding: 2rem 5rem;
      margin: 0 3rem;
      background-color: #133841;
      border: 1rem solid #2f4c4d;
      color: #70878d;
      &:hover {
        cursor: pointer;
      }
    }
    .active {
      background: #226567;
      border: 1rem solid #439d84;
      color: #fff;
    }
  }
}
</style>