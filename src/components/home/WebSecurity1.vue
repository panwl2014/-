<template>
  <div class="com-web-security">
      <div class="chart1" ref="chart1"></div>
  </div>
</template>

<style lang="scss" scoped>
.com-web-security {
  font-size: 13px;
  width: 100%;
  height: 160px;
    .chart1 {
      width: 100%;
      height: 100%;
    }
}
</style>
<script>
export default {
props: ['type', 'chartData'],

  mounted() {
    console.log(this.chartData)
    // let colorList1 = ["#7b645c", "#3b616e", "#284f4c", "#505d65"];
    const chart1 = this.$echarts.init(this.$refs.chart1);
    let option = {
     series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: '{value}%'},
            data: [{value: 50, name: '完成率'}]
        },
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: '{value}%'},
            data: [{value: 50, name: '完成率'}]
        }
    ]
    };
    chart1.setOption(option);
    window.addEventListener("resize", () => {
      chart1.resize();
    });
  }
};
</script>