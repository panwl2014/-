<template>
  <div class="com-info-security">
    <!-- <li class="top10" id="title">
      <span class="num">{{title[0]}}</span>
      <span class="type">{{title[1]}}</span>
      <span class="top"></span>
      <span class="idc">{{title[2]}}</span>
      <span class="num2">{{title[3]}}</span>
    </li>-->
    <li v-for="(item, index) in chartData" :key="index" :class="'top10'">
      <!-- <span class="num">
        <span class="left-data" :style="{width: `${item.value/1500 * 100 + '%'}`}"></span>
        <span class="left-num">{{item.value}}</span>
      </span>-->
      <!-- <span class="type">{{item.IDC}}</span> -->
      <span :class="(index <= 2) ? 'topColor': '' + 'top' " :style="{backgroundColor: colorList[index] || '#354044'}">{{index + 1}}</span>
      <span class="idc text-overfllow">{{item.IDC}}</span>
      <span class="num2">
        <span class="right-data" :style="{width: `${item.number/1500 * 100 + '%'}`}"></span>
      </span>
      <span class="right-num">{{item.number}}</span>
    </li>
  </div>
</template>
<script>
export default {
  props: ["chartData", "title"],
  data() {
    return {
      colorList: ['#966546', '#918a25', '#577e75'] 
    }
  }
};
</script>

<style lang="scss" scoped>
.com-info-security {
  width: 100%;
  position: relative;
  font-size: 11px;
  line-height: 12px;
  .top10 {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 5px 0 5px 10px;
    // .num {
    //   .left-data {
    //     background-color: #87726e;
    //     display: block;
    //     height: 100%;
    //     position: absolute;
    //     right: 0;
    //     animation: showleft 1.2s ease-out forwards;
    //     @keyframes showleft {
    //       0% {
    //         transform: translateX(100%);
    //       }
    //       100% {
    //         transform: translateX(0%);
    //       }
    //     }
    //   }
    //   .left-num {
    //     position: absolute;
    //     left: 2px;
    //     top: 0;
    //   }
    // }
    .num2 {
      margin-top: 5px;
      border-radius: 2px;
      height: 4px;
      background-color: rgba(80, 80, 80, 0.4);
      width: 40%;
      color: rgb(187, 187, 187);
      position: relative;
      overflow: hidden;
      .right-data {
        border-radius: 2px;
        background-color: #4E4745;
        display: block;
        height: 4px;
        position: absolute;
        left: 0;
        animation: showright 1.2s forwards;
        @keyframes showright {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      }
    }
    .right-num {
      color: #999;
      margin-top: 2px;
    }
    // .type {
    //   color: #488877;
    //   width: 20%;
    //   text-align: right;
    //   text-overflow: ellipsis;
    //   white-space: nowrap;
    //   overflow: hidden;
    //   height: 12px;
    // }
    .idc {
      max-width: 30%;
      color: #999 ;
      height: 12px;
    }
    .top {
      color: rgb(202, 202, 202);
      height: 15px;
      width: 15px;
      border-radius: 1px;
      text-align: center;
      line-height: 15px;
    }
    .topColor {
      background-color: #907e4e;
      color: #fff;
      height: 15px;
      width: 15px;
      border-radius: 1px;
      text-align: center;
      line-height: 15px;
    }
  }
  // #title {
  //     span {
  //         height: 20px;
  //     }
  //   .num, .num2 {
  //       background-color: transparent;
  //   }
  //   .top {
  //       background-color: transparent;
  //   }
  // }
}
</style>