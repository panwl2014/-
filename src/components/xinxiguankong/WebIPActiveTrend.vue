<template>
  <div class="com-wanghanhuoyue">
    <div class="box" ref="wanghanhuoyue"></div>
    <div class="tab">
      <div class="left-text">
        <span class="left"></span>
        <p>
          网站访问量
          <br />单位：万
        </p>
      </div>
      <div>
        <span :class="isCheck =='30day' ? 'active': ''" @click="showChart('30day')">近30天</span>
        <span :class="isCheck =='month' ? 'active': ''" @click="showChart('month')">月度</span>
        <span :class="isCheck =='quarter' ? 'active': ''" @click="showChart('quarter')">季度</span>
        <span :class="isCheck =='year' ? 'active': ''" @click="showChart('year')">年度</span>
      </div>
      <div class="left-text right">
        <span class="left"></span>
        <p>
          活跃IP数
          <br />单位：万
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCheck: "30day",
      chartData: ""
    };
  },
  methods: {
    // 改变图表
    showChart(chartType) {
      this.isCheck = chartType;
      switch (chartType) {
        case "month":
          this.chartData = this.$store.state.controlData.active_website_last_12month_trend;
          break;
        case "30day":
          this.chartData = this.$store.state.controlData.active_website_last_30day_trend;
          break;
        case "quarter":
          this.chartData = this.$store.state.controlData.active_website_last_4quarter_trend;
          break;
        case "year":
          this.chartData = this.$store.state.controlData.active_website_last_5year_trend;
          break;
      }
    },

    initChart() {
      let data1 = [];
      let data2 = [];
      for (let i = 0; i < this.chartData.name.length; i++) {
        data1.push({
          name: this.chartData.name[i],
          value: this.chartData.value["网站访问量"][i]
        });
        data2.push({
          name: this.chartData.name[i],
          value: this.chartData.value["活跃IP数"][i]
        });
      }
      let max = (
        (Math.max(...data1.map(item => item.value)) +
          Math.max(...data2.map(item => item.value))) *
        1.4
      ).toFixed(0);
      let fontColor = "#9e9fa3";
      let chart = this.$echarts.init(this.$refs.wanghanhuoyue);
      let option = {
        grid: {
          left: "0",
          right: "0%",
          top: "27%",
          bottom: "5%",
          containLabel: true
        },
        tooltip: this.$store.state.tooltip[1],

        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: fontColor
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
                color: "#195384"
              }
            },
            data: this.chartData.name
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#9e9fa3",
                fontSize: 11
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
              // lineStyle: {
              //   color: "#11366e"
              // }
            }
          },
          {
            type: "value",
            min: 0,
            max,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#9e9fa3",
                fontSize: 11
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
              // lineStyle: {
              //   color: "#11366e"
              // }
            }
          }
        ],
        series: [
          {
            name: "网站访问量",
            type: "line",
            stack: "总量",
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#0092f6",
                point: "",
                lineStyle: {
                  color: "#4c7652",
                  width: 1
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(36, 68, 55,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(36, 68, 55,0.9)"
                    }
                  ])
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red"
                }
              }
            },
            data: data1
          },
          {
            name: "活跃ip数",
            type: "line",
            stack: "总量",
            symbol: "none",
            // symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#226667",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(12, 39, 48,0.5)"
                    },
                    {
                      offset: 1,
                      color: "rgba(12, 39, 48,0.8)"
                    }
                  ])
                }
              }
            },
            data: data2
          }
        ]
      };

      // 开启数据缩放
      if (this.isCheck == "30day") {
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
    this.chartData = this.$store.state.controlData.active_website_last_30day_trend;
    this.initChart();
  }
};
</script>

<style lang="scss" scoped>
.com-wanghanhuoyue {
  width: 100%;
  height: 200px;
  position: relative;
  .box {
    width: 100%;
    height: 100%;
  }
  .tab {
    width: 100%;
    position: absolute;
    top: 15px;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    .left-text {
      position: relative;
      width: 23%;
      span {
        position: absolute;
        left: 0;
        top: 0;
        width: 10px;
        height: 10px;
        background-color: #226667;
        border: none;
      }
      p {
        position: absolute;
        font-size: 10px;
        color: #909196;
        left: 16px;
        top: -2px;
      }
    }
    .right {
      & > span {
        background-color: #4c7652;
        position: absolute;
        margin-left: 17px;
      }
      & > p {
        position: absolute;
        right: 0;
        text-align: right;
      }
    }
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