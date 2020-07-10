<template>
  <div class="page-mc" v-if="controlData">
    <ChildHeader :title="'管控信息中心'"></ChildHeader>
    <div class="main">
      <div class="left">
          <div class="part">
              <Title title="浙江省网站/IP活跃趋势"></Title>
              <WebIPActiveTrend></WebIPActiveTrend>
          </div>
          <div class="part">
              <Title title="网站行业分布Top10"></Title>
              <WebTradeTop :chartData="controlData.website_distribution" :title="title1"></WebTradeTop>
          </div>
          <div class="part">
              <Title title="IP数量TOP10运营商"></Title>
              <IPTop :chartData="controlData.IP_number"></IPTop>
          </div>
      </div>

      <div class="center">
        <div class="part">
          <IPNum :chartData="controlData.IP_statistics"></IPNum>
        </div>
        <div class="part">
          <ZheJiangMap :chartData="controlData.data_map"></ZheJiangMap>
        </div>
        <div class="part">
          <CenterBottom></CenterBottom>
        </div>
      </div>

      <div class="right">
          <div class="part">
              <Title title="异常网站数量与分布"></Title>
              <YiChangWangZhanShuLiang :chartData="controlData.abnormal_website_number"></YiChangWangZhanShuLiang>
          </div>
          <div class="part">
              <Title title="ICP备案"></Title>
              <ICP :chartData="controlData.ICP_record_number"></ICP>
          </div>
          <div class="part">
              <Title title="网站访问排名TOP10"></Title>
              <WangZhanFangWenTop10></WangZhanFangWenTop10>
          </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-mc {
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
      // border: 1px solid red;
      .part {
        width: 100%;
      }
    }
  }
}
</style>
<script>
import ChildHeader from '../components/ChildHeader'
import Title from '../components/Title'
import WebIPActiveTrend from '../components/xinxiguankong/WebIPActiveTrend'
import WebTradeTop from '../components/xinxiguankong/WebTradeTop'
import IPTop from '../components/xinxiguankong/IPTop'
import YiChangWangZhanShuLiang from '../components/xinxiguankong/YiChangWangZhanShuLiang'
import ZheJiangMap from '../components/xinxiguankong/ZheJiangMap'
import ICP from '../components/xinxiguankong/ICP'
import WangZhanFangWenTop10 from "../components/xinxiguankong/WangZhanFangWenTop10"
import IPNum from "../components/xinxiguankong/IPNum"
import CenterBottom from "../components/xinxiguankong/CenterBottom"
export default {
  
  components: {
   ChildHeader,
   Title,
   WebIPActiveTrend,
   WebTradeTop,
   IPTop,
   YiChangWangZhanShuLiang,
   ZheJiangMap,
   ICP,
   WangZhanFangWenTop10,
   IPNum,
   CenterBottom
  },
  data() {
    return {
      controlData: '',
      data1: [
        { id: 1, type: "商务网站", num: 1000, IDC: "杭州**公司", num2: 1000 },
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
      title1: ['网站数', '网站类型', '网站类型', '网站数']
    }
  },  
  created() {
    this.$http.get("/showData/getData/control_info").then(({ data }) => {
      data.nameSpace = "controlData";
      this.$store.commit("setData", data);
      this.controlData = this.$store.state.controlData;
    });
    setInterval(() => {
      this.$http.get("/showData/getData/control_info").then(({ data }) => {
        data.nameSpace = "controlData";
        this.$store.commit("setData", data);
        this.controlData = this.$store.state.controlData;
      });
    }, 5000);
  },
};
</script>