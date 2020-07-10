<template>
  <div class="com-zj-map">
    <div class="zj-map" ref="map"></div>
    <div class="chart">
      <div class="circle">
        <img class="circle1" src="../../../public/static/img/imgs/xin_an/rotate_circle1.png" alt />
        <img class="circle2" src="../../../public/static/img/imgs/xin_an/rotate_circle2.png" alt />
        <img class="circle3" src="../../../public/static/img/imgs/xin_an/rotate_circle3.png" alt />
      </div>
      <img class="bg" src="../../../public/static/img/imgs/xin_an/img_maptkbg.png" alt />
      <p class="title">{{this.showCity.name + '信息安全情况'}}</p>
      <div class="label">
        <span>信息安全事件</span>
        <span>不良信息访问</span>
      </div>
      <ul>
        <li v-for="item in mapData[showCity.index].value.slice(2)" :key="item.type">
          <span class="num">{{item.value[0]}}</span>
          <span class="data-bg">
            <span class="data-left animate-right" :style="{width: (item.value[0]/mapData[showCity.index].value.slice(2)[0].value[0] * 100) + '%'}"></span>
          </span>
          <span class="type text-overfllow">{{item.name}}</span>  
          <span class="data-bg">
            <span class="data-right animate-left" :style="{width: (item.value[1]/mapData[showCity.index].value.slice(2)[0].value[1] * 100) + '%'}"></span>
          </span>
          <span class="num">{{item.value[1]}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.com-zj-map {
  display: flex;
  width: 100%;
  height: 430px;
  background-image: url("../../../public/static/img/imgs/gk_map_outline.png");
  background-size: 100% 100%;
  overflow: hidden;
  .zj-map {
    width: 50%;
    height: 430px;
  }
  .chart {
    width: 40%;
    height: 350px;
    position: relative;
    color: rgba(179, 179, 179, 1);
    font-size: 11px;
    top: 0;
    bottom: 0;
    margin: auto;
    .circle {
      position: absolute;
      left: -15px;
      top: -15px;
      height: 50px;
      width: 50px;
      z-index: 10;
      img {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transform-origin: 26px 26px;
        &.circle1 {
          animation: out 4s infinite linear;
          @keyframes out {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        }
        &.circle2 {
          animation: in 4s infinite linear;
          @keyframes in {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-360deg);
            }
          }
        }
      }
    }
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .title {
      position: absolute;
      font-size: 14px;
      width: 100%;
      text-align: center;
      margin-top: -10px;
      color: #6beebb;
    }
    .label {
      width: 100%;
      position: absolute;
      top: 35px;
      display: flex;
      justify-content: space-around;
      padding: 0 30px;
      :first-child {
        border-left: 20px solid #447569;
      }
      :last-child {
        border-left: 20px solid #87474c;
      }
      span {
        line-height: 10px;
        padding-left: 5px;
      }
    }
    ul {
      width: 100%;
      padding-top: 40px;
      padding: 70px 10px 10px 10px;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      & li:last-child {
        height: 12px;
      }
      li {
        width: 100%;
        line-height: 12px;
        display: flex;
        justify-content: space-around;
        height: 30px;
        padding: 0 5px;
        & .num:last-child {
          text-align: right;
        }
        .num {
          width: 15%;
        }
        .data-bg {
          overflow: hidden;
          position: relative;
          width: 20%;
          background-image: url("../../../public/static/img/imgs/xin_an/left_bg.png");
          background-repeat: repeat-y;
          background-size: 100%;
          .data-left {
            width: 50%;
            height: 10px;
            right: 0;
            top: 0;
            position: absolute;
            background: rgba(106, 180, 151, 0.38);
          }
          .data-right {
            width: 50%;
            height: 10px;
            left: 0;
            top: 0;
            position: absolute;
            background: rgba(215, 105, 105, 0.38);
          }
        }
        .type {
          width: 25%;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>

<script>
import data from "echarts/map/json/province/zhejiang.json";
export default {
  props: ["chartData"],
  data() {
    return {
      showCity: { name: "杭州市", index: 0 },
      timer: null,
      mapData: ""
    };
  },
  created() {
    this.mapData = data.features.map(val => {
      for (let i = 0; i < this.chartData.length; i++) {
        if (this.chartData[i][val.properties.name]) {
          return {
            name: val.properties.name,
            value: [val.properties.cp[0], val.properties.cp[1] - 0.15].concat(
              this.chartData[i][val.properties.name]
            )
          };
        }
      }
    });
  },
  mounted() {
    const chart = this.$echarts.init(this.$refs.map);
    let index = -1;
    let me = this;
    // 定时器回调函数
    var fn = function() {
      // 隐藏提示框
      chart.dispatchAction({
        type: "hideTip",
        seriesIndex: 0,
        dataIndex: index % 11
      });
      // 显示提示框
      chart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: (index + 1) % 11
      });
      // 取消高亮指定的数据图形
      chart.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: index % 11
      });
      // 高亮指定的数据图形
      chart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: (index + 1) % 11
      });
      index++;
      me.showCity.name = data.features[index % 11].properties.name;
      me.showCity.index = index % 11;
    };
    this.timer = setInterval(fn, 3000);
    chart.on("mousemove", function(e) {
      me.showCity.name = e.data.name;
      me.showCity.index = e.dataIndex;
      clearInterval(me.timer);
      chart.dispatchAction({
        type: "downplay",
        seriesIndex: 0
      });
      chart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: e.dataIndex
      });
      chart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: e.dataIndex
      });
    });

    chart.on("mouseout", function(e) {
      clearInterval(me.timer);
      chart.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: e.dataIndex
      }); 
      me.timer = setInterval(fn, 3000);
    });

    this.$echarts.registerMap("zhejiang", data);
    let option = {
      geo: {
        map: "zhejiang",
        zoom: 1,
        roam: false,
        itemStyle: {
          normal: {
            shadowColor: "#053f40",
            shadowOffsetX: 5,
            shadowOffsetY: 15
          }
        }
      },
      series: [
        {
          type: "map",
          roam: false,
          scaleLimit: {
            max: 1,
            min: 1
          },
          label: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 12,
                color: "#DADADA"
              }
            },
            emphasis: {
              textStyle: {
                color: "#e8cf41"
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: "#267f6d",
              borderWidth: 1.5,
              areaColor: "#0d524d"
            },
            emphasis: {
              areaColor: "#25776b",
              borderColor: "#62dcab",
              borderWidth: 2
            }
          },
          zoom: 1,
          map: "zhejiang",
          data: this.mapData
        },
        // {
        //   type: "effectScatter",
        //   coordinateSystem: "geo",
        //   showEffectOn: "render",
        //   symbolSize: 8,
        //   rippleEffect: {
        //     period: 3,
        //     scale: 3,
        //     brushType: "fill"
        //   },
        //   hoverAnimation: true,
        //   itemStyle: {
        //     normal: {
        //       color: "#e8cf41",
        //       shadowBlur: 10
        //     }
        //   },
        //   data: this.mapData
        // }
      ]
    };
    chart.setOption(option);
    window.addEventListener("resize", () => {
      chart.resize();
    });
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }

};
</script>