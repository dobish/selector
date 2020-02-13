<template>
  <div id="app">
    <NavHeader></NavHeader>
    <div class="sensor-image">
      <img alt="Vue logo" src="./assets/DOL26.png">
    </div>
      <Parameters></Parameters>
  </div>
</template>

<script>
import NavHeader from "./components/NavHeader.vue";
import Parameters from "@/components/Parameters";

export default {
  name: 'App',
  components: {
    Parameters,
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
}

NavHeader {
  margin: 0;
}

body {
  margin: 0;
}

.sensor-image {
  width: 100%;
}

img {
 width: 100%;
  position: relative;
  margin-bottom: 8%;
}

</style>
