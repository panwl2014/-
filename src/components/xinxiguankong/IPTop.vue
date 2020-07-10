<template>
  <div class="com-iptop">
    <!-- <div class="left">
      <p class="title">浙江省IP总量</p>
      <p class="num">
        <span v-for="item in getNum" :key="getNum.indexOf(item)" class="number">{{item}}</span>
        <span>万</span>
      </p>
    </div>-->
    <div class="right">
      <li class="title top10" id="title">
        <span class="top">排名</span>
        <span class="name">运营商</span>
        <span class="num">IP数</span>
      </li>
      <li v-for="(item, index) in chartData" :key="index" :class="'top10' + ' ' + 't' + (index + 1)">
        <span class="top">{{index + 1}}</span>
        <span class="name">{{item.name}}</span>
        <span class="num">{{item.value}}</span>
      </li>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.com-iptop {
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 12px;
  .right {
    width: 100%;
    color: #82888f;
    font-size: 11px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .name {
      text-align: left;
      width:30%;
    }
    .num {
      width: 25%;
      text-align: right;
    }
    li {
      display: flex;
      justify-content: space-around;
      width: 100%;
      display: flex;
      margin-bottom: 6px;
      height: 12px;
    }
    .top10 {
      padding: 0 10px;
      span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        height: 13px;
        &:first-of-type {
          background-color: #555f61;
          width: 10%;
          border-radius: 5px 0 5px 0;
          color: #fff;
        }
      }
      &.t1 {
        :first-of-type {
          background-color: #fbce38;
          color: #3a3a3a;
        }
      }
      &.t2 {
        :first-of-type {
          color: #3a3a3a;
          background-color: #c57c6b;
        }
      }
      &.t3 {
        :first-of-type {
          color: #3a3a3a;
          background-color: #83b4ad;
        }
      }
    }
    #title {
      span {
        background-color: rgba(1, 1, 1, 0);
        color: #82888f;
        height: 18px;
      }
      background-color: #0e292f;
      margin-bottom: 10px;
      line-height: 18px;
      height: 18px;
    }
  }
}
</style>

<script>
export default {
  props: ['chartData'],
};
</script>
