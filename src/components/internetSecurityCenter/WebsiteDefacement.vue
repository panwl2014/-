<template>
  <div class="com-website-defacement">
    <div class="chart" ref="chart"></div>
    <div class="ctrl">
      <span :class="check == 'web' ? 'active': ''" @click="showChart('web')">被篡改网站</span>
      <span :class="check == 'room' ? 'active': ''" @click="showChart('room')">被篡改机房</span>
      <span :class="check == 'address' ? 'active': ''" @click="showChart('address')">被篡改地域</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.com-website-defacement {
  height: calc(100% - 30px);
  width: 100%;
  position: relative;
  overflow: hidden;
  .chart {
    width: 100%;
    height: 100%;
  }
  .ctrl {
    font-size: 12px;
    color: #fff;
    position: absolute;
    top: 20px;
    left: 10px;
    width: 20%;
    height: 80%;
    span {
        display: block;
        height: 25px;
        line-height: 22px;
        width: 100%;
        color: #929294;
        border: 1px solid #4a515b;
        font-size: 11px;
        text-align: center;
        margin-bottom: 10px;
         &.active {
          border: 1px solid #39a397;
          color: #6beebb;
        }
      }
  }
}
</style>

<script>
export default {
  data() {
    return {
      chartData: '',
      check: "web",
    };
  },
  created() {
    this.chartData = this.$store.state.webSecurityData.falsify_website
  },
  mounted() {
    this.initChart();
  },
  methods: {
    showChart(chartType) {
      this.check = chartType;
      switch (chartType) {
        case 'web':
          this.chartData = this.$store.state.webSecurityData.falsify_website
          break;
        case 'room':
          this.chartData = this.$store.state.webSecurityData.falsify_engine_room
          break;
        case 'address':
          this.chartData = this.$store.state.webSecurityData.falsify_area
          break;
      }
    },
    initChart() {
      let chart = this.$echarts.init(this.$refs.chart);
      let option = {
        // tooltip: {
        //   trigger: "axis",
        //   axisPointer: {
        //     type: "shadow"
        //   }
        // },
        grid: {
          top: 20,
          left: "25%",
          right: "10%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#224f4a"
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#a7a7a9",
              fontSize: 11
            }
          }
        },
        yAxis: {
          data: this.chartData.map(item => item.name),
          axisLabel: {
            textStyle: {
              color: "#a7a7a9",
              fontSize: 11
            }
          },
          axisLine: {
            lineStyle: {
              color: "#224f4a"
            }
          },
          axisTick: {
            show: false
          },
          type: "category"
        },
        series: [
          {
            barWidth: 6,
            itemGap: 0,
            name: "篡改数量",
            type: "bar",
            itemStyle: {
              color: "#174046"
            },
            data: this.chartData,
            label: {
              show: true,
              position: "right",
              textStyle: {
                color: "#a7a7a9",
                fontSize: 10
              }
            }
          }
        ]
      };

      chart.setOption(option, true);
      window.addEventListener("resize", () => {
        chart.resize();
      });
    }
  },
  watch: {
    chartData(a, b) {
      if (a !== b) {
        this.initChart();
      }
    }
  },
  getData() {
    return this.data;
  }
};
</script>