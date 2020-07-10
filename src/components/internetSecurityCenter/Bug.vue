<template>
  <div class="com-wanghanhuoyue">
    <div class="box" ref="wanghanhuoyue"></div>
    <div class="tab">
      <div>
        <span :class="isCheck =='month' ? 'active': ''" @click="showChart('month')">近30天</span>
        <span :class="isCheck =='year' ? 'active': ''" @click="showChart('year')">近1年</span>
        <span :class="isCheck =='5year' ? 'active': ''" @click="showChart('5year')">近5年</span>
      </div>
    </div>
    <p>漏洞数量</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCheck: "month",
      chartData: ""
    };
  },
  created() {
    this.chartData = this.$store.state.webSecurityData.overall_loopholes_last_30day_trend;
  },
  methods: {
    showChart(chartType) {
      this.isCheck = chartType;
      switch (chartType) {
        case "month":
          this.chartData = this.$store.state.webSecurityData.overall_loopholes_last_30day_trend;
          break;
        case "year":
          this.chartData = this.$store.state.webSecurityData.overall_loopholes_last_1year_trend;
          break;
        case "5year":
          this.chartData = this.$store.state.webSecurityData.overall_loopholes_last_5year_trend;
          break;
      }
    },

    initChart() {
      let data1 = [];
      let data2 = [];
      let data3 = [];
      let allData = [];

      for (let i = 0; i < this.chartData.name.length; i++) {
        data1.push({
          name: this.chartData.name[i],
          value: this.chartData.value["低危漏洞"][i]
        });
        data2.push({
          name: this.chartData.name[i],
          value: this.chartData.value["中危漏洞"][i]
        });
        data3.push({
          name: this.chartData.name[i],
          value: this.chartData.value["高危漏洞"][i]
        });
        allData.push({
          name: this.chartData.name[i],
          value: this.chartData.value["总数"][i]
        });
      }
      let fontColor = "#9e9fa3";
      let chart = this.$echarts.init(this.$refs.wanghanhuoyue);
      let option = {
        grid: {
          left: "10",
          right: "5%",
          top: "30%",
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

        legend: {
          data: ["高危漏洞", "中危漏洞", "低危漏洞"],
          orient: "vertical",
          right: 0,
          top: 0,
          itemGap: 5,
          icon: "rect",
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: "#fff",
            rich: {
              name: {
                fontSize: 10,
                width: 50,
                height: 10,
                align: "left"
              },
              value: {
                width: 40,
                height: 10,
                fontSize: 10,
                align: "right"
              }
            }
          },
          formatter(name) {
            let data = option.series[0].data;
            let allData = data.reduce((prev, item) => +item.value + +prev, 0);
            let num = 0;
            num = "{name|" + name + "}" + "{value|" + allData + "}";
            return num;
          }
        },

        xAxis: [
          {
            type: "category",
            // boundaryGap: true,
            // boundaryGap: ['10%', '10%'],
            axisLabel: {
              interval: 0,
              rotate:  this.isCheck == 'month' ? 0: 35,
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
            data: data1
          },
          {
            name: "中危漏洞",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            itemStyle: {
              normal: {
                color: "#60581e"
              }
            },
            data: data2
          },
          {
            name: "高危漏洞",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            itemStyle: {
              normal: {
                color: "#5f3d42"
              }
            },
            data: data3
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
            data: allData
          }
        ]
      };
      if (this.isCheck == 'month') {
        option.dataZoom = this.$store.state.dataZoom
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
    console.log(this.chartData);
    this.initChart();
  }
};
</script>

<style lang="scss" scoped>
.com-wanghanhuoyue {
  // border: 1px solid orange;
  width: 100%;
  height: 170px;
  position: relative;
  .box {
    width: 100%;
    height: 100%;
  }
  p {
    font-size: 10px;
    position: absolute;
    top: 25px;
    left: 12px;
    color: #9e9fa3;
  }
  .tab {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 10px;
    z-index: 10;
    span {
      display: inline-block;
      font-size: 11px;
      padding: 1px 3px;
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