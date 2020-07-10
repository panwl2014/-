<template>
  <div class="page-internet-security" v-if="infoSecurityData">
    <ChildHeader :title="'信息安全中心'"></ChildHeader>
    <div class="main">
      <div class="left">
        <div class="part">
          <Title title="信息安全事件数"></Title>
          <TodayInfoSecurite :chartData="infoSecurityData.today_info_security"></TodayInfoSecurite>
        </div>
        <div class="part">
          <Title title="近一个月信安事件趋势"></Title>
          <OneMonthInfoSecurity :chartData="infoSecurityData.info_security_last_30day_trend"></OneMonthInfoSecurity>
        </div>
        <div class="part">
          <Title title="信安事件相关机房TOP10" :showMore="true"></Title>
          <EngineRoomTop :chartData="infoSecurityData.info_security_engine_room"></EngineRoomTop>
        </div>
      </div>

      <div class="center">
        <div class="part">
          <div class="today-security">
            <div class="title">今日信息安全事件</div>
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
          <Map :chartData="infoSecurityData.info_security_map"></Map>
        </div>
        <div class="part">
          <CenterBottom></CenterBottom>
        </div>
      </div>

      <div class="right">
        <div class="part">
          <Title title="ISMS检测统计TOP10"></Title>
          <ISMSTop></ISMSTop>
        </div>
        <div class="part">
          <Title title="网站访问统计" :showMore="true"></Title>
          <WebVisit></WebVisit>
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
      }
    }
    .right {
      // overflow: hidden;
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
// import Title from "../components/Title";
import Map from "../components/InfoSecurityCenter/Map";
import CenterBottom from "../components/InfoSecurityCenter/CenterBottom";
import TodayInfoSecurite from "../components/InfoSecurityCenter/TodayInfoSecurite";
import OneMonthInfoSecurity from "../components/InfoSecurityCenter/OneMonthInfoSecurity";
import EngineRoomTop from "../components/InfoSecurityCenter/EngineRoomTop";
import ISMSTop from "../components/InfoSecurityCenter/ISMSTop";
import WebVisit from "../components/InfoSecurityCenter/WebVisit";
import Title from "../components/InfoSecurityTitle";
export default {
  components: {
    ChildHeader,
    Title,
    Map,
    CenterBottom,
    TodayInfoSecurite,
    OneMonthInfoSecurity,
    EngineRoomTop,
    ISMSTop,
    WebVisit
  },
  data() {
    return {
      infoSecurityData: "",
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
      data5: 293840,
    };
  },
  mounted() {
    setInterval(() => {
      this.data5 = this.data5 + 1
    }, 3000);
  },
  created() {
    this.$http.get("/showData/getData/info_security").then(({ data }) => {
      data.nameSpace = "infoSecurityData";
      this.$store.commit("setData", data);
      this.infoSecurityData = this.$store.state.infoSecurityData;
      console.log("infodata", this.infoSecurityData);
    });
    setInterval(() => {
      this.$http.get("/showData/getData/info_security").then(({ data }) => {
        data.nameSpace = "infoSecurityData";
        this.$store.commit("setData", data);
        this.infoSecurityData = this.$store.state.infoSecurityData;
      });
    }, 5000);
  }
};
</script>