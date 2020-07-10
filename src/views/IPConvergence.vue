<template>
  <div class="page-ip-Convergence">
    <ChildHeader :title="'IP综合汇聚分析'"></ChildHeader>
    <div class="main">
      <div class="left">
        <div class="search-bar">
          <div class="bar">
            <input type="text" v-model="searchData" />
          </div>
          <div class="img">
            <img src="../../public/static/img/icons/icon_search.png" alt />
          </div>
        </div>
        <div class="ip-show">
          <div class="mark1" @click="clickIp(1)"></div>
          <div class="mark2" @click="clickIp(2)"></div>
          <div class="mark3" @click="clickIp(3)"></div>
          <img :src="require(`../../public/static/img/imgs/ip/ip_info${bg}.png`)" alt />
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="ip-title">
            <strong>IP</strong>
            <span>192.168.122.5</span>
          </div>
          <div class="ip-tab">
            <div :class="check == 'left' ? 'isCheck': ''" @click="changeTab('left')">基础信息</div>
            <div :class="check == 'right' ? 'isCheck': ''" @click="changeTab('right')">ICP备案</div>
          </div>
        </div>
        <div class="ip-info">
          <div class="bar"></div>
          <vue-scroll :ops="ops">
            <dl v-for="item in (check == 'left' ? ipInfoLeft: ipInfoRight)" :key="item.type">
              <dt>{{item.type}}</dt>
              <dd v-for="item1 in item.data" :key="item1.name">{{item1.name + '：' + item1.value}}</dd>
            </dl>
          </vue-scroll>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-ip-Convergence {
  .main {
    // border: 1px solid red;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    height: calc(100vh - 35px);
    margin-top: -25px;
    display: flex;
    .left {
      width: 80%;
      height: 100%;
      // border: 1px solid red;
      .search-bar {
        height: 30px;
        width: 25%;
        font-size: 13px;
        color: #fff;
        display: flex;
        .bar {
          height: 30px;
          background: rgba(95, 217, 187, 0.1);
          border: 1px solid rgba(99, 150, 138, 1);
          border-radius: 3px 0 0 3px;
          border-right: none;
          outline: none;
          color: #fff;
          padding: 0 10px;
          flex: 1;
          input {
            width: 100%;
            height: 100%;
            background-color: transparent;
            border: none;
            outline: none;
            color: #fff;
          }
        }
        .img {
          width: 40px;
          height: 30px;
          border: 1px solid rgba(99, 150, 138, 1);
          border-radius: 0 3px 3px 0;
          background: rgba(95, 217, 187, 0.2);
          img {
            width: 20px;
            margin: 5px 10px;
            line-height: 30px;
          }
        }
      }
      .ip-show {
        position: relative;
        width: 100%;
        height: calc(100% - 30px);
        // border: 1px solid orange;
        .mark1,
        .mark2,
        .mark3 {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 1px solid red;
        }
        .mark1 {
          width: 12%;
          height: 17%;
          left: 46%;
          top: 46%;
          z-index: 12;
        }
        .mark2 {
          width: 6%;
          height: 8%;
          left: 24.5%;
          top: 25%;
          z-index: 11;
        }
        .mark3 {
          z-index: 10;
          width: 3.5%;
          height: 5%;
          left: 30%;
          top: 10%;
        }
        img {
          width: 95%;
          border: 1px solid red;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
    }
    .right {
      background-image: url("../../public/static/img/imgs/ip/img_IPbg.png");
      background-size: 100% 100%;
      // padding: 20px;
      flex: 1;
      height: 100%;
      .top {
        width: 100%;
        padding: 20px;
      }
      .ip-title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        background-image: url("../../public/static/img/imgs/ip/img_IPtitlebg2.png");
        background-size: 100% 100%;
        font-size: 15px;
        color: #b3b3b3;
        strong {
          font-size: 20px;
          color: #6beebb;
          margin-right: 10px;
        }
      }
      .ip-tab {
        margin-top: 30px;
        width: 100%;
        height: 40px;
        display: flex;
        & > div {
          text-align: center;
          width: 50%;
          height: 100%;
          background-size: 100% 100%;
          font-size: 13px;
          color: #b3b3b3;
          line-height: 45px;
          background-image: url("../../public/static/img/imgs/ip/img_IPnormal.png");
          &.isCheck {
            line-height: 40px;
            font-size: 15px;
            color: #e4da39;
            background-image: url("../../public/static/img/imgs/ip/img_IPclick.png");
          }
        }
      }
      .ip-info {
        font-size: 13px;
        margin-top: 10px;
        width: 100%;
        height: calc(100% - 200px);
        padding-left: 20px;
        padding-right: 5px;
        position: relative;
        &:hover .bar {
          opacity: 0.5;
        }
        // .bar {
        //   width: 4px;
        //   border-radius: 2px;
        //   position: absolute;
        //   background-color: #34605e;
        //   opacity: 0;
        //   height: calc(100%);
        //   right: 8px;
        // }
        dl {
          margin-bottom: 25px;
          dt {
            color: #62dbae;
            font-size: 15px;
            margin-bottom: 5px;
          }
          dd {
            color: #b3b3b3;
            font-size: 13px;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>
<script>
import ChildHeader from "../components/ChildHeader";
export default {
  data() {
    return {
      ops: {
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false,
          background: "#34605e",
          // opacity: 0.3,
          size: "4px"
        }
      },
      searchData: "",
      check: "left",
      bg: 1,
      ipInfoLeft: [
        {
          type: "基本信息",
          data: [
            { name: "所属营运商", value: "浙江·宁波移动" },
            { name: "所属企业", value: "宁波市****" },
            { name: "所属机房", value: "宁波***机房" },
            { name: "所在机房区域", value: "A-13区" },
            { name: "所在机柜", value: "189" },
            { name: "服务器编号", value: "abab123" }
          ]
        },
        {
          type: "来源信息",
          data: [
            { name: "来源单位", value: "宁波移动" },
            { name: "所在城市", value: "浙江宁波" },
            { name: "报备时间", value: "2020年07月03日" },
            { name: "备案状态", value: "已备案" }
          ]
        },
        {
          type: "分配使用信息",
          data: [
            { name: "单位名称", value: "宁波橙点科技有限公司" },
            { name: "单位性质", value: "企业" },
            { name: "所在城市", value: "浙江宁波" },
            { name: "单位分类", value: "********" },
            { name: "单位行政级别", value: "********" },
            { name: "单位所属行业", value: "********" },
            { name: "单位地址", value: "********" },
            { name: "联系人", value: "********" },
            { name: "联系电话", value: "********" },
            { name: "电子邮件", value: "********" },
            { name: "经营许可证编号", value: "********" },
            { name: "分配类型", value: "********" },
            { name: "联系电话", value: "********" },
            { name: "电子邮件", value: "********" },
            { name: "经营许可证编号", value: "********" },
            { name: "分配类型", value: "********" },
            { name: "联系电话", value: "********" },
            { name: "电子邮件", value: "********" },
            { name: "经营许可证编号", value: "********" },
            { name: "分配类型", value: "********" },
          ]
        }
      ],
      ipInfoRight: [
        {
          type: "主体信息",
          data: [
            { name: "单位名称", value: "宁波橙点科技有限公司" },
            { name: "单位性质", value: "企业" },
            { name: "主体备案号", value: "浙ICP备11713090" },
            { name: "单位通信地址", value: "*********" },
            { name: "报备方式", value: "*********" },
            { name: "负责人手机", value: "*********" }
          ]
        },
        {
          type: "网站信息",
          data: [
            { name: "网站名称", value: "橙点科技" },
            { name: "网站域名", value: "*********" },
            { name: "网站备案号", value: "*********" },
            { name: "网站服务类型", value: "*********" }
          ]
        },
        {
          type: "网站接入信息",
          data: [
            { name: "接入商信息", value: "浙江移动" },
            { name: "IP地址", value: "*********" },
            { name: "服务器放置地点", value: "*********" },
            { name: "接入方式", value: "*********" }
          ]
        },
      ],
    };
  },
  components: { ChildHeader },
  methods: {
    changeTab(e) {
      this.check = e;
    },

    clickIp(e) {
      this.bg = e;
    }
  }
};
</script>