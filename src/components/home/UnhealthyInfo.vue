<template>
  <div class="unhealthy-info">
    <div class="chart2" ref="chart2"></div>
  </div>
</template>

<style lang="scss" scoped>
.unhealthy-info {
  height: 220px;
  width: 100%;
  font-size: 13px;
  .chart2 {
    width: 100%;
    height: 100%;
  }
}
</style>
<script>
export default {
  props: ["chartData"],

  mounted() {
    let colorList = [
      "#baa19a",
      "#c68726",
      "#779f84",
      "#95c7ae",
      "#d08365",
      "#689ea8",
      "#67a0a9",
      "#314453",
      "#bd3630",
      "#6f7074"
    ];
    const chart2 = this.$echarts.init(this.$refs.chart2);
    let option2 = {
      tooltip: this.$store.state.tooltip[0],
      series: [
        {
          name: "不良事件",
          // minShowLabelAngle: 20,
          startAngle: 120,
          avoidLabelOverlap: true,
          type: "pie",
          radius: ["20%", "55%"],
          center: ["50%", "50%"],
          roseType: "radius",
          label: {
            show: true,
            textStyle: {
              rich: {
                title: {
                  fontSize: 11
                },
                icon: {
                  width: 12,
                  height: 12,
                  backgroundColor: {
                    image: `${require("../../../public/static/img/icons/icon_add.png")}`
                  }
                },
                num: {
                  fontSize: 11
                }
              }
            },
            formatter: function({ data }) {
              return (
                "{title|" +
                data.name +
                "}" +
                "\n" +
                "{num|" +
                data.value +
                "}" +
                "  " +
                "{icon|" +
                " " +
                "}" +
                "{num|" +
                data.add +
                "}"
              );
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                return colorList[params.dataIndex];
              }
            }
          },
          emphasis: {
            label: {
              show: true
            }
          },
          data: this.chartData.map(item => {
            return { value: item.value, name: item.name, add: item.add };
          })
        }
      ]
    };
    chart2.setOption(option2);
    window.addEventListener("resize", () => {
      chart2.resize();
    });
  }
};
</script>