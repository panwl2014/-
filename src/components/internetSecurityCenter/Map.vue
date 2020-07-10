<template>
  <div class="com-world-map">
    <div class="world-map" ref="map"></div>
    <div class="attack-from-label">攻击源</div>
    <div class="attack-type-label">攻击类型</div>
    <div class="attack-from">
      <div class="title">攻击源</div>
      <div class="info">
        <div class="times">
          发动攻击
          <span>{{(47239482).toLocaleString('en-US')}}</span>次
        </div>
        <ul>
          <li v-for="item in data" :key="item.url">
            <img
              :src="require('../../../public/static/img/imgs/wangan/img_' + item.url + '.png')"
              alt
            />
            <div class="right">
              <p class="text">
                <span class="name">{{item.name.toLocaleString('en-US')}}</span>
                <span class="value">{{item.value.toLocaleString('en-US')}}</span>
              </p>
              <div class="bg">
                <div class="data animate-left"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="attack-type">
      <img class="animate-circle" src="../../../public/static/img/imgs/wangan/animate_circle.png" alt="">
      <div class="circle">
        <p class="number">{{(550000).toLocaleString('en-us')}}</p>
        <p>攻击总数</p>
      </div>
      <div class="title">浙江省近7日遭受攻击统计</div>
      <ul>
        <li v-for="item in data1" :key="item.type">
          <span class="type">{{item.type}}</span>
          <span class="value">{{item.value.toLocaleString('en-us')}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.com-world-map {
  width: 100%;
  height: 430px;
  background-image: url("../../../public/static/img/imgs/gk_map_outline.png");
  background-size: 100% 100%;
  position: relative;
  .attack-from-label,
  .attack-type-label {
     background-size: 100% 100%;
     background-repeat: no-repeat;
    height: 55px;
    width: 25px;
    position: absolute;
    font-size: 11px;
    color: rgba(179, 179, 179, 1);
    padding: 3px 5px;
    line-height: 1.2;
  }
  .attack-type-label {
    right: 0;
    top: 220px;
    height: 55px;
    padding-top: 1px;
    padding-left: 8px;;
    background-image: url('../../../public/static/img/imgs/wangan/wangan_type_bg.png');
    background-position: 2px 0;
  }
  .attack-from-label {
    background-image: url('../../../public/static/img/imgs/wangan/wangan_form_bg.png');
    background-position: -2px 0;
    line-height: 1.5;
    left: 0;
    top: 40px;
  }
  .attack-from {
    width: 250px;
    height: 340px;
    position: absolute;
    top: 40px;
    left: 40px;
    background-image: url("../../../public/static/img/imgs/wangan/img_gjybg.png");
    background-size: 100% 100%;
    padding: 0 20px;
    .title {
      font-size: 15px;
      color: rgba(157, 255, 215, 1);
      margin-top: 4px;
    }
    .info {
      margin-top: 20px;
      font-size: 12px;
      color: #fff;
      .times {
        height: 50px;
        padding: 10px 0;
        letter-spacing: 2px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.75);
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          color: #e4da39;
          font-family: "font-Family-number";
          font-size: 20px;
          padding: 0 5px;
        }
      }
      ul {
        height: 230px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
        li {
          width: 100%;
          display: flex;
          img {
            width: 35px;
            margin-right: 8px;
          }
          .right {
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            flex: 1;
            .text {
              width: 100%;
              display: flex;
              justify-content: space-between;
              .value {
                font-family: "font-Family-self";
                font-size: 24px;
                line-height: 20px;
              }
            }
            .bg {
              background-color: #3b4a4e;
              height: 4px;
              width: 100%;
              border-radius: 2px;
              position: relative;
              overflow: hidden;
              .data {
                position: absolute;
                left: 0;
                width: 50%;
                height: 100%;
                border-radius: 2px;
                background-color: #999638;
              }
            }
          }
        }
      }
    }
  }
  .attack-type {
    .animate-circle {
      width: 115px;
      position: absolute;
      top: 26px;
      left: 11px;
      animation: animate_circle 6s infinite linear;
      @keyframes animate_circle {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
    width: 340px;
    height: 160px;
    color: #fff;
    position: absolute;
    top: 220px;
    right: 40px;
    background-image: url("../../../public/static/img/imgs/wangan/img_gjzsbg.png");
    background-size: 100%;
    background-repeat: no-repeat;
    .circle {
      width: 100px;
      height: 70px;
      position: absolute;
      top: 55px;
      left: 18px;
      color: #fff;
      font-size: 13px;
      text-align: center;
      .number {
        font-size: 35px;
        line-height: 35px;
        font-family: "font-Family-self";
      }
    }
    .title {
      font-size: 13px;
      line-height: 30px;
      position: absolute;
      left: 170px;
    }
    ul {
      top: 30px;
      right: 10px;
      width: 170px;
      height: 110px;
      position: absolute;
      font-size: 12px;
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      li {
        line-height: 20px;
        font-size: 11px;
        padding: 0 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 20px;
        background-color: rgba(113, 62, 62, .57);
        .value {
          font-size: 23px;
           font-family: "font-Family-self";
        }
      }
    }
  }
  .world-map {
    width: 100%;
    height: 430px;
  }
}
</style>

<script>
import "echarts/map/js/world.js";
import data from "echarts/map/json/world.json";
// import data from "echarts/map/json/province/zhejiang.json";
export default {
  data() {
    return {
      data: [
        { name: "澳大利亚", value: 2000000, url: "AUS" },
        { name: "美国", value: 1500000, url: "USA" },
        { name: "印度", value: 1200000, url: "IND" },
        { name: "中国香港", value: 800000, url: "HKG" },
        { name: "加拿大", value: 500000, url: "CAN" }
      ],
      data1: [
        { type: "DDOS攻击", value: 200000 },
        { type: "僵尸网络", value: 200000 },
        { type: "木马", value: 200000 },
        { type: "蠕虫", value: 200000 }
      ]
    };
  },
  mounted() {
    const chart = this.$echarts.init(this.$refs.map);
    // 地区、坐标、数据
    //   const coord = data.features.map(val => {
    //     return {
    //       name: val.properties.name,
    //       value: [val.properties.cp[0], val.properties.cp[1] - 0.15, 123]
    //     };
    //   });
    const coord = data.features
      .map(val => {
        if (typeof val.geometry.coordinates[0][0][0] == "number") {
          return {
            name: val.properties.name,
            value: val.geometry.coordinates[0][0]
          };
        } else {
          return {
            name: val.properties.name,
            value: val.geometry.coordinates[0][0][0]
          };
        }
      })
      .splice(5, 15);

    const lines_coord = [];
    coord.forEach((v, index) => {
      index > 0 &&
        lines_coord.push({
          coords: [v.value, [120.153576, 30.137459]]
        });
    });
    //   this.$echarts.registerMap("world", data);
    let option = {
      tooltip: {
        show: false
        // trigger: "item",
        // backgroundColor: "rgba(1, 1, 1, 0)",
        // borderColor: "rgba(1, 1, 1, 0)",
        // // padding: [10, 20],
        // borderWidth: 1,
        // //   position: [20, 20],
        // formatter: function(params) {
        //   return `
        //     <div style="background-image: url('${require("../../../public/static/img/imgs/img_map_text_bg2@2x.png")}'); background-size: 100% 100%; width: 150px; height: 80px; padding: 10px 20px">
        //         <p style="font-size: 12px">${params.name}</p>
        //         <p style="font-size: 12px">接入互联网数: <span style="font-weight: 800; font-size: 16px"> ${
        //           params.data.value[2]
        //         }</span></p>
        //         <p style="font-size: 12px">接入网站数量: <span style="font-weight: 800; font-size: 16px"> ${
        //           params.data.value[2]
        //         }</span></p>
        //     </div>
        //     `;
        // }
      },

      geo: {
        map: "world",
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
              show: false,
              textStyle: {
                fontSize: 12,
                color: "#DADADA"
              }
            },
            emphasis: {
              show: false,
              textStyle: {
                color: "#fff"
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: "#18757b",
              borderWidth: 1.5,
              areaColor: "#114049"
            },
            emphasis: {
              borderColor: "#18757b",
              borderWidth: 1.5,
              areaColor: "#114049"
            }
          },
          zoom: 1,
          map: "world",
          data: coord
        },
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          showEffectOn: "render",
          symbolSize: 8,
          rippleEffect: {
            period: 3,
            scale: 3,
            brushType: "fill"
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: "#e8cf41",
              shadowBlur: 10
            }
          },
          data: coord
        },
        {
          type: "lines",
          coordinateSystem: "geo",
          zlevel: 15,

          effect: {
            show: true,
            period: 5,
            trailLength: 0,
            symbol: "arrow",
            color: "red",
            symbolSize: 8
          },
          lineStyle: {
            normal: {
              width: 1.2,
              opacity: 0.6,
              curveness: 0.2,
              color: "red",
              type: "dotted"
            }
          },
          data: lines_coord
        },
        // 杭州
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 15,
          symbolSize: 8,
          rippleEffect: {
            period: 3,
            brushType: "fill",
            scale: 6
          },
          itemStyle: {
            color: "red",
            opacity: 1
          },
          data: [{ name: "杭州", value: [120.153576, 30.137459] }]
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