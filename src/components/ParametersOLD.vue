<template>

    <div class="container">
        <div class="sensor-image">
            <img alt="Vue logo" src="@/assets/DOL26.png">
        </div>
        <ul v-for="(sensor, index) in sensors" v-bind:key="index">
            <li>{{sensor.name}}</li>
            <button v-for="(type, index) in sensor.types" :key="index" class="parameter-button" :class="{highlight:selected.includes(type)}"
                 @click="selectParameter(type, sensor.name)"
            >{{ type }}</button>
            <hr>
        </ul>
        <router-link :to="{path: '/final'}">
            <button class="parameter-button">SHOW SENSORS</button>
        </router-link>
            <ContactForm></ContactForm>
    </div>

</template>

<script>
    import ContactForm from "@/components/ContactForm";
    const API_URL = "http://localhost:4000/sensors";
export default {
  name: 'Parameters',
  components: {
    ContactForm
  },
  props: ['msg'],
  data: function(){
    return {
      title: 'dol-sensors',
      parameters: [{name: 'Sensor Type', types: ['SCR', 'NPN', 'PNP']}, {name: 'Diameter', types: ['18mm', '200mm']}, {name: 'Delay', types: ['OFF', 'ON']}],
      isToggled: null,
        isSelected: null,
        visible: false,
        sensors: [],
        selected: [],
        selection: {type: '', diameter: '', thread: '', delay: ''},

    }
  },
    mounted() {
        fetch(API_URL)
            .then(response => response.json())
            .then(result => {
                this.sensors = result;
            });
    },
  methods: {
    log(message){
        console.log(message);
    },
      selectItem: function(i){
        this.isSelected = i;
      },
      toggleParameter: function (index) {
            this.isToggled = index;
      },
      selectParameter: function (type, name) {

        let vm = this;
          this.selected.includes(type) ? this.selected.splice(this.selected.indexOf(type), 1) : this.selected.push(type);
          let optionName = name.toLowerCase();

          //Checks what parameter was clicked and assigns clicked value to the corresponding data in Vuex state
          if(optionName === 'sensor types'){
              //vm.selection.type === type ? vm.selection.type = null : vm.selection.type = null
              vm.selection.type = type
              this.$store.commit('SET_TYPE', type);
              console.log(this.$store.getters.TYPE_GET)
          }

          else if(optionName === 'diameter') {
              this.selection.diameter = type;
              localStorage.setItem("diameter", type);

              this.$store.commit('SET_DIAMETER', type)
              console.log(this.$store.getters.DIAMETER_GET)
          }
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    list-style: none;
    font-family:"Work Sans";
    padding-bottom: 2%;
    color: #2f2f2f;
  }
  ul {
    margin: 0;
      margin-bottom: 5%;

    padding: 0;
      width: 100%;
  }
  .toggled{
      display: none;
  }
  .none {
      display: none;
  }
  .highlight {
      background-color: #004077 !important;
      color: white !important;
  }
    .parameter-button {
        border: 1px solid #004077;
        margin-right: 4%;
        border-radius: 20px;
        padding: 0 15px 0;
        display: inline-block;
        color: #004077;
        padding-top: 0.5%;
        margin-bottom: 10%;
        background-color: white;
    }
  .sensor-image {
      width: 100%;
  }

    hr {
        border: .5px solid #e6e6e6;
        width: 90%;
    }

        .container {
            width: 100%;
            margin-top: 7vh;
        }

  img {
      width: 100%;
      position: relative;
      margin-bottom: 8%;
  }

</style>
