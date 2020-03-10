<template>
  <div>
  <header>
  <nav class="mobile-nav-wrap" role="navigation">
    <div>
      <img class="logo-img" src="../assets/Dol-Sensors-long_white.png" alt="">
    </div>
  </nav>
  </header>
  </div>
</template>

<script>

export default {
  components: {},
  name: 'NavHeader',
  props: {
    msg: String
  },
  data: function(){
    return {
      title: 'dol-sensors'
    }
  },
  methods: {
    menu: function(){

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mobile-header-nav {
  background-color: #222;
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100px;
  width: 100%;
}

.mobile-nav-wrap{
  height: 10vh;
  position: fixed;
  z-index: -1;
  top: 0;
  width: 100%;
  background-color: #004077;
}

.logo-img {
  height: 50%;
  margin-top: 2%;
}

nav > div {
  height: 100%;
  overflow: auto;
}

header {

}

</style>
