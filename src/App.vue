<template>
  <div id="app">
    <NavHeader></NavHeader>
    <transition name="fade" mode="out-in">
      <router-view class="main-view"></router-view>
    </transition>
  </div>
</template>

<script>
import NavHeader from "./components/NavHeader.vue";





export default {
  name: 'App',
  components: {
    NavHeader

  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

html {
  padding: 0;
  margin: 0;
  height: 100vh;
  background-color: #fcfcfc;
}

NavHeader {
  margin: 0;
}

body {
  margin: 0;

}

.main-view {
  background-color: #fcfcfc;
  border-radius: 20px;
  margin-top: 7vh;
}






.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
.fade-enter/* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(50%);
  opacity: 0;
}

  .fade-leave-to {
    transform: translateX(-50%);
    opacity: 0;
  }

</style>
