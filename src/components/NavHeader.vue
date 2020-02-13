<template>
  <header>
  <nav class="mobile-nav-wrap" role="navigation">
    <ul class="mobile-header-nav">
      <li><a href="#">Nav Item 1</a></li>
      <li><a href="#">Nav Item 2</a></li>
      <li><a href="#">Nav Item 3</a></li>
    </ul>
  </nav>
  </header>
</template>

<script>
export default {
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
  margin: 40px 0 0;
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
.mobile-header-nav li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.mobile-header-nav li a {
  color: white;
  display: block;
  padding: 15px 0;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
header {
  box-shadow: 0px 5px 5px #999;
  height: 70px;
  position: relative;
  width: 100%;
  background-color: #004077;
}
.mobile-header-nav li a:hover {
  background-color: #2f2f2f;
}

</style>
