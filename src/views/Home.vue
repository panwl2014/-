<template>
  <div class="home">
    <!-- <Test></Test> -->
    <Header :title="'浙江省通信大数据综合管理平台'"></Header>
    <div class="main">
      <div class="left">
        <!--  -->
        <div class="item">
          <Title :title="'拒绝服务攻击检测情况'"></Title>
          <Server :serverData="serverData"></Server>
        </div>
        <!--  -->
        <div class="item">
          <Title :title="'网络安全监测情况'"></Title>
          <Security :securityData="securityData"></Security>
        </div>
        <!--  -->
        <div class="item">
          <Title :title="'恶意程序监测情况'"></Title>
          <Program :programData="programData"></Program>
        </div>
      </div>

      <div class="nav">
        <!-- 主页入口 -->
        <div class="item">
          <Nav></Nav>
        </div>
        <!-- 反诈监测 -->
        <div class="item bottom-padding ">
          <Title :title="'反诈骗监测情况'"></Title>
          <Monitor :monitorData="monitorData"></Monitor>
        </div>
      </div>

      <div class="right">
        <!--  -->
        <div class="item">
          <Title :title="'省内接入网站备案情况'"></Title>
          <Website :websiteData="websiteData"></Website>
        </div>
        <!--  -->
        <div class="item">
          <Title :title="'浙江省ICP许可情况'"></Title>
          <ICP :ICPData="ICPData"></ICP>
        </div>
        <!--  -->
        <div class="item">
          <Title :title="'维稳工作情况'"></Title>
          <Weiwen></Weiwen>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  padding-top: 10px;
  width: 100%;
  height: 100%;
  .main {
    height: calc(100vh - 60px);
    display: flex;
    flex-wrap: wrap;
    .left, .right {
      & > .item {
        width: 100%;
      }
      display: flex;
      flex-wrap: wrap;
      width: 21.5%;
      height: calc(100vh - 60px);
    }
    .nav {
      width: 57%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 100%;
      }
      .bottom-padding {
        padding: 0 25px;
      }
    }
    .left {
      overflow: hidden;
      padding-left: 10px;
    }
    .right {
      padding-right: 10px;
    }
  }
}
</style>
<script>
import Header from "../components/Header";
import Title from "../components/Title";
import Server from "../components/Server";
import Security from "../components/Security";
import Program from "../components/Program";
import Website from "../components/Website";
import ICP from "../components/ICP";
import Nav from "../components/Nav";
import Monitor from "../components/Monitor";
import Weiwen from "../components/WeiWen";

export default {
  data() {
    return {
      serverData: {
        pieData: [
          { value: 10, name: "体育" },
          { value: 10, name: "色情" },
          { value: 10, name: "博彩" },
          { value: 10, name: "娱乐" },
          { value: 10, name: "文化" },
          { value: 10, name: "金融" },
          { value: 10, name: "教育" }
        ],
        lineData: [
          { out: [20, 30, 40, 30, 20, 40, 25, 30, 20, 25, 30, 15] },
          { use: [15, 25, 30, 20, 15, 35, 15, 20, 10, 20, 20, 10] }
        ]
      },
      securityData: [
        { type: "总数", num: 600 },
        { type: "被仿冒数", num: 300 },
        { type: "被植入数", num: 200 },
        { type: "被篡改数", num: 100 }
      ],
      programData: [
        {
          type: "_id1",
          title: "僵木儒恶意 程序受控主 机IP地址数",
          data: [12, 20, 13, 18, 15, 30, 17, 40, 20, 10, 17, 30]
        },
        {
          type: "_id2",
          title: "僵木蠕被感 染主机IP地 址按地市分布",
          data: [12, 20, 13, 10, 17, 30, 18, 15, 30, 17, 40, 20]
        },
        {
          type: "_id3",
          title: "本省IP数量 ",
          data: [12, 20, 13, 17, 40, 20, 10, 17, 30, 18, 15, 30]
        }
      ],
      websiteData: [
        { status: "未备案", num: "96" },
        { status: "已备案", num: "97" },
        { status: "已备案抽查结果", num: "98" }
      ],
      ICPData: [
        { name: "省内ICP企业有效许可数量", value: "100" },
        { name: "省内ICP企业无效许可数量", value: "120" },
        {
          cityList: [
            { name: "杭州市", value: "100" },
            { name: "宁波市", value: "90" },
            { name: "温州市", value: "80" },
            { name: "金华市", value: "70" },
            { name: "嘉兴市", value: "60" },
            { name: "湖州市", value: "50" },
            { name: "绍兴市", value: "40" },
            { name: "舟山市", value: "30" },
            { name: "台州市", value: "20" },
            { name: "丽水市", value: "10" },
            { name: "衡州市", value: "5" }
          ]
        }
      ],
      monitorData: [
        { name: "诈骗电话数", value: 123 },
        { name: "诈骗短信数", value: 123 },
        { name: "仿冒App", value: 123 },
        { name: "钓鱼网站数", value: 123 },
        { name: "伪基站数", value: 123 }
      ]
    };
  },
  components: {
    Header,
    Title,
    Server,
    Security,
    Program,
    Website,
    ICP,
    Nav,
    Monitor,
    Weiwen,
  }
};
</script>