<template>
  <div class="com-monitor">
    <ul>
      <li v-for="item in monitorData" :key="item.name">
        <div class="circle">
          <div class="border"></div>
        </div>
        <div class="text">
          <p class="num">{{item.value}}</p>
        </div>
        <div class="title">{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.com-monitor {
  height: 250rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  ul {
    height: 130rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    li {
      position: relative;
      width: 100rem;
      height: 100rem;
      text-align: center;
      .circle {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        animation: turn 5s infinite linear;
        @keyframes turn {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        background-image: url("../../../public/static/img/imgs/out-circle.png");
        background-repeat: no-repeat;
        background-size: 100%;
        .border {
          width: 100%;
          height: 100%;
          opacity: 0.8;
          border-radius: 50%;
        }
      }
      .text {
        .num {
          font-family: "font-Family-self";
          font-size: 45rem;
          color: rgb(214, 200, 200);
          line-height: 100rem;
        }
      }
      .title {
        margin-top: 20rem;
        background-color: #192c37;
        font-size: 12rem;
        color: #6beebb;
        line-height: 20rem;
        &::before {
          content: "";
          display: inline-block;
          width: 6rem;
          height: 6rem;
          border-top: 1rem solid #6beebb;
          border-left: 1rem solid #6beebb;
          float: left;
        }
        &::after {
          margin-top: 12rem;
          content: "";
          display: inline-block;
          width: 6rem;
          height: 6rem;
          border-bottom: 1rem solid #6beebb;
          border-right: 1rem solid #6beebb;
          float: right;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      monitorData: [
        { name: "诈骗电话数", value: 120 },
        { name: "诈骗短信数", value: 133 },
        { name: "仿冒App数", value: 230 },
        { name: "钓鱼网站数", value: 312 },
        { name: "伪基站数", value: 112 }
      ]
    };
  }
};
</script> 
