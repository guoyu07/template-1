<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$toast('Hello world!');
  },
};
</script>

<style lang="css">
@import "assets/css/reset.css";
html {
  font-size: 100px;
}
body {
  font-size: 16px;
  background-color: #f2f3f8;
}
html, body {
  width: 100%;
  height: 100%;
}
a:hover{
  text-decoration: none;
}
.app-container {
  height: 100%;
}
.page-scroll {
  overflow: scroll;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
}
</style>
