<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./base.scss";
</style>
<script>
export default {
  created() {
    // this.$http
    //   .get("/showData/getData/main")
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    // this.$http
    //   .get("/isLogin")
    //   .then(res => console.log('login'))
    //   .catch(err => console.log('login_err'));

    // this.$http.allUser('/showData/getData/main')
    // .then(res => {
    //   console.log(res, 111)
    // })
    // .catch(err => console.log(err))

    // test webscoket
    // let ws = new WebSocket("ws://103.44.144.41:9001");
    // ws.onopen = function(e) {
    //   console.log(e);
    //   console.log("Connection open ...");
    //   // ws.send("Hello WebSockets!");
    // };
    // ws.onerror = function(err) {
    //   console.log(err);
    // };
    // var ws = new WebSocket("ws://103.44.144.41:9001");

    
    // var ws = new WebSocket("ws://103.44.144.41:9001/showData/getData/main");
    // ws.onopen = function() {
    //   console.log("Connection open ...");
    //   ws.send("Hello WebSockets!");
    // };

    // ws.onmessage = function(evt) {
    //   console.log("Received Message: " + evt.data);
    //   ws.close();
    // };

    // ws.onclose = function() {
    //   console.log("Connection closed.");
    // };
  }
};
</script>