<template>
  <div class="ISMSTop">
    <p class="tab">
      <span :class="check == 'left' ? 'active': ''" @click="showChart('left')">不良信息网站访问TOP10</span>
      <span :class="check == 'right' ? 'active': ''" @click="showChart('right')">网站访问流量异常</span>
    </p>
    <ul>
      <li>
        <span class="top">排名</span>
        <span class="url">不良信息网站</span>
        <span class="num">访问量</span>
      </li>
      <li v-for="(item, index) in data" :key="index">
        <span class="top">{{index + 1}}</span>
        <span class="url">{{item.name}}</span>
        <span class="num">{{item.value.toLocaleString()}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '',
      check: "left"
    };
  },
  components: {},
  created() {
    this.data = this.$store.state.infoSecurityData.unhealthy_info_website_visit;
  },
  methods: {
    showChart(chartType) {
      this.check = chartType
      switch (chartType) {
        case "left":
          this.data = this.$store.state.infoSecurityData.unhealthy_info_website_visit;
          break;
        case "right":
          this.data = this.$store.state.infoSecurityData.abnormal_flow_website_visit;
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ISMSTop {
  width: 100%;
  padding: 10px;
  .tab {
    width: 100%;
    span {
      &:first-child {
        border-right: none;
      }
      &:last-child {
        border-left: none;
      }
      &.active {
        border: 1px solid #39a397;
        color: #6beebb;
      }
      display: inline-block;
      height: 25px;
      line-height: 25px;
      width: 50%;
      color: #929294;
      border: 1px solid #4a515b;
      font-size: 12px;
      text-align: center;
    }
  }
  ul {
    width: 100%;
    margin-top: 20px;
    li:nth-of-type(odd) {
      background-color: rgba(81, 189, 147, 0.2);
    }
    li {
      width: 100%;
      font-size: 12px;
      justify-content: space-between;
      display: flex;
      height: 25px;
      margin: 2px 0;
      align-items: center;
      color: #b9babc;
      .top {
        width: 20%;
        // color: rgba(128, 128, 128, 1);
        margin-right: 10px;
        text-align: center;
      }
      .url {
        width: 50%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .num {
        width: 20%;
        text-align: right;
        font-size: 11px;
        padding-right: 10px;
      }
    }
  }
}
</style>