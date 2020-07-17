<template>
  <div class="com-visittop" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="chart" ref="chart"></div>
    <div class="x">访问量</div>
    <div class="ctrl">
      <p class="tab">
        <span :class="tab == 'left' ? 'active': ''" @click="showChart('left')">本省接入网站访问排名</span>
        <span :class="tab == 'right' ? 'active': ''" @click="showChart('right')">本省主体网站访问排名</span>
      </p>
      <ul>
        <li>
          <img
            @click="showChart('day')"
            :src="require(`../../../public/static/img/icons/icon_day_${iconCheck == 'day'? 'click': 'normal'}@2x.png`)"
            alt
          />
        </li>
        <li>
          <img
            @click="showChart('week')"
            :src="require(`../../../public/static/img/icons/icon_week_${iconCheck == 'week'? 'click': 'normal'}@2x.png`)"
            alt
          />
        </li>
        <li>
          <img
            @click="showChart('month')"
            :src="require(`../../../public/static/img/icons/icon_month_${iconCheck == 'month'? 'click': 'normal'}@2x.png`)"
            alt
          />
        </li>
        <li>
          <img
            @click="showChart('quarter')"
            :src="require(`../../../public/static/img/icons/icon_quarter_${iconCheck == 'quarter'? 'click': 'normal'}@2x.png`)"
            alt
          />
        </li>
        <li>
          <img
            @click="showChart('year')"
            :src="require(`../../../public/static/img/icons/icon_year_${iconCheck == 'year'? 'click': 'normal'}@2x.png`)"
            alt
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.com-visittop {
  padding-top: 20rem;
  height: 400rem;
  width: 100%;
  position: relative;
  .chart {
    width: 100%;
    height: 100%;
  }
  .x {
    position: absolute;
    bottom: 1%;
    right: 0;
    color: #909196;
  }
  .ctrl {
    ul {
      position: absolute;
      top: 80rem;
      li {
        img {
          width: 100%;
          height: 100%;
        }
        margin-left: 5rem;
        display: block;
        width: 25rem;
        height: 25rem;
        margin-bottom: 10rem;
      }
    }
    .tab {
      width: 100%;
      position: absolute;
      top: 25rem;
      span {
        &:first-child {
          border-right: none;
        }
        &:last-child {
          border-left: none;
        }
        &.active {
          border: 1rem solid #39a397;
          color: #6beebb;
        }
        display: inline-block;
        height: 25rem;
        line-height: 25rem;
        width: 50%;
        color: #929294;
        border: 1rem solid #4a515b;
        font-size: 12rem;
        text-align: center;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      tab: "left",
      iconCheck: "day",
      chartData: "",
      timer: null
    };
  },
  mounted() {
    this.chartData = this.$store.state.controlData.access_website_visit_day;
    console.log('test', this.chartData)
    this.initChart();
    this.timer = setInterval(() => {
      if (this.tab == "left") {
        this.showChart("right");
      } else {
        this.showChart("left");
      }
    }, 4000);
  },
  methods: {
    mouseLeave() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
      if (this.tab == "left") {
        this.showChart("right");
      } else {
        this.showChart("left");
      }
    }, 4000);

    },
    mouseEnter() {
      clearInterval(this.timer)
      
    },
    showChart(chartType) {
      if (chartType == "left" || chartType == "right") {
        this.tab = chartType;
      } else {
        this.iconCheck = chartType;
      }
      if (this.tab == "left") {
        switch (this.iconCheck) {
          case "day":
            this.chartData = this.$store.state.controlData.access_website_visit_day;
            console.log("left1", this.chartData);
            break;
          case "week":
            this.chartData = this.$store.state.controlData.access_website_visit_week;
            console.log("left2", this.chartData);
            break;
          case "month":
            this.chartData = this.$store.state.controlData.access_website_visit_month;
            console.log("left3", this.chartData);
            break;
          case "quarter":
            this.chartData = this.$store.state.controlData.access_website_visit_quarter;
            console.log("left4", this.chartData);
            break;
          case "year":
            this.chartData = this.$store.state.controlData.access_website_visit_year;
            console.log("left5", this.chartData);
            break;
        }
      } else {
        switch (this.iconCheck) {
          case "day":
            this.chartData = this.$store.state.controlData.main_website_visit_day;
            break;
          case "week":
            this.chartData = this.$store.state.controlData.main_website_visit_week;
            break;
          case "month":
            this.chartData = this.$store.state.controlData.main_website_visit_month;
            break;
          case "quarter":
            this.chartData = this.$store.state.controlData.main_website_visit_quarter;
            break;
          case "year":
            this.chartData = this.$store.state.controlData.main_website_visit_year;
            break;
        }
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
          left: "14%",
          right: "13%",
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
            show: false,
            rotate: 20,
            interval: 1,
            textStyle: {
              color: "#a7a7a9",
              fontSize: 11
            }
          }
        },
        yAxis: {
          data: this.chartData.map(item => item.name).reverse(),
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
            barWidth: 10,
            name: "访问量",
            type: "bar",
            itemStyle: {
              color: "#174046"
            },
            data: this.chartData.reverse(),
            label: {
              show: true,
              position: "right",
              textStyle: {
                color: "#a7a7a9"
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
  }
};
</script>