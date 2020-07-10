<template>
  <div class="com-jiangMuRu">
    <div class="box" ref="jiangMuRu"></div>
    <div class="label">被下载次数（单位: 万）</div>
  </div>
</template>
<script>
export default {
  props: ['chartData'],
  methods: {
    initChart() {
      let fontColor = "#9e9fa3";
      let chart = this.$echarts.init(this.$refs.jiangMuRu);
      let option = {
        tooltip: this.$store.state.tooltip[1],
        grid: {
          left: "10",
          right: "18%",
          top: "15%",
          bottom: "5%",
          containLabel: true
        },
        // tooltip: {
        //     confine: true,
        //   trigger: "axis",
        //   axisPointer: {
        //     label: {
        //       show: true,
        //       textStyle: {
        //           fontSize: 10,
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
        legend: {
          show: false
        },
        xAxis: [
          {
            name: '      恶意程序名',
            nameLocation: 'end',
            nameTextStyle: {
                color: '#9e9fa3',
                fontSize: 10,
                align: 'center',
            },
            type: "category",
            // boundaryGap: true,
            boundaryGap: ['10%', '10%'],
            axisLabel: {
              interval: 0,
              rotate: 38,
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
            data: this.chartData.map(item => item.name)
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
          },
        ],
        series: [
          {
            name: "被下载次数",
            type: "bar",
            barWidth: 5,
            itemStyle: {
              normal: {
                color: "#367a6a",
              }
            },
            data: this.chartData
          },
        ]
      };
      chart.setOption(option, true);
      window.addEventListener("resize", () => {
        chart.resize();
      });
    }
  },
  mounted() {
    this.initChart();
  }
};
</script>

<style lang="scss" scoped>
.com-jiangMuRu {
  width: 100%;
  height: 170px;
  position: relative;
  // border: 1px solid red;
  .box {
    width: 100%;
    height: 100%;
  }
  .label {
    width: 100%;
    font-size: 10px;
    color: #9e9fa3;
    position: absolute;
    top: 0;
    margin-left: 10px;
  }
}
</style>