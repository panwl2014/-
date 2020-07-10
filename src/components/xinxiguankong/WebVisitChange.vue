<template>
  <div class="com-wanghanhuoyue">
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
    <p class="x">时间</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        { name: 5.1, value: 2000 },
        { name: 5.1, value: 2500 },
        { name: 5.1, value: 2400 },
        { name: 5.1, value: 2000 },
        { name: 5.1, value: 2800 },
        { name: 5.1, value: 2500 },
        { name: 5.1, value: 2300 },
        { name: 5.1, value: 2000 },
        { name: 5.1, value: 2500 },
        { name: 5.1, value: 2400 },
        { name: 5.1, value: 2000 },
        { name: 5.1, value: 2500 },
        { name: 5.1, value: 2400 },
        { name: 5.1, value: 2000 },
        { name: 5.1, value: 2800 },
        { name: 5.1, value: 2500 },
        { name: 5.1, value: 2300 },
        { name: 5.1, value: 2000 },
        { name: 5.1, value: 2500 },
        { name: 5.1, value: 2400 },
        { name: 5.1, value: 2000 },
        { name: 5.1, value: 2500 },
        { name: 5.1, value: 2400 },
        { name: 5.1, value: 2000 },
        { name: 5.1, value: 2800 },
        { name: 5.1, value: 2500 },
        { name: 5.1, value: 2300 },
        { name: 5.1, value: 2000 },
        { name: 5.1, value: 2500 },
        { name: 5.1, value: 2400 }
      ],
      isCheck: "day",
      chartData: ''
    };
  },
  // computed: {
  //   getData() {
  //     return this.data;
  //   }
  // },
  methods: {
    showChart(chartType) {
      this.isCheck = chartType;
      switch (chartType) {
        case "day":
          this.chartData = this.$store.state.controlData.visit_website_last_24hours_trend;
          break;
        case "week":
          this.chartData = this.$store.state.controlData.visit_website_last_week_trend;
          break;
        case "month":
          this.chartData = this.$store.state.controlData.visit_website_last_month_trend;
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
          bottom: "5%",
          containLabel: true
        },
        tooltip: this.$store.state.tooltip[1],
        // tooltip: {
        //   confine: true,
        //   trigger: "axis",
        //   axisPointer: {
        //     label: {
        //       show: true,
        //       textStyle: {
        //         fontSize: 10
        //       }
        //     },
        //     lineStyle: {
        //       width: 0
        //     }
        //   },
        //   backgroundColor: "#fff",
        //   textStyle: {
        //     color: "#5c6c7c"
        //   },
        //   padding: [10, 10],
        //   extraCssText: "box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)"
        // },
        // legend: {
        //   show: true,
        //   icon: "circle",
        //   itemWidth: 8,
        //   right: 0,
        //   orient: 'vertical',
        //   textStyle: {
        //     color: '#9e9fa3',
        //     fontSize: 10
        //   }
        // },

        // legend: {
        //   data: ['高危漏洞', '中危漏洞', '低危漏洞'],
        //   orient: "vertical",
        //   right: 0,
        //   top: 0,
        //   itemGap: 5,
        //   icon: "rect",
        //   itemWidth:8,
        //   itemHeight:8,
        //   textStyle: {
        //     color: "#fff",
        //     rich: {
        //       name: {
        //         fontSize: 10,
        //         width: 50,
        //         height: 10,
        //         align: "left"

        //       },
        //       value: {
        //         width: 40,
        //         height: 10,
        //         fontSize: 10,
        //         align: "right"
        //       }
        //     }
        //   },
        //   formatter(name) {
        //     let data = option.series[0].data;
        //     let allData = data.reduce((prev, item) => +item.value + +prev, 0);
        //     // console.log(allData)
        //     let num = 0;
        //     num = "{name|" + name + "}" + "{value|" + allData + "}";
        //     return num;
        //   }
        // },

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
        // dataZoom: [
        //   {
        //     type: "inside",
        //     show: true,
        //     xAxisIndex: [0],
        //     start: 1,
        //     end: 30
        //   }
        // ],
        series: [
          {
            name: "低危漏洞",
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
            name: "总数",
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
      if (this.isCheck == "day" || this.isCheck == "month" ) {
        option.dataZoom = this.$store.state.dataZoom;
      }
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
  mounted() {
    this.chartData = this.$store.state.controlData.visit_website_last_24hours_trend;
    console.log(233,this.chartData)
    this.initChart();
  }
};
</script>

<style lang="scss" scoped>
.com-wanghanhuoyue {
  // border: 1px solid orange;
  width: 100%;
  height: calc(100% - 30px);
  position: relative;
  overflow: hidden;
  .box {
    width: 100%;
    height: 100%;
  }
  p {
    font-size: 10px;
    position: absolute;
    color: #9e9fa3;
    &.y {
      top: 5%;
      left: 12px;
    }
    &.x {
      bottom: 5%;
      right: 10px;
    }
  }
  .tab {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    span {
      display: inline-block;
      font-size: 11px;
      padding: 2px 5px;
      margin: 0 3px;
      background-color: #133841;
      border: 1px solid #2f4c4d;
      color: #70878d;
      &:hover {
        cursor: pointer;
      }
    }
    .active {
      background: #226567;
      border: 1px solid #439d84;
      color: #fff;
    }
  }
}
</style>