<template>
  <div>
  <header>
  <nav class="mobile-nav-wrap" role="navigation">
  <transition name="fade">
      <div class="logo" >
        <div class="menu-wrapper" @click="openMenu">
          <div class="hamburger-menu" :class="{'animate': navOpened}"></div>
        </div>
        <router-link to="/index">
        <img class="logo-img" src="../assets/Dol-Sensors-long_white.png" alt="">
    </router-link>
        <ul  class="desktopMenu" v-show="$mq === 'desktop'">
          <li><router-link to="/index">home</router-link></li>
          <li><router-link to="/">capacitive</router-link></li>
          <li><router-link to="/">climate</router-link></li>
          <li><router-link to="/contact">contact us</router-link></li>
        </ul>
      </div>
  </transition>
    <transition name="searchfade">
      <div class="search" :class="{ searchToggled : toggled }">
        <div class="search-holder">
          <img v-if="!toggled" class="search-img"  @click="searchToggle(), loadSensors()" src="../assets/search_icon_selector_blue.png" alt="">
          <img v-else class="search-img"  @click="searchToggle()" src="../assets/X_icon_selector-02.png" alt="">
        </div>
        <div class="input-holder">
          <input class="search-field" type="text" v-model="findSensor" placeholder="Search for sensors or parameters">
        </div>
      </div>
    </transition>
  </nav>
  </header>
    <transition name="menufade">
    <div class="menuOverlay" v-if="navOpened">
        <ul class="navList">
          <router-link to="/index"><li @click="openMenu">Home</li></router-link>
          <router-link to="/"><li @click="openMenu">Capacitive</li></router-link>
          <router-link to="/"><li @click="openMenu">Climate</li></router-link>
          <router-link to="/contact"><li @click="openMenu">Contact us</li></router-link>
        </ul>
    </div>
    </transition>
    <transition name="slideUp">
      <div class="search-container" v-if="toggled">
        <div class="sensor-list">
          <ul  style="margin: 0; ">
            <li v-for="(sensor, index) in filterSearch" :key="index" style="margin: 20px; display: block" @click="sensorAssign(sensor.tags)">
             <router-link to="/final" >
              {{ sensor.name }}
             </router-link>
             <hr style="margin-top: 20px">
          </li>
         </ul>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
const API_URL = "api/sensors";

export default {
  components: {},
  name: 'NavHeader',
  props: {
    msg: String
  },
  data: function(){
    return {
      title: 'dol-sensors',
      toggled: false,
      sensors: [],
      findSensor: null,
      navOpened: false
    }
  },
  methods: {
    searchToggle: function(){
      this.toggled = !this.toggled;
      window.scrollTo(0,0)
    },

    openMenu: function(){
      this.navOpened = !this.navOpened;
    },

    sensorAssign: function (tag) {
      this.$store.commit('SET_TAG', tag);
      this.toggled = !this.toggled;
    },
    loadSensors: function () {
      fetch(API_URL)
              .then(response => response.json())
              .then(result => {
                this.sensors = result;
              });
    }
  },

  computed: {
    filterSearch() {
      return this.sensors.filter( sensor => {
        return !this.findSensor ||
                sensor.tags.toLowerCase().indexOf(this.findSensor.toLowerCase()) > -1
      })
    },
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>





/*----------MOBILE SECTION-----------*/
@media only screen and (max-width: 600px){
  body {

  }

  h3 {

  }

  header {
    height: 10%;
  }

  .search-container {
    height: 85vh;
    background-color: #fcfcfc;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    overflow-y: auto;
    padding-top: 4vh;
    padding-bottom: 4vh;
    overscroll-behavior: contain;
    position: absolute;
    z-index: 111111;
  }

  .sensor-list {
    overflow: auto;

  }

  .logo {
    float:left;
    display:inline;
    width: 80%;
    height: 100%;
    transition: margin-left .25s;
    background-color: #004077;
  }

  .search {
    width: 100%;
    background-color: #004077;
    padding: 0 2% 0 2%;
    position: absolute;
    top: 0;
    left: 80%;
    z-index: 100;
    transition: all .3s;
  }

  .search-holder {
    width: 50px;
    float: left;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    margin-top: 3%;
    margin-left: 2%;
  }

  .input-holder {
    width: 80%;
    float: left;
    margin-top: 5%;
  }

  .logo-img {
    height: 20%;
    padding-top: 6%;
    margin-left: 18%;
  }

  .search-img {
    height: auto;
    width: 46%;
    margin-top: 23%;

  }

  .logoToggled {
    margin-left: 0%;
  }

  .searchToggled {
    left: 0 !important;
  }

  .search-field {
    margin-bottom: 5%;
    display: inline-block;
    border-radius: 20px;
    border: none;
    width: 80%;
    padding: 2% 2%;
    margin-right: 3%;
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
    height: 20vh;
    position: fixed;
    z-index: -1;
    top: 0;
    width: 100%;
    max-width: 100%;
  }



  nav > div {
    height: 100%;
    overflow: auto;
  }

  header {

  }
  /*-----------MENU------------------*/
  .menuOverlay {
    height: 100%;
    background-color: #fcfcfc;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    overflow-y: auto;
    padding-top: 4vh;
    padding-bottom: 4vh;
    position: absolute;
    z-index: 111111;
  }

  .navList li {
    display: block;
    margin-bottom: 10%;
    text-decoration: none;
  }

  .navList a {
    text-decoration: none;
    font-size: large;
    font-weight: initial;
    color: #42b983;
  }

  .menu-wrapper {
    cursor: pointer;
    position: absolute;
    top: 8%;
    left: 5%;
    width: 10%;
    height: 30%;
  }

  .hamburger-menu,
  .hamburger-menu:after,
  .hamburger-menu:before {
    width: 40px;
    height: 3px;
  }

  .hamburger-menu {
    position: relative;
    transform: translateY(25px);
    background: white;
    transition: all 0ms 300ms;
  }
  .hamburger-menu.animate {
    background: rgba(255, 255, 255, 0);
  }

  .hamburger-menu:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 10px;
    background: white;
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .hamburger-menu:after {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    background: white;
    transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .hamburger-menu.animate:after {
    top: 0;
    transform: rotate(45deg);
    transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .hamburger-menu.animate:before {
    bottom: 0;
    transform: rotate(-45deg);
    transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
}

/*----------TABLET SECTION-----------*/
@media only screen and (min-width: 601px) and (max-width: 999px){body {

}

  h3 {

  }

  header {
    height: 10%;
  }

  .search-container {
    height: 85vh;
    background-color: #fcfcfc;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    overflow-y: auto;
    padding-top: 4vh;
    padding-bottom: 4vh;
    overscroll-behavior: contain;
    position: absolute;
    z-index: 111111;
  }

  .sensor-list {
    overflow: auto;

  }

  .logo {
    float:left;
    display:inline;
    width: 80%;
    height: 100%;
    transition: margin-left .25s;
    background-color: #004077;
  }

  .search {
    width: 100%;
    background-color: #004077;
    padding: 0 2% 0 2%;
    position: absolute;
    top: 0;
    left: 80%;
    z-index: 100;
    transition: all .3s;
    overflow: hidden;
  }

  .search-holder {
    width: 50px;
    float: left;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    margin-top: 1%;
    margin-left: 10%;
    cursor: pointer;
  }

  .input-holder {
    width: 80%;
    float: left;
  }

  .logo-img {
    height: 70%;
    padding-top: 1%;
    margin-left: 18%;
  }

  .search-img {
    height: auto;
    width: 46%;
    margin-top: 23%;
  }

  .logoToggled {
    margin-left: 0%;
  }

  .searchToggled {
    left: 0 !important;
  }

  .search-field {
    display: inline-block;
    border-radius: 20px;
    border: none;
    width: 80%;
    padding: 1% 2%;
    margin-right: 3%;
    margin-top: 1.5em;
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
    z-index: 1;
    top: 0;
    width: 100%;
    max-width: 100%;

  }



  nav > div {
    height: 100%;
    overflow: auto;
  }

  header {

  }}

/*----------DESKTOP SECTION-----------*/
@media only screen and (min-width: 1000px){
  body {

  }

  h3 {

  }
  /*----------MENU SECTION-----------*/
  .desktopMenu {
    color: white;
    margin-top: 3%;
  }

  .desktopMenu a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Work Sans";

  }

  /*---------------------------------*/

  header {
    height: 10%;
  }

  .search-container {
    height: 85vh;
    background-color: #fcfcfc;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    overflow-y: auto;
    padding-top: 4vh;
    padding-bottom: 4vh;
    overscroll-behavior: contain;
    position: absolute;
    z-index: 111111;
  }

  .

  .sensor-list {
    overflow: auto;

  }

  .logo {
    float:left;
    display:inline;
    width: 80%;
    height: 100%;
    transition: margin-left .25s;
    background-color: #004077;
  }

  .search {
    width: 100%;
    background-color: #004077;
    padding: 0 2% 0 2%;
    position: absolute;
    top: 0;
    left: 80%;
    z-index: 100;
    transition: all .3s;
    overflow: hidden;
  }

  .search-holder {
    width: 50px;
    float: left;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    margin-top: 1%;
    margin-left: 10%;
    cursor: pointer;
  }

  .input-holder {
    width: 80%;
    float: left;
  }

  .logo-img {
    height: 40%;
    padding-top: 2%;
    margin-left: 3%;
    float: left;
  }

  .search-img {
    height: auto;
    width: 46%;
    margin-top: 23%;
  }

  .logoToggled {
    margin-left: 0%;
  }

  .searchToggled {
    left: 0 !important;
  }

  .search-field {
    display: inline-block;
    border-radius: 20px;
    border: none;
    width: 80%;
    padding: 1% 2%;
    margin-right: 3%;
    margin-top: 1.5em;
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
    z-index: 1;
    top: 0;
    width: 100%;
    max-width: 100%;

  }



  nav > div {
    height: 100%;
    overflow: auto;
  }

  header {

  }
}

  /*-----------TRANSITIONS-----------*/
.slideUp-enter, .slideUp-leave-to {
  opacity: 0;
  transform: translateY(10%);
}

.slideUp-enter-active, .slideUp-leave-active {
  transition: all 0.3s;
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.searchfade-enter-active, .searchfade-leave-active {
  transition: all 3s;
}

.searchfade-enter, .searchfade-leave-to {
  opacity: 0;
}


.menufade-enter-active, .menufade-leave-active {
  transition: all 0.3s;
}

.menufade-enter, .menufade-leave-to {
  opacity: 0;
  transform: translateX(-10%);
}


</style>
