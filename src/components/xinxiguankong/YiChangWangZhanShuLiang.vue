<template>
  <div class="com-charts">
    <div id="pieCharts" ref="pieCharts"></div>
  </div>
</template>
<style lang="scss" scoped>
.com-charts {
  #pieCharts {
    width: 100%;
    height: 180px;
    position: relative;
  }
}
</style>

<script>
export default {
  props: ['chartData'],
  // data() {
  //   return {
  //     data: [
  //       { value: 400, name: "未备案", color: "#575248" },
  //       { value: 4000, name: "非法经营", color: "#7c6aaa" },
  //       { value: 3000, name: "消亡停办", color: "#f7d656" },
  //       { value: 3000, name: "空壳网站", color: "#7add85" },
  //       { value: 2000, name: "空壳主体", color: "#6ac6d0" },
  //       { value: 3000, name: "管局黑/灰名单", color: "#57a0fb" },
  //       { value: 400, name: "工信部黑/灰名单", color: "#865451" }
  //     ]
  //   };
  // },
  mounted() {
    let allNum = this.chartData.reduce((prev, item) => prev + item.value, 0);
    const pieCharts = this.$echarts.init(this.$refs.pieCharts);
    let option = {
      // 标题
      title: {
        top: "center",
        left: "12%",
        text: "{title|" + "总数}" + "\n" + "{num|" + allNum + "}",
        textStyle: {
          fontWeight: "normal",
          color: "#739B9C",
          lineHeight: 20,
          rich: {
            title: {
              fontSize: 15,
              width: 60,
              align: "center"
            },
            num: {
              fontSize: 15,
              width: 60,
              align: "center"
            }
          }
        }
      },
      tooltip: this.$store.state.tooltip[0],
      // tooltip: {
      //   transitionDuration: 0,
      //   trigger: "item",
      //   formatter: "{a} <br/>{b}: {c} ({d}%)",
      //   textStyle: {
      //     color: "#fff",
      //     fontSize: 12
      //   }
      // },

      // 小图标表
      legend: {
        orient: "vertical",
        right: 0,
        top: "center",
        icon: "pin",
        height: "90%",
        itemWidth: 10,
        itemHeight: 5,
        textStyle: {
          color: "#7B949B",
          fontSize: "11 ",
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
          name: "目标分布",
          type: "pie",
          radius: ["40%", "60%"],
          center: ["23%", "50%"],
          avoidLabelOverlap: false,
          color: [
            "#575248",
            "#7c6aaa",
            "#f7d656",
            "#7add85",
            "#6ac6d0",
            "#57a0fb",
            "#865451"
          ],
          label: {
            show: false,
            position: "top"
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
    option.formatter = "{a} <br/>{b}: {c} ({d}%)",
    pieCharts.setOption(option);
    window.addEventListener("resize", () => {
      pieCharts.resize();
    });
  }
};
</script>