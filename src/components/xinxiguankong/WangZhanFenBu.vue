<template>
  <div class="com-wangzhanfenbu">
    <li class="top10" id="title">
      <span class="num">{{title[0]}}</span>
      <span class="type">{{title[1]}}</span>
      <span class="top"></span>
      <span class="idc">{{title[2]}}</span>
      <span class="num2">{{title[3]}}</span>
    </li>
    <li v-for="item in data" :key="item.id" :class="'top10'">
      <span class="num">
        <span class="left-data" :style="{width: `${item.num/1000 * 100 + '%'}`}"></span>
        <span class="left-num">{{item.num}}</span>
      </span>
      <span class="type">{{item.type}}</span>
      <span :class="(item.id <= 3) ? 'topColor': '' + 'top' ">{{item.id}}</span>
      <span class="idc">{{item.IDC}}</span>
      <span class="num2">
        <span class="right-data" :style="{width: `${item.num/1000 * 100 + '%'}`}"></span>
        <span class="right-num">{{item.num2}}</span>
      </span>
    </li>
  </div>
</template>
<script>
export default {
  props: ['data', 'title']
};
</script>

<style lang="scss" scoped>
.com-wangzhanfenbu {
  width: 100%;
  position: relative;
  font-size: 11px;
  line-height: 12px;
  .top10 {
    span {
      height: 10px;
    }
    display: flex;
    justify-content: space-between;
    margin: 8px 0 8px 10px;
    .num,
    .num2 {
      background-color: rgba(80, 80, 80, 0.4);
      width: 20%;
      color: rgb(187, 187, 187);
      position: relative;
      overflow: hidden;
    }
    .num {
      .left-data {
        background-color: #87726e;
        display: block;
        height: 100%;
        position: absolute;
        right: 0;
        animation: showleft 1.2s ease-out forwards;
        @keyframes showleft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      }
      .left-num {
        position: absolute;
        left: 2px;
        top: 0;
      }
    }
    .num2 {
      .right-data {
        background-color: #488877;
        display: block;
        height: 100%;
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
      .right-num {
        position: absolute;
        right: 2px;
        top: 0;
      }
    }
    .type {
      color: #488877;
      width: 20%;
      text-align: right;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      height: 12px;
      direction: rtl;
    }
    .idc {
      width: 20%;
      color: #87726e;
      height: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .top {
      background-color: #354044;
      color: rgb(202, 202, 202);
      height: 15px;
      width: 15px;
      border-radius: 1px;
      text-align: center;
      line-height: 15px;
      margin: 0 15px;
    }
    .topColor {
      background-color: #907e4e;
      color: #fff;
      height: 15px;
      width: 15px;
      border-radius: 1px;
      text-align: center;
      line-height: 15px;
      margin: 0 15px;
    }
  }
  #title {
      span {
          height: 20px;
      }
    .num, .num2 {
        background-color: transparent;
    }
    .top {
        background-color: transparent;
    }
  }
}
</style>