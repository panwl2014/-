<template>
  <div class="ISMSTop">
    <p class="tab">
      <span :class="check == 'left' ? 'active': ''" @click="showChart('left')">违规类型</span>
      <span :class="check == 'right' ? 'active': ''" @click="showChart('right')">当前巡检违规机房</span>
    </p>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <span :class="index <= 2 ? 'top mark': 'top'">{{index + 1}}</span>
        <span class="type">{{item.name}}</span>
        <span class="bg">
          <span class="data" :style="{width: (item.value/data[0].value * 100) + '%'}"></span>
        </span>
        <span class="num">{{item.value}}</span>
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
  created() {
     this.data = this.$store.state.infoSecurityData.ISMS_type_statistics
  },
  components: {},
  methods: {
    showChart(chartType) {
      this.check = chartType
      switch (chartType) {
        case 'left':
          this.data = this.$store.state.infoSecurityData.ISMS_type_statistics
          break;
        case 'right':
          this.data = this.$store.state.infoSecurityData.ISMS_engine_room_statistics
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ISMSTop {
  margin-top: 15rem;
  width: 100%;
  padding: 10rem;
  .tab {
    width: 100%;
    margin-bottom: 30rem;
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
  ul {
    width: 100%;
    margin-top: 20rem;
    li {
      width: 100%;
      font-size: 12rem;
      justify-content: space-between;
      display: flex;
      height: 12px;
      margin: 20rem 0;
      align-items: center;
      .top {
        font-size: 10rem;
        background-color: #3f3f3f;
        color: rgba(128, 128, 128, 1);
        width: 20px;
        height: 16px;
        line-height: 16px;
        margin-right: 10rem;
        text-align: center;
        border-radius: 50%;
        &.mark {
          color: #fff;
          background-color: #995e2c;
        }
      }
      .type {
        width: 40%;
        color: #b9babc;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .bg {
        background-image: url("../../../public/static/img/imgs/chart_bar_bg_op.png");
        width: 50%;
        height: 8rem;
        position: relative;
        overflow: hidden;
        .data {
          width: 55%;
          height: 8rem;
          position: absolute;
          left: 0;
          background-image: url("../../../public/static/img/imgs/chart_bar_bg.png");
          animation: show 1.2s forwards;
          @keyframes show {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0%);
            }
          }
        }
      }
      .num {
        width: 15%;
        text-align: right;
        color: #b9babc;
        font-size: 12rem;
      }
    }
  }
}
</style>