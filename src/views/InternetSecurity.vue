<template>
  <div class="page-internet-security" v-if="webSecurityData">
    <ChildHeader :title="'网络安全中心'"></ChildHeader>
    <div class="main">
      <div class="left">
        <div class="part">
          <Title title="网络安全事件"></Title>
          <TodaySecurity
            :chartData="webSecurityData.today_cybersecurity_incident.slice(0,3)"
            :color="color1"
            :max="webSecurityData.today_cybersecurity_incident[0].value"
          ></TodaySecurity>
          <TodaySecurity
            :chartData="webSecurityData.today_cybersecurity_incident.slice(3)"
            :color="color1"
            :max="webSecurityData.today_cybersecurity_incident[0].value"
          ></TodaySecurity>
        </div>
        <div class="part">
          <Title title="恶意程序感染事件分析"></Title>
          <div class="malware">
            <li v-for="item in webSecurityData.malicious_program" :key="item.name">
              <p>{{item.name}}</p>
              <p class="num">{{item.value}}</p>
            </li>
            <div class="all">
              <p class="num">{{webSecurityData.malicious_program.reduce((prev, item) => prev + item.value, 0)}}</p>
              <p>总数</p>
            </div>
          </div>
        </div>
        <div class="part">
          <Title title="近12月僵木蠕安全事件趋势"></Title>
          <div class="hazard-level"></div>
          <JiangMuRu :chartData="webSecurityData.serurity_last_12months"></JiangMuRu>
        </div>
      </div>

      <div class="center">
        <div class="part">
           <div class="today-security">
            <div class="title">今日网络安全事件</div>
            <div class="num">
              <span
                v-for="(item, index) in data5.toLocaleString()"
                :key="index"
                :class="item == ',' ? 'douhao': ''"
              >{{item}}</span>
            </div>
            <div class="add">
              <img src="../../public/static/img/icons/icon_center_add.png" alt />
              <span class="add-num">100</span>
            </div>
          </div>
        </div>
        <div class="part">
          <Map></Map>
        </div>
        <div class="part">
          <CenterBottom></CenterBottom>
        </div>
      </div>

      <div class="right">
        <div class="part">
          <Title title="移动互联网恶意程序样本"></Title>
          <div class="hazard-level">
            <li v-for="item in webSecurityData.malicious_program_type" :key="item.name">
              <span>{{item.name}}</span>
              <span>{{item.value}}</span>
            </li>
          </div>
        </div>
        <div class="part">
          <MaliciousProgram :chartData="webSecurityData.malicious_program_samples.slice(1)"></MaliciousProgram>
        </div>
        <div class="part">
          <Downloads :chartData="webSecurityData.malicious_program_download"></Downloads>
        </div>
        <div class="part">
          <Title title="我省漏洞整体趋势"></Title>
          <LouDongQuShi :type="'漏洞数'" :chartData="webSecurityData.overall_loopholes_type"></LouDongQuShi>
        </div>
        <div class="part">
          <Bug></Bug>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-internet-security {
  width: 100%;
  height: 100%;
  .main {
    padding-left: 10px;
    padding-right: 10px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .left,
    .right {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      width: 22%;
      height: calc(100vh - 60px);
      // border: 1px solid red;
      .part {
        width: 100%;
        // border: 1px solid red;
        .malware {
          position: relative;
          width: 100%;
          height: 210px;
          background-image: url("../../public/static/img/imgs/wangan/img_eycxbg.png");
          background-size: 100%;
          background-position: 0 10px;
          background-repeat: no-repeat;
          font-size: 13px;
          color: #6beebb;
          // padding-left: 10px;
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          .all {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -48px;
            margin-top: -25px;
            width: 100px;
            height: 50px;
            .num {
              font-family: "font-Family-self";
              font-size: 35px;
              line-height: 30px;
            }
          }
          li {
            &:nth-of-type(odd) {
              p {
                width: 60%;
                margin-left: 10px;
              }
            }
            &:nth-of-type(even) {
              p {
                width: 60%;
                margin-left: 55px;
              }
            }
            height: 50%;
            width: 50%;
            padding-top: 30px;
            .num {
              font-family: "font-Family-self";
              font-size: 40px;
              line-height: 30px;
            }
          }
        }
        .hazard-level {
          margin-top: 15px;
          font-size: 12px;
          color: rgba(254, 254, 254, 0.6);
          display: flex;
          justify-content: space-between;
          padding-left: 10px;
          li {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 31%;
            background-color: #11323d;
            height: 24px;
            border: 1px solid #2c8684;
            & span:first-child {
              position: relative;
              margin-left: -5px;
            }
          }
        }
      }
    }
    .right {
      // overflow: hidden;
      // overflow-x: hidden;
    }
    .center {
      padding: 0 20px;
      height: calc(100vh - 60px);
      width: 56%; 
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      .part {
        width: 100%;
        .today-security {
          display: flex;
          justify-content: center;
          margin-top: 20px;
          height: 50px;
          font-size: 13px;
          color: rgba(179, 179, 179, 1);
          .add {
            width: 20px;
            width: 100px;
            height: 100%;
            img {
              height: 70%;
              margin-right: 10px;
              line-height: 50px;
              position: relative;
              top: 10px;
            }
            .add-num {
              font-size: 20px;
              color: #e4da39;
            }
          }
          .title {
            line-height: 55px;
            font-size: 14px;
            color: #e4da39;
          }
          .num {
            text-align: center;
            height: 100%;
            margin: 0 30px;
            span {
              font-family: "font-Family-number";
              margin: 0 5px;
              display: inline-block;
              width: 35px;
              height: 55px;
              font-size: 45px;
              color: #e4da39;
              border-radius: 5px;
              background-color: #2c4f4f;
              border: 1px solid #66a794;
              &.douhao {
                background-color: transparent;
                border: 1px solid transparent;
                margin: 0;
                width: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<script>
import ChildHeader from "../components/ChildHeader";
import Title from "../components/Title";
import JiangMuRu from "../components/internetSecurityCenter/JiangMuRu";
import Downloads from "../components/internetSecurityCenter/Downloads";
import LouDongQuShi from "../components/home/WebSecurity";
import Bug from "../components/internetSecurityCenter/Bug";
import MaliciousProgram from "../components/xinxiguankong/YiChangWangZhanShuLiang";
import TodaySecurity from "../components/internetSecurityCenter/TodaySecurity";
import Map from "../components/internetSecurityCenter/Map";
import CenterBottom from "../components/internetSecurityCenter/CenterBottom";
// import IPNum from '../components/xinxiguankong/IPNum';
export default {
  components: {
    ChildHeader,
    Title,
    Downloads,
    LouDongQuShi,
    MaliciousProgram,
    TodaySecurity,
    JiangMuRu,
    Bug,
    Map,
    // IPNum,
    CenterBottom
  },
  created() {
    this.$http.get("/showData/getData/internet_security").then(({ data }) => {
      data.nameSpace = "webSecurityData";
      this.$store.commit("setData", data);
      this.webSecurityData = this.$store.state.webSecurityData;
      console.log(23333333, this.webSecurityData);
    });
    setInterval(() => {
      this.$http.get("/showData/getData/internet_security").then(({ data }) => {
        data.nameSpace = "webSecurityData";
        this.$store.commit("setData", data);
        this.webSecurityData = this.$store.state.webSecurityData;
        setTimeout(() => {
          this.catchNum = this.webSecurityData.website_statistics.map(
            item => item.value
          );
          this.catchNum1 = this.webSecurityData.zombie_creep_statistics.map(
            item => item.value
          );
        }, 5000);
      });
    }, 5000);
  },
  mounted() {
    setInterval(() => {
      this.data5 = +this.data5 + 1
    }, 300);
  },
  data() {
    return {
      webSecurityData: "",
      data1: [
        { name: "安全事件总数", value: "2000" },
        { name: "系统漏洞", value: "400" },
        { name: "web漏洞", value: "600" }
      ],
      data2: [
        { name: "可用性事件", value: "1000" },
        { name: "网站挂马", value: "800" },
        { name: "篡改事件", value: "600" }
      ],
      color1: [
        ["#397870", "#2f3535"],
        ["#822a23", "#2f3535"],
        ["#808253", "#2f3535"]
      ],
      color2: [
        ["#60455f", "#2f3535"],
        ["#7a5031", "#2f3535"],
        ["#397970", "#2f3535"]
      ],
      data3: [
        { type: "WEB漏洞", num: 30000 },
        { type: "主机漏洞", num: 20000 },
        { type: "网站挂马", num: 3000 },
        { type: "网站篡改", num: 10000 }
      ],
      data4: [
        { type: "【高危】", value: "290" },
        { type: "【中危】", value: "290" },
        { type: "【低危】", value: "290" }
      ],
      data5: 293840
    };
  }
};
</script>