<template>
  <div class="page-datav">
    <div>
        <dv-border-box-1>dv-border-box-1</dv-border-box-1>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<style lang="scss" scoped>
.page-datav {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  & > div {
    border: 1px solid;
    width: 25%;
    height: 50vh;
  }
}
</style>