<template>
  <div class="chart" ref="chart"></div>
</template>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 224px;
}
</style>

<script>
export default {
  data() {
    return {
      data: ''
    }
  },
  created() {
    this.data = this.$store.state.infoSecurityData.info_security_enterprise;
  },
  mounted() {
    const chart = this.$echarts.init(this.$refs.chart);
    let colorList = [
      "#575248",
      "#7c6aaa",
      "#f7d656",
      "#7add85",
      "#575248",
      "#865451",
      "#6ac6d0",
      "#57a0fb",
      "#f7d656",
      "#865451"
    ];
    let option = {
      angleAxis: {
        type: "category",
        data: this.data.map(item => item.name).reverse(),
        clockwise: false,
        // min: 0,
        // max: 10,
        axisLine: {
          show: false
        },
        axisTick: {
          lineStyle: {
            color: "#62a78e"
          }
        },
        axisLabel: {
          fontSize: 11,
          color: "#999"
        }
      },
      radiusAxis: {
        axisLabel: {
          show: true,
          margin: 3,
          textStyle: {
            fontSize: 10,
            color: '#999'
          },
          color: "#438b75",
          showMinLabel: false,
          showMaxLabel: true
        },
        splitLine: {
          lineStyle: {
            color: "#2c3642"
          }
        }
      },
      polar: {},
      series: [
        {
          type: "bar",
          data: this.data.map(item => item.value).reverse(),
          coordinateSystem: "polar",
          itemStyle: {
              color: e => colorList[e.dataIndex]
          }
        }
      ]
    };

    chart.setOption(option);
    window.addEventListener("resize", () => {
      chart.resize();
    });
  }
};
</script>