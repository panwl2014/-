<template>
  <div class="home" v-if="homeData">
    <Header :title="'浙江省通信大数据综合管理平台'"></Header>
    <div class="main">
      <div class="left">
        <div class="part">
          <!-- 网站信息统计 -->
          <Title :title="'网站信息统计'"></Title>
          <div class="web-statistics">
            <ul>
              <li v-for="(item, index) in homeData.website_statistics" :key="index">
                <p class="type">{{item.name}}</p>
                <p class="value">
                  <countTo
                    :startVal="index == 3 ? 0 :+catchNum[index]"
                    :endVal="index == 3 ? +item.value.substr(0, item.value.length - 1) : +item.value"
                    :duration="2500"
                  ></countTo>
                  <span v-if="index == 3">%</span>
                </p>
              </li>
            </ul>
            <div class="web-top10">
              <p class="title">活跃网站TOP5排行</p>
              <ul>
                <li v-for="(item, index) in homeData.active_website.slice(0,5)" :key="index">
                  <span :class="index < 3 ? 'top3 top': 'top'">{{index + 1}}</span>
                  <span class="name">{{item.name}}</span>
                  <span class="url">{{item.ip}}</span>
                  <span class="bg">
                    <span
                      class="data animate-left"
                      :style="{width: item.value / homeData.active_website[0].value * 100 + '%'}"
                    ></span>
                  </span>
                  <span class="line"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="part">
          <Title :title="'IDC/ISP接入企业统计'"></Title>
          <div class="idc-isp">
            <ul>
              <li v-for="(item, index) in homeData.enterprise_statistics" :key="item.type">
                <img :src="require(`../../public/static/img/icons/${IDC[index].url}.png`)" alt />
                <p>
                  <span class="type">{{item.name}}</span>
                  <span class="num">{{item.value}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="part">
          <Map :mapData="homeData.enterprise_distributed_statistics"></Map>
        </div>
      </div>

      <div class="control-center">
        <!-- 主页入口 -->
        <!-- 安全评分 -->
        <div class="part">
          <div class="score">
            <span class="time">2020-06-13</span>
            <span>全省网络健康状态</span>
            <el-rate
              v-model="scoreValue"
              disabled
              :colors="['#2dffe4', '#2dffe4', '#2dffe4']"
              disabled-void-color="rgba(255,255,255,0.2)"
            ></el-rate>
          </div>
        </div>
        <div class="part">
          <Nav></Nav>
        </div>
        <!-- 反诈监测 -->
        <div class="part center-bottom">
          <div class="center-bottom-left">
            <Title :title="'反诈监测情况'"></Title>
            <Monitor></Monitor>
          </div>
          <div class="center-bottom-right">
            <Title :title="'不良信息事件'"></Title>
            <UnhealthyInfo :chartData="homeData.unhealthy_type"></UnhealthyInfo>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="part">
          <Title :title="'网络安全'"></Title>
          <WebSecurity :type="'网安事件'" :chartData="homeData.web_security"></WebSecurity>
        </div>
        <div class="part">
          <div class="jiang-m-r">
            <li v-for="(item, index) in homeData.zombie_creep_statistics" :key="index">
              <div class="value">
                <countTo :startVal="+catchNum1[index]" :endVal="+item.value" :duration="2500"></countTo>
              </div>
              <div class="name">{{item.name}}</div>
            </li>
          </div>
        </div>
        <div class="part">
          <Title :title="'信安事件数TOP10接入商'"></Title>
          <WebSecurityEvent :chartData="homeData.unhealthy_info.slice(0,10)"></WebSecurityEvent>
        </div>
        <div class="part">
          <Title :title="'信安事件数各地市分布情况'"></Title>
          <InfoSecurityCity :chartData="homeData.unhealthy_info.map(item => ({name: item.name, value: item.value}))"></InfoSecurityCity>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  // overflow: hidden;
  padding-top: 10px;
  width: 100%;
  height: 100%;
  .main {
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    // border: 1px solid red;
    .left,
    .right {
      // border: 1px solid red;
      display: flex;
      flex-wrap: wrap;
      width: 22%;
      align-content: space-between;
      height: calc(100vh - 70px);
      .part {
        width: 100%;
        // border: 1px solid red;
      }
    }
    .right {
      // overflow: hidden;
      .part {
        .jiang-m-r {
          width: 100%;
          display: flex;
          justify-content: space-between;
          li {
            color: #386e68;
            text-align: center;
            width: 31%;
            .name,
            .value {
              width: 100%;
              background: rgba(46, 66, 76, 0.25);
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .name {
              font-size: 12px;
              height: 20px;
              margin-top: 10px;
              margin-bottom: 15px;
            }
            .value {
              position: relative;
              &::after {
                position: absolute;
                top: 0;
                left: 0;
                content: "";
                display: inline-block;
                width: 0;
                height: 0;
                border: 5px solid #6beebb;
                border-right-color: transparent;
                border-bottom-color: transparent;
              }
              height: 40px;
              line-height: 40px;
              font-size: 45px;
              font-family: "font-Family-self";
            }
          }
        }
      }
    }
    .left {
      .part {
        .web-statistics {
          font-size: 12px;
          color: #fff;
          ul {
            padding-left: 10px;
            margin-top: 10px;
            justify-content: space-between;
            // border: 1px solid red;
            display: flex;
            li {
              width: 23%;
              text-align: center;
              .type {
                border-left: 1px solid rgba(9, 105, 116, 1);
                background: rgba(24, 44, 51, 0.84);
                padding: 5px 0;
              }
              .value {
                font-family: "font-Family-self";
                width: 100%;
                font-size: 40px;
                color: #4cfdca;
                line-height: 40px;
              }
            }
          }
        }
        .web-top10 {
          margin-top: 20px;
          font-size: 12px;
          color: #fff;
          padding-left: 10px;
          ul {
            flex-wrap: wrap;
            padding: 10px;
            background-image: url("../../public/static/img/imgs/home_top5_outline.png");
            background-size: 100% 100%;
            li {
              border-bottom: 1px dashed rgba(107, 238, 187, 0.1);
              color: #999;
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 30px;
              position: relative;
              padding-right: 20px;
              .line {
                height: 1px;
                width: 10px;
                background-color: #69edbe;
                position: absolute;
                bottom: 0;
                right: 0;
              }
              .top {
                color: #fff;
                background-color: #414845;
                width: 30px;
                border-radius: 3px;
                &.top3 {
                  background-color: #ac702a;
                }
              }
              .bg {
                height: 6px;
                width: 30%;
                background: rgba(117, 120, 124, 0.26);
                position: relative;
                // overflow: hidden;
                .data {
                  position: absolute;
                  left: 0;
                  width: 50%;
                  height: 100%;
                  background: rgba(107, 238, 187, 0.5);
                }
              }
            }
          }
        }
        .idc-isp {
          color: #fff;
          ul {
            padding-left: 10px;
            display: flex;
            flex-wrap: wrap;
            li {
              display: flex;
              padding: 15px 0;
              &:nth-child(1),
              &:nth-child(2) {
                border-bottom: 1px dashed rgba(107, 238, 187, 0.1);
              }
              img {
                width: 40px;
                height: 40px;
              }
              p {
                display: flex;
                flex: 1;
                flex-wrap: wrap;
                align-content: space-around;
                span {
                  width: 100%;
                  margin-left: 10px;
                }
                .type {
                  font-size: 11px;
                  color: #999;
                }
                .num {
                  font-size: 16px;
                  color: #6beebb;
                }
              }
              width: 50%;
            }
          }
        }
      }
    }
    .control-center {
      // overflow: hidden;
      padding: 0 10px;
      height: calc(100vh - 70px);
      width: 56%;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      .score {
        width: 100%;
        height: 75px;
        background-image: url("../../public/static/img/imgs/score_bg.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 75% 75%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        color: #2dffe4;
        span {
          margin: 0 10px;
        }
      }
      .part {
        // border: 1px solid red;
        width: 100%;
        &.center-bottom {
          .center-bottom-left {
            width: 60%;
            margin-right: 30px;
          }
          .center-bottom-right {
            width: 40%;
          }
          display: flex;
        }
      }
    }
  }
}
</style>
<script>
import Header from "../components/Header";
import Title from "../components/Title";
import Nav from "../components/home/Nav";
import Map from "../components/home/Map";
import WebSecurity from "../components/home/WebSecurity";
import UnhealthyInfo from "../components/home/UnhealthyInfo";
import WebSecurityEvent from "../components/home/InfoSecurityEvent";
import Monitor from "../components/home/Monitor";
import InfoSecurityCity from '../components/home/InfoSecurityCity'

import countTo from "vue-count-to";
export default {
  data() {
    return {
      homeData: "", // 默认数据,
      catchNum: [0, 0, 0, 0],
      catchNum1: [0, 0, 0, 0],
      IDC: [
        { url: "icon_all" },
        { url: "icon_buliang" },
        { url: "icon_weibaobei" },
        { url: "icon_yichang" }
      ],
      scoreValue: 4.5,
      data1: [
        {
          id: 1,
          type: "商务网站",
          num: 1000,
          IDC: "杭州**公司",
          num2: 1000
        },
        { id: 2, type: "商务网站", num: 900, IDC: "杭州**公司", num2: 900 },
        { id: 3, type: "商务网站", num: 800, IDC: "杭州**公司", num2: 800 },
        { id: 4, type: "商务网站商务", num: 700, IDC: "杭州**公司", num2: 700 },
        { id: 5, type: "商务网站", num: 600, IDC: "杭州**公司", num2: 600 },
        { id: 6, type: "商务网站", num: 500, IDC: "杭州**公司", num2: 500 },
        { id: 7, type: "商务网站", num: 400, IDC: "杭州**公司", num2: 400 },
        { id: 8, type: "商务网站", num: 300, IDC: "杭州**公司", num2: 300 },
        { id: 9, type: "商务网站", num: 200, IDC: "杭州**公司", num2: 200 },
        { id: 10, type: "商务网站", num: 100, IDC: "杭州**公司", num2: 100 }
      ],
      title1: ["网安事件数", "接入商", "地市", "网安事件数"]
    };
  },
  components: {
    Header,
    Title,
    Nav,
    UnhealthyInfo,
    Map,
    WebSecurity,
    WebSecurityEvent,
    countTo,
    Monitor,
    InfoSecurityCity
  },
  created() {
    this.$http.get("/showData/getData/main").then(({ data }) => {
      data.nameSpace = "homeData";
      this.$store.commit("setData", data);
      this.homeData = this.$store.state.homeData;
    });
    setInterval(() => {
      this.$http.get("/showData/getData/main").then(({ data }) => {
        data.nameSpace = "homeData";
        this.$store.commit("setData", data);
        this.homeData = this.$store.state.homeData;
        console.log("轮询", data);
        setTimeout(() => {
          this.catchNum = this.homeData.website_statistics.map(
            item => item.value
          );
          this.catchNum1 = this.homeData.zombie_creep_statistics.map(
            item => item.value
          );
        }, 5000);
      });
    }, 5000);
  }
};
</script>