<template>
  <div class="com-charts">
    <div id="pieCharts" :style="{height: height}" ref="pieCharts"></div>
  </div>
</template>
<style lang="scss" scoped>
.com-charts {
  #pieCharts {
    width: 100%;
    position: relative;
  }
}
</style>

<script>
export default {
  props: ["chartData", "height"],
  mounted() {
    let allNum = this.chartData.reduce((prev, item) => prev + item.value, 0);
    const pieCharts = this.$echarts.init(this.$refs.pieCharts);
    let option = {
      
      tooltip: this.$store.state.tooltip[0],
      // 小图标表
      legend: {
        orient: "vertical",
        right: "0",
        top: "center",
        icon: "pin",
        height: "100%",
        itemWidth: 10,
        itemHeight: 5,
        itemGap: 5,
        textStyle: {
          color: "#7B949B",
          fontSize: "10 ",
          rich: {
            name: {
              width: 100,
              align: "left"
            },
            value: {
              width: 30,
              align: "right"
            }
          }
        },
        formatter(name) {
          let data = option.series[0].data;
          let num = 0;
          let cur_nums = 0;
          for (let i = 0; i < data.length; i++) {
            if (name == data[i].name) {
              cur_nums = data[i].value;
            }
          }
          num = "{name|" + name + "}" + "{value|" + cur_nums + "}";
          return num;
        }
      },
      // 大图表
      series: [
        {
          name: "",
          type: "pie",
          radius: ["40%", "60%"],
          center: ["23%", "50%"],
          avoidLabelOverlap: false,
          color: [
            "#805723",
            "#4c4271",
            "#8b5553",
            "#937e11",
            "#1d7b4c",
            "#197885",
            "#26649a"
          ],
          label: {
        normal: {
          padding: [5, 0, 0, 0],
          textStyle: {
            fontWeight: "normal",
            color: "#739B9C",
            fontSize: 13,
            lineHeight: 20
          },
          formatter: function() {
            return `总数\n${allNum}`
          },
          position: "center",
          show: true
        }
      },
          // 显示文字
          emphasis: {
            label: {
              show: false
            }
          },
          labelLine: {
            show: false
          },
          data: this.chartData,
          itemStyle: {
            borderWidth: 1,
            borderColor: "#04111F"
          }
        }
      ]
    };
    (option.formatter = "{a} <br/>{b}: {c} ({d}%)"),
      pieCharts.setOption(option);
    window.addEventListener("resize", () => {
      pieCharts.resize();
    });
  }
};
</script>